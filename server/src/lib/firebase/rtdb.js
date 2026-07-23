import { rtdb } from "./clientApp";
import { ref, push, onValue, get, remove, update, set } from "firebase/database";

// Listen to all databases at root level
export function subscribeToDatabases(userId, callback) {
  const rootRef = ref(rtdb, "/");
  return onValue(rootRef, (snapshot) => {
    const options = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const dbName = childSnapshot.key;
        const dbData = childSnapshot.val();
        
        let isPrivate = false;
        let ownerId = null;

        if (dbData.PrivacyStatus !== undefined) {
          // New Schema
          isPrivate = dbData.PrivacyStatus === "private";
          ownerId = dbData.ownerId;
        } else {
          // Old Schema fallback
          childSnapshot.forEach((entrySnapshot) => {
            const entry = entrySnapshot.val();
            if (entry?.PrivacyStatus === "private") isPrivate = true;
            if (entry?.ownerId) ownerId = entry.ownerId;
            return true; // only need to check first entry
          });
        }

        if (!isPrivate || ownerId === userId) {
          options.push({
            name: dbName,
            ownerId: ownerId,
            isPrivate: isPrivate
          });
        }
      });
    }
    options.sort((a, b) => a.name.localeCompare(b.name));
    callback(options);
  });
}

// Check if a database ref exists
export async function refExists(refName) {
  try {
    const snapshot = await get(ref(rtdb, refName));
    return snapshot.exists();
  } catch (error) {
    console.error("Error checking ref exists:", error);
    return false;
  }
}

// Fetch template for a given database
export async function getTemplate(dbName) {
  let template_categories = [];
  let template_defaults = [];

  const snapshot = await get(ref(rtdb, dbName));
  if (snapshot.exists()) {
    const data = snapshot.val();
    
    if (data.template) {
      // New Schema
      let keys = Object.keys(data.template);
      // Respect saved order if present
      if (Array.isArray(data.categoryOrder)) {
        const ordered = data.categoryOrder.filter(k => k in data.template);
        const rest = keys.filter(k => !ordered.includes(k));
        keys = [...ordered, ...rest];
      }
      for (const key of keys) {
        const value = data.template[key];
        template_categories.push(key);
        template_defaults.push(value === "temp" + key ? "" : value);
      }
    } else {
      // Old Schema fallback
      let firstEntry = null;
      snapshot.forEach((entrySnapshot) => {
        firstEntry = entrySnapshot.val();
        return true; // only first entry
      });

      if (firstEntry) {
        for (const key in firstEntry) {
          if (key === "PrivacyStatus" || key === "ownerId") continue;

          template_categories.push(key);
          if (firstEntry[key] === "temp" + key) {
            template_defaults.push("");
          } else {
            template_defaults.push(firstEntry[key]);
          }
        }
      }
    }
  }

  if (template_categories.length === 0) {
    template_categories = ["value", "timestamp"];
    template_defaults = ["", ""];
  }

  return { categories: template_categories, defaults: template_defaults };
}

// Add an entry to a specific database
export async function addEntry(dbName, data) {
  if (!dbName) throw new Error("No database selected");
  const dbRef = ref(rtdb, `${dbName}/entries`);
  await push(dbRef, data);
}

// Add multiple entries to a specific database
export async function addEntries(dbName, entriesDataArray) {
  if (!dbName) throw new Error("No database selected");
  const dbRef = ref(rtdb, `${dbName}/entries`);
  const updates = {};
  entriesDataArray.forEach(data => {
    const newChildRef = push(dbRef);
    updates[`${dbName}/entries/${newChildRef.key}`] = data;
  });
  await update(ref(rtdb), updates);
}

// Create a new database
export async function createDatabase(dbName, categories, isPublic, userId) {
  if (!dbName) throw new Error("Database name required");
  
  const currRef = ref(rtdb, dbName);
  if (await refExists(dbName)) {
    throw new Error("This database already exists! Please give a different name.");
  }

  const categoryOrder = [];
  const metadata = {
    PrivacyStatus: isPublic || !userId ? "public" : "private",
    template: {}
  };
  if (userId) {
    metadata.ownerId = userId;
  }

  for (const c of categories) {
    const [category, defaultValue] = c.split(":");
    metadata.template[category] = defaultValue ? defaultValue : "temp" + category;
    categoryOrder.push(category);
  }
  metadata.categoryOrder = categoryOrder;

  await set(currRef, metadata);
}

// Claim a database for a user
export async function claimDatabase(dbName, userId) {
  if (!dbName) throw new Error("Database name required");
  if (!userId) throw new Error("User ID required");
  
  const snapshot = await get(ref(rtdb, dbName));
  if (!snapshot.exists()) return;
  
  const dbData = snapshot.val();
  
  if (dbData.template) {
    // New schema
    await update(ref(rtdb, dbName), { ownerId: userId });
  } else {
    // Old schema: update first entry
    let firstKey = null;
    snapshot.forEach(entrySnap => {
      if (!firstKey) firstKey = entrySnap.key;
    });
    if (firstKey) {
      await update(ref(rtdb, `${dbName}/${firstKey}`), { ownerId: userId });
    }
  }
}

// Toggle database privacy
export async function toggleDatabasePrivacy(dbName, makePrivate) {
  if (!dbName) throw new Error("Database name required");
  
  const snapshot = await get(ref(rtdb, dbName));
  if (!snapshot.exists()) return;
  
  const dbData = snapshot.val();
  const status = makePrivate ? "private" : "public";
  
  if (dbData.template) {
    await update(ref(rtdb, dbName), { PrivacyStatus: status });
  } else {
    // Old schema
    let firstKey = null;
    snapshot.forEach(entrySnap => {
      if (!firstKey) firstKey = entrySnap.key;
    });
    if (firstKey) {
      await update(ref(rtdb, `${dbName}/${firstKey}`), { PrivacyStatus: status });
    }
  }
}

// Delete an existing database
export async function deleteDatabase(dbName) {
  if (!dbName) throw new Error("Database name required");
  await remove(ref(rtdb, dbName));
}

// Modify categories of an existing database
export async function modifyCategories(dbName, newCategories) {
  if (!dbName) throw new Error("Database name required");
  
  const snapshot = await get(ref(rtdb, dbName));
  if (!snapshot.exists()) return;

  const dbData = snapshot.val();
  const updates = {};
  
  if (dbData.template) {
    // New Schema
    const currentOrder = Array.isArray(dbData.categoryOrder) ? [...dbData.categoryOrder] : Object.keys(dbData.template);
    for (const c of newCategories) {
      const [category, defaultValue] = c.split(":");
      if (!(category in dbData.template)) {
        updates[`${dbName}/template/${category}`] = defaultValue ? defaultValue : "temp" + category;
        currentOrder.push(category);
        
        // Also update existing entries if any
        if (dbData.entries) {
          for (const nodeKey of Object.keys(dbData.entries)) {
            updates[`${dbName}/entries/${nodeKey}/${category}`] = defaultValue ? defaultValue : "temp" + category;
          }
        }
      }
    }
    updates[`${dbName}/categoryOrder`] = currentOrder;
  } else {
    // Old Schema
    snapshot.forEach(nodeSnap => {
      const nodeKey = nodeSnap.key;
      const nodeData = nodeSnap.val() || {};

      for (const c of newCategories) {
        const [category, defaultValue] = c.split(":");
        if (!(category in nodeData)) {
          if (defaultValue) {
            updates[`${dbName}/${nodeKey}/${category}`] = defaultValue;
          } else {
            updates[`${dbName}/${nodeKey}/${category}`] = "temp" + category;
          }
        }
      }
    });
  }

  if (Object.keys(updates).length > 0) {
    await update(ref(rtdb), updates);
  }
}

// Remove a category from a database (template + all entries)
export async function removeCategory(dbName, categoryName) {
  if (!dbName) throw new Error("Database name required");

  const snapshot = await get(ref(rtdb, dbName));
  if (!snapshot.exists()) return;

  const dbData = snapshot.val();
  const updates = {};

  if (dbData.template) {
    // New schema: remove from template
    updates[`${dbName}/template/${categoryName}`] = null;

    // Remove from categoryOrder
    if (Array.isArray(dbData.categoryOrder)) {
      updates[`${dbName}/categoryOrder`] = dbData.categoryOrder.filter(k => k !== categoryName);
    }

    // Remove from all entries
    if (dbData.entries) {
      for (const nodeKey of Object.keys(dbData.entries)) {
        if (categoryName in (dbData.entries[nodeKey] || {})) {
          updates[`${dbName}/entries/${nodeKey}/${categoryName}`] = null;
        }
      }
    }
  } else {
    // Old schema fallback: remove field from each entry
    snapshot.forEach((nodeSnap) => {
      const nodeData = nodeSnap.val() || {};
      if (categoryName in nodeData) {
        updates[`${dbName}/${nodeSnap.key}/${categoryName}`] = null;
      }
    });
  }

  await update(ref(rtdb), updates);
}

// Reorder categories by saving a new categoryOrder array
export async function reorderCategories(dbName, orderedCategories) {
  if (!dbName) throw new Error("Database name required");
  await update(ref(rtdb, dbName), { categoryOrder: orderedCategories });
}

// Update specific fields of an existing entry
export async function updateEntry(dbName, entryId, data) {
  if (!dbName) throw new Error("Database name required");
  if (!entryId) throw new Error("Entry ID required");
  await update(ref(rtdb, `${dbName}/entries/${entryId}`), data);
}

// Subscribe to entries for a specific database
export function subscribeToEntries(dbName, callback) {
  if (!dbName) return () => {};
  
  return onValue(ref(rtdb, dbName), (snapshot) => {
    const data = snapshot.val();
    const entries = [];
    if (data) {
      if (data.template) {
        // New Schema
        if (data.entries) {
          for (const key in data.entries) {
            entries.push({ id: key, ...data.entries[key] });
          }
        }
      } else {
        // Old Schema fallback
        for (const key in data) {
          if (data[key].PrivacyStatus) continue; // skip the metadata/schema node
          entries.push({ id: key, ...data[key] });
        }
      }
    }
    callback(entries);
  });
}
