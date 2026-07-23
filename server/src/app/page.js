"use client";

import React, { useState, useEffect } from "react";
import {
  subscribeToDatabases,
  getTemplate,
  addEntry,
  addEntries,
  createDatabase,
  deleteDatabase,
  modifyCategories,
  removeCategory,
  reorderCategories,
  updateEntry,
  subscribeToEntries,
  claimDatabase,
  toggleDatabasePrivacy,
} from "@/src/lib/firebase/rtdb";
import { useUser } from "@/src/lib/getUser";
import * as XLSX from "xlsx";

export default function DatabaseManager() {
  const user = useUser();
  const [databases, setDatabases] = useState([]);
  const [selectedDb, setSelectedDb] = useState("");
  const [currentSection, setCurrentSection] = useState("home");

  // Popup state
  const [toasts, setToasts] = useState([]);
  const [confirmModal, setConfirmModal] = useState(null);

  const showToast = (message, type = "info") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Create DB state
  const [newDbName, setNewDbName] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryDefault, setNewCategoryDefault] = useState("");
  const [newDbCategories, setNewDbCategories] = useState([]);
  const [isPublic, setIsPublic] = useState(false);

  // View & Modify DB state
  const [entries, setEntries] = useState([]);
  const [template, setTemplate] = useState({ categories: [], defaults: [] });
  const [modifyCategoryName, setModifyCategoryName] = useState("");
  const [modifyCategoryDefault, setModifyCategoryDefault] = useState("");
  const [modifyCategoriesList, setModifyCategoriesList] = useState([]);

  // Add Entry state
  const [addEntryData, setAddEntryData] = useState({});

  // Bulk Add Entries state
  const [addBulkData, setAddBulkData] = useState({});
  const [bulkDelimiter, setBulkDelimiter] = useState(",");
  const [bulkAddMode, setBulkAddMode] = useState("column");
  const [bulkRawText, setBulkRawText] = useState("");

  // Editing state for view
  const [editingEntry, setEditingEntry] = useState(null); // { id, data }

  // Drag state for category reordering
  const [draggedCat, setDraggedCat] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeToDatabases(user?.uid, (dbs) => {
      setDatabases(dbs);
    });
    return () => unsubscribe();
  }, [user?.uid]);

  // Claim anonymous databases upon login
  useEffect(() => {
    const claimAnonymousDbs = async () => {
      if (user?.uid) {
        let anonDbs = [];
        try {
          const stored = localStorage.getItem("anonymousOwnedDatabases");
          if (stored) anonDbs = JSON.parse(stored);
        } catch (e) { }

        if (anonDbs.length > 0) {
          for (const dbName of anonDbs) {
            try {
              await claimDatabase(dbName, user.uid);
            } catch (e) {
              console.error(`Failed to claim ${dbName}`, e);
            }
          }
          // Clear after attempting to claim
          localStorage.removeItem("anonymousOwnedDatabases");
          showToast(`Claimed ${anonDbs.length} previously created databases!`, "success");
        }
      }
    };
    claimAnonymousDbs();
  }, [user?.uid]);

  // Load saved database from local storage on mount
  useEffect(() => {
    const savedDb = localStorage.getItem("lastSelectedDb");
    if (savedDb) {
      setSelectedDb(savedDb);
    }
  }, []);

  const updateSelectedDb = (dbName) => {
    setSelectedDb(dbName);
    if (dbName) {
      localStorage.setItem("lastSelectedDb", dbName);
    } else {
      localStorage.removeItem("lastSelectedDb");
    }
  };

  useEffect(() => {
    if (!selectedDb) {
      setEntries([]);
      setTemplate({ categories: [], defaults: [] });
      return;
    }

    // Fetch template when DB changes
    getTemplate(selectedDb).then(setTemplate);

    // Subscribe to entries
    const unsubscribe = subscribeToEntries(selectedDb, (data) => {
      setEntries(data);
    });
    return () => unsubscribe();
  }, [selectedDb]);

  useEffect(() => {
    // Reset Add Entry form when template changes
    const initialData = {};
    const initialBulkData = {};
    template.categories.forEach((cat, i) => {
      initialData[cat] = template.defaults[i] || "";
      initialBulkData[cat] = "";
    });
    setAddEntryData(initialData);
    setAddBulkData(initialBulkData);
  }, [template]);

  const handleAddCategoryToNewDb = () => {
    if (!newCategoryName.trim()) return showToast("Category name required", "error");
    const formatted = newCategoryDefault.trim()
      ? `${newCategoryName.trim()}:${newCategoryDefault.trim()}`
      : newCategoryName.trim();
    if (newDbCategories.some(c => c.split(":")[0].toLowerCase() === newCategoryName.trim().toLowerCase())) {
      return showToast("Category already added!", "error");
    }
    setNewDbCategories([...newDbCategories, formatted]);
    setNewCategoryName("");
    setNewCategoryDefault("");
  };

  const handleCreateDatabase = async () => {
    if (!newDbName.trim()) return showToast("Database name required", "error");
    try {
      const createdDbName = newDbName.trim();
      await createDatabase(createdDbName, newDbCategories, isPublic, user?.uid);

      // Store anonymous ownership
      if (!user?.uid) {
        let anonDbs = [];
        try {
          const stored = localStorage.getItem("anonymousOwnedDatabases");
          if (stored) anonDbs = JSON.parse(stored);
        } catch (e) { }
        anonDbs.push(createdDbName);
        localStorage.setItem("anonymousOwnedDatabases", JSON.stringify(anonDbs));
      }

      showToast(`Created new database ${createdDbName}!`, "success");
      setNewDbName("");
      setNewDbCategories([]);
      updateSelectedDb(createdDbName);
      setCurrentSection("home");
    } catch (e) {
      showToast(e.message, "error");
    }
  };

  const handleAddEntry = async () => {
    if (!selectedDb) return showToast("Select a database first", "error");
    try {
      await addEntry(selectedDb, addEntryData);
      showToast("Saved to Database!", "success");
      setCurrentSection("home");
    } catch (e) {
      showToast(e.message, "error");
    }
  };

  const handleAddBulkEntries = async () => {
    if (!selectedDb) return showToast("Select a database first", "error");
    try {
      let entriesArray = [];
      if (bulkAddMode === "json") {
        try {
          entriesArray = JSON.parse(bulkRawText);
          if (!Array.isArray(entriesArray)) {
            entriesArray = [entriesArray];
          }
        } catch (err) {
          return showToast("Invalid JSON format. Please ensure your input is valid JSON.", "error");
        }
      } else if (bulkAddMode === "row") {
        const delimiter = bulkDelimiter || ",";
        const lines = bulkRawText.split("\n").filter(s => s.trim());
        if (lines.length === 0) return showToast("No entries provided", "error");

        for (const line of lines) {
          const parts = line.split(delimiter).map(s => s.trim());
          const entry = {};
          template.categories.forEach((cat, idx) => {
            entry[cat] = parts[idx] !== undefined ? parts[idx] : (template.defaults[idx] || "");
          });
          entriesArray.push(entry);
        }
      } else {
        const delimiter = bulkDelimiter || ",";
        // Find the max length of the separated lists
        let maxLength = 0;
        const parsedLists = {};
        for (const cat of template.categories) {
          const list = (addBulkData[cat] || "").split(delimiter).map(s => s.trim());
          if (list.length === 1 && list[0] === "") list.length = 0; // handle empty case
          parsedLists[cat] = list;
          if (list.length > maxLength) maxLength = list.length;
        }
        if (maxLength === 0) return showToast("No entries provided", "error");

        for (let i = 0; i < maxLength; i++) {
          const entry = {};
          for (const cat of template.categories) {
            entry[cat] = parsedLists[cat][i] !== undefined ? parsedLists[cat][i] : (template.defaults[template.categories.indexOf(cat)] || "");
          }
          entriesArray.push(entry);
        }
      }

      await addEntries(selectedDb, entriesArray);
      showToast(`Successfully added ${entriesArray.length} entries!`, "success");
      setAddBulkData({});
      setBulkRawText("");
      setCurrentSection("home");
    } catch (e) {
      showToast(e.message, "error");
    }
  };

  const handleAddCategoryToModify = () => {
    if (!modifyCategoryName.trim()) return showToast("Category name required", "error");
    const formatted = modifyCategoryDefault.trim()
      ? `${modifyCategoryName.trim()}:${modifyCategoryDefault.trim()}`
      : modifyCategoryName.trim();
    if (modifyCategoriesList.some(c => c.split(":")[0].toLowerCase() === modifyCategoryName.trim().toLowerCase())) {
      return showToast("Category already added!", "error");
    }
    setModifyCategoriesList([...modifyCategoriesList, formatted]);
    setModifyCategoryName("");
    setModifyCategoryDefault("");
  };

  const handleModifyDatabase = async () => {
    if (!selectedDb) return showToast("Select a database first", "error");
    try {
      await modifyCategories(selectedDb, modifyCategoriesList);
      showToast("Categories successfully added!", "success");
      setModifyCategoriesList([]);
      getTemplate(selectedDb).then(setTemplate);
      setCurrentSection("home");
    } catch (e) {
      showToast(e.message, "error");
    }
  };

  const handleRemoveCategory = async (categoryName) => {
    if (!selectedDb) return;
    setConfirmModal({
      title: "Remove Category",
      message: `Remove category "${categoryName}" from all entries in ${selectedDb}? This cannot be undone.`,
      onConfirm: async () => {
        try {
          await removeCategory(selectedDb, categoryName);
          showToast(`Category "${categoryName}" removed!`, "success");
          getTemplate(selectedDb).then(setTemplate);
        } catch (e) {
          showToast(e.message, "error");
        }
        setConfirmModal(null);
      }
    });
  };

  const handleUpdateEntry = async () => {
    if (!selectedDb || !editingEntry) return;
    try {
      await updateEntry(selectedDb, editingEntry.id, editingEntry.data);
      showToast("Entry updated!", "success");
      setEditingEntry(null);
    } catch (e) {
      showToast(e.message, "error");
    }
  };

  const handleExportCsv = () => {
    if (!selectedDb || entries.length === 0) return;
    const escape = (val) => {
      const s = String(val ?? "");
      return s.includes(",") || s.includes('"') || s.includes("\n")
        ? `"${s.replace(/"/g, '""')}"`
        : s;
    };
    const header = template.categories.map(escape).join(",");
    const rows = entries.map(entry =>
      template.categories.map(cat => escape(entry[cat])).join(",")
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedDb}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(`Exported ${entries.length} entries as CSV!`, "success");
  };

  const handleExportJson = () => {
    if (!selectedDb || entries.length === 0) return;
    const data = entries.map(entry => {
      const formattedEntry = {};
      template.categories.forEach(cat => {
        formattedEntry[cat] = entry[cat] ?? "";
      });
      return formattedEntry;
    });
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedDb}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(`Exported ${entries.length} entries as JSON!`, "success");
  };

  const handleExportExcel = () => {
    if (!selectedDb || entries.length === 0) return;
    const data = entries.map(entry => {
      const formattedEntry = {};
      template.categories.forEach(cat => {
        formattedEntry[cat] = entry[cat] ?? "";
      });
      return formattedEntry;
    });
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, selectedDb.substring(0, 31));
    XLSX.writeFile(workbook, `${selectedDb}.xlsx`);
    showToast(`Exported ${entries.length} entries as Excel!`, "success");
  };

  const handleDeleteDatabase = async () => {
    if (!selectedDb) return showToast("Select a database first", "error");

    setConfirmModal({
      title: "Delete Database",
      message: `Are you sure you want to delete ${selectedDb}? This action cannot be undone.`,
      onConfirm: async () => {
        try {
          await deleteDatabase(selectedDb);
          showToast("Database deleted", "success");
          updateSelectedDb("");
          setCurrentSection("home");
        } catch (e) {
          showToast(e.message, "error");
        }
        setConfirmModal(null);
      }
    });
  };

  const selectedDbObj = databases.find(db => db.name === selectedDb);
  let isOwner = false;
  if (selectedDbObj && user?.uid && selectedDbObj.ownerId === user.uid) {
    isOwner = true;
  } else if (!user?.uid && selectedDb) {
    try {
      const stored = localStorage.getItem("anonymousOwnedDatabases");
      if (stored && JSON.parse(stored).includes(selectedDb)) isOwner = true;
    } catch (e) { }
  }

  const handleTogglePrivacy = async () => {
    if (!selectedDbObj) return;
    try {
      const makePrivate = !selectedDbObj.isPrivate;
      await toggleDatabasePrivacy(selectedDb, makePrivate);
      showToast(`Database is now ${makePrivate ? 'private' : 'public'}`, 'success');
    } catch (e) {
      showToast(e.message, 'error');
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 className="page-title" style={{ cursor: "pointer" }} onClick={() => setCurrentSection("home")}>
        Public Database
      </h1>

      <div className="flex-gap-4 items-center mb-6">
        <label htmlFor="db-select" className="form-label" style={{ marginBottom: 0 }}>Choose a database:</label>
        <select
          id="db-select"
          className="input-field"
          style={{ width: "auto" }}
          value={selectedDb}
          onChange={(e) => {
            updateSelectedDb(e.target.value);
            setCurrentSection("home");
          }}
        >
          <option value="">Select a database...</option>
          {databases.map(db => (
            <option key={db.name} value={db.name}>{db.name} {db.isPrivate ? '(Private)' : ''}</option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>

        {/* Sidebar Actions */}
        <div style={{ flex: "1 1 350px", maxWidth: "450px" }} className="glass-container">
          {currentSection === "home" && (
            <div className="flex-col flex-gap-4">
              <button className="btn btn-primary" onClick={() => setCurrentSection("addBulk")}>Add Entries</button>
              <button className="btn btn-success" onClick={() => setCurrentSection("create")}>Create Database</button>
              <button className="btn btn-warning" onClick={() => setCurrentSection("modify")}>Modify Database</button>
              <button className="btn btn-secondary" onClick={() => setCurrentSection("export")}>Export</button>
            </div>
          )}

          {currentSection === "create" && (
            <div className="flex-col flex-gap-4">
              <h2 className="section-title">Create Database</h2>
              <input type="text" placeholder="Enter database name" className="input-field" value={newDbName} onChange={e => setNewDbName(e.target.value)} />
              <div className="flex-col flex-gap-4">
                <input type="text" placeholder="Category name" className="input-field" value={newCategoryName} onChange={e => setNewCategoryName(e.target.value)} />
                <input type="text" placeholder="Default value" className="input-field" value={newCategoryDefault} onChange={e => setNewCategoryDefault(e.target.value)} />
                <button className="btn btn-secondary" onClick={handleAddCategoryToNewDb}>Add Category</button>
              </div>

              <div className="flex-gap-2 flex-wrap mt-2 mb-2">
                {newDbCategories.map(cat => (
                  <span key={cat} className="badge">
                    {cat}
                    <button className="badge-delete" onClick={() => setNewDbCategories(newDbCategories.filter(c => c !== cat))}>✕</button>
                  </span>
                ))}
              </div>

              <div className="flex-gap-2 items-center mb-2">
                <label className="form-label" style={{ marginBottom: 0 }}>Public:</label>
                {user ? (
                  <input type="checkbox" checked={isPublic} onChange={e => setIsPublic(e.target.checked)} style={{ width: "1.2rem", height: "1.2rem" }} />
                ) : (
                  <>
                    <input type="checkbox" checked={true} disabled style={{ width: "1.2rem", height: "1.2rem" }} />
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>(Sign in to create private databases)</span>
                  </>
                )}
              </div>

              <div className="pt-2 flex-gap-4">
                <button className="btn btn-primary" onClick={handleCreateDatabase}>Submit</button>
                <button className="btn btn-secondary" onClick={() => setCurrentSection("home")}>Back</button>
              </div>
            </div>
          )}



          {currentSection === "addBulk" && (
            <div className="flex-col flex-gap-4">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <h2 className="section-title" style={{ marginBottom: 0 }}>Add Multiple Entries</h2>
                <select
                  className="input-field"
                  style={{ width: "auto", padding: "0.3rem 0.6rem", fontSize: "0.85rem" }}
                  value={bulkAddMode}
                  onChange={(e) => setBulkAddMode(e.target.value)}
                >
                  <option value="column">By Column</option>
                  <option value="row">By Row (CSV)</option>
                  <option value="json">Raw JSON</option>
                </select>
              </div>

              {!selectedDb ? <p style={{ color: "#ef4444" }}>Please select a database first.</p> : (
                bulkAddMode === "json" ? (
                  <>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      Provide extra formatting by supplying a raw JSON array of objects representing entries.
                    </p>
                    <textarea
                      className="input-field"
                      style={{ minHeight: "150px", fontFamily: "monospace", resize: "vertical" }}
                      placeholder='[\n  { "Name": "Alice", "Age": "24" },\n  { "Name": "Bob", "Age": "30" }\n]'
                      value={bulkRawText}
                      onChange={e => setBulkRawText(e.target.value)}
                    ></textarea>
                  </>
                ) : bulkAddMode === "row" ? (
                  <>
                    <div className="flex-gap-2 items-center mb-2">
                      <label className="form-label" style={{ marginBottom: 0 }}>Delimiter:</label>
                      <input
                        type="text"
                        className="input-field"
                        style={{ width: "60px", padding: "0.3rem" }}
                        value={bulkDelimiter}
                        onChange={e => setBulkDelimiter(e.target.value)}
                      />
                    </div>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                      Enter data row by row. Each new line is a new entry.
                    </p>
                    <textarea
                      className="input-field"
                      style={{ minHeight: "150px", fontFamily: "monospace", resize: "vertical", whiteSpace: "pre" }}
                      placeholder={`Alice${bulkDelimiter} 24\nBob${bulkDelimiter} 30`}
                      value={bulkRawText}
                      onChange={e => setBulkRawText(e.target.value)}
                    ></textarea>
                  </>
                ) : (
                  <>
                    <div className="flex-gap-2 items-center mb-2">
                      <label className="form-label" style={{ marginBottom: 0 }}>Delimiter:</label>
                      <input
                        type="text"
                        className="input-field"
                        style={{ width: "60px", padding: "0.3rem" }}
                        value={bulkDelimiter}
                        onChange={e => setBulkDelimiter(e.target.value)}
                      />
                    </div>
                    {template.categories.map((cat, i) => (
                      <div key={cat} className="mb-2">
                        <label className="form-label">{cat}</label>
                        <input
                          type="text"
                          placeholder={`e.g. Value1${bulkDelimiter} Value2${bulkDelimiter} Value3`}
                          className="input-field"
                          value={addBulkData[cat] || ""}
                          onChange={e => setAddBulkData({ ...addBulkData, [cat]: e.target.value })}
                        />
                      </div>
                    ))}
                  </>
                )
              )}
              <div className="pt-2 flex-gap-4">
                <button className="btn btn-primary" onClick={handleAddBulkEntries}>Submit</button>
                <button className="btn btn-secondary" onClick={() => setCurrentSection("home")}>Back</button>
              </div>
            </div>
          )}

          {currentSection === "modify" && (
            <div className="flex-col flex-gap-4">
              <h2 className="section-title">Modify Database</h2>
              {!selectedDb ? (
                <>
                  <p style={{ color: "#ef4444" }}>Please select a database first.</p>
                  <div className="pt-2">
                    <button className="btn btn-secondary" onClick={() => setCurrentSection("home")}>Back</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-col flex-gap-4">
                    <input type="text" placeholder="New category name" className="input-field" value={modifyCategoryName} onChange={e => setModifyCategoryName(e.target.value)} />
                    <input type="text" placeholder="Default value" className="input-field" value={modifyCategoryDefault} onChange={e => setModifyCategoryDefault(e.target.value)} />
                    <button className="btn btn-secondary" onClick={handleAddCategoryToModify}>Add Category</button>
                  </div>

                  <div className="flex-gap-2 flex-wrap mt-2 mb-2">
                    {modifyCategoriesList.map(cat => (
                      <span key={cat} className="badge">
                        {cat}
                        <button className="badge-delete" onClick={() => setModifyCategoriesList(modifyCategoriesList.filter(c => c !== cat))}>✕</button>
                      </span>
                    ))}
                  </div>

                  {template.categories.length > 0 && (
                    <>
                      <p className="form-label" style={{ marginBottom: "0.5rem" }}>
                        Reorder or remove categories: <span style={{ fontWeight: 400, fontSize: "0.8rem", color: "var(--text-muted)" }}>(drag to reorder)</span>
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        {template.categories.map((cat, idx) => (
                          <div
                            key={cat}
                            draggable
                            onDragStart={() => setDraggedCat(cat)}
                            onDragOver={(e) => { e.preventDefault(); }}
                            onDrop={() => {
                              if (!draggedCat || draggedCat === cat) return;
                              const cats = [...template.categories];
                              const fromIdx = cats.indexOf(draggedCat);
                              const toIdx = cats.indexOf(cat);
                              cats.splice(fromIdx, 1);
                              cats.splice(toIdx, 0, draggedCat);
                              setTemplate(prev => ({ ...prev, categories: cats }));
                              reorderCategories(selectedDb, cats);
                              setDraggedCat(null);
                            }}
                            onDragEnd={() => setDraggedCat(null)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              padding: "0.4rem 0.75rem",
                              background: draggedCat === cat ? "rgba(139,92,246,0.25)" : "rgba(255,255,255,0.05)",
                              border: "1px solid var(--border-color)",
                              borderRadius: "8px",
                              cursor: "grab",
                              transition: "background 0.15s ease",
                              userSelect: "none",
                            }}
                          >
                            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginRight: "0.25rem" }}>⠿</span>
                            <span style={{ flex: 1, fontSize: "0.9rem" }}>{cat}</span>
                            <button
                              className="badge-delete"
                              style={{ marginLeft: "auto" }}
                              onClick={() => handleRemoveCategory(cat)}
                            >✕</button>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="pt-2 flex-gap-4" style={{ flexWrap: "wrap", alignItems: "center" }}>
                    <button className="btn btn-warning" onClick={handleModifyDatabase}>Submit</button>
                    <button className="btn btn-danger" onClick={handleDeleteDatabase}>Delete Database</button>
                    {isOwner && (
                      <button className="btn btn-primary" style={{ background: "var(--primary-dark)" }} onClick={handleTogglePrivacy}>
                        {selectedDbObj?.isPrivate ? "Make Public" : "Make Private"}
                      </button>
                    )}
                    <button className="btn btn-secondary" onClick={() => setCurrentSection("home")}>Back</button>
                  </div>
                </>
              )}
            </div>
          )}

          {currentSection === "export" && (
            <div className="flex-col flex-gap-4">
              <h2 className="section-title">Export Database</h2>
              {!selectedDb ? <p style={{ color: "#ef4444" }}>Please select a database first.</p> : entries.length === 0 ? <p style={{ color: "var(--text-muted)" }}>This database has no entries to export.</p> : (
                <>
                  <p style={{ marginBottom: "0.5rem" }}>Export <strong>{selectedDb}</strong> ({entries.length} entries).</p>
                  <div className="flex-col flex-gap-4">
                    <button className="btn btn-success" onClick={handleExportCsv}>Download as CSV</button>
                    <button className="btn btn-success" onClick={handleExportJson}>Download as JSON</button>
                    <button className="btn btn-success" onClick={handleExportExcel}>Download as Excel</button>
                  </div>
                </>
              )}
              <div className="pt-2">
                <button className="btn btn-secondary" onClick={() => setCurrentSection("home")}>Back</button>
              </div>
            </div>
          )}
        </div>

        {/* Main Content Area: View Database */}
        <div style={{ flex: "999 1 600px", overflow: "hidden" }} className="glass-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              {selectedDb ? `Viewing Database: ${selectedDb}` : "Database Viewer"}
            </h2>
          </div>
          {(() => {
            let previewEntries = [];
            if (currentSection === "addBulk" && selectedDb) {
              if (bulkAddMode === "json") {
                if (bulkRawText.trim()) {
                  try {
                    let parsed = JSON.parse(bulkRawText);
                    if (!Array.isArray(parsed)) parsed = [parsed];
                    previewEntries = parsed.map((e, i) => ({ ...e, isPreview: true, id: `preview-${i}` }));
                  } catch (e) { }
                }
              } else if (bulkAddMode === "row") {
                if (bulkRawText.trim()) {
                  const delimiter = bulkDelimiter || ",";
                  const lines = bulkRawText.split("\n").filter(s => s.trim());
                  for (let i = 0; i < lines.length; i++) {
                    const parts = lines[i].split(delimiter).map(s => s.trim());
                    const entry = { isPreview: true, id: `preview-${i}` };
                    template.categories.forEach((cat, idx) => {
                      entry[cat] = parts[idx] !== undefined ? parts[idx] : (template.defaults[idx] || "");
                    });
                    previewEntries.push(entry);
                  }
                }
              } else {
                const delimiter = bulkDelimiter || ",";
                let maxLength = 0;
                let hasAnyValue = false;
                const parsedLists = {};
                for (const cat of template.categories) {
                  const val = addBulkData[cat] || "";
                  if (val.trim()) hasAnyValue = true;
                  const list = val.split(delimiter).map(s => s.trim());
                  if (list.length === 1 && list[0] === "") list.length = 0;
                  parsedLists[cat] = list;
                  if (list.length > maxLength) maxLength = list.length;
                }
                if (maxLength > 0) {
                  for (let i = 0; i < maxLength; i++) {
                    const entry = { isPreview: true, id: `preview-${i}` };
                    for (const cat of template.categories) {
                      entry[cat] = parsedLists[cat][i] !== undefined ? parsedLists[cat][i] : (template.defaults[template.categories.indexOf(cat)] || "");
                    }
                    previewEntries.push(entry);
                  }
                }
              }
            }
            const displayEntries = [...entries, ...previewEntries];

            if (!selectedDb) {
              return (
                <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "2rem 0" }}>
                  Please select a database from the dropdown to view its entries.
                </p>
              );
            }
            if (displayEntries.length === 0) {
              return (
                <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "2rem 0" }}>
                  This database has no entries yet.
                </p>
              );
            }
            return (
              <div className="db-table-wrap">
                <table className="db-table">
                  <thead>
                    <tr>
                      <th className="db-th db-th-num">#</th>
                      {template.categories.map(cat => (
                        <th key={cat} className="db-th">{cat}</th>
                      ))}
                      <th className="db-th db-th-action"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayEntries.map((entry, idx) => (
                      entry.isPreview ? (
                        <tr key={entry.id} className="db-tr db-tr-preview" style={{ background: "rgba(16, 185, 129, 0.15)" }}>
                          <td className="db-td db-td-num" style={{ color: "#10b981", fontStyle: "italic" }}>+{idx + 1}</td>
                          {template.categories.map(cat => (
                            <td key={cat} className="db-td" style={{ color: "#10b981" }}>{typeof entry[cat] === "object" ? JSON.stringify(entry[cat]) : (entry[cat] ?? "")}</td>
                          ))}
                          <td className="db-td db-td-action">
                            <span style={{ color: "#10b981", fontSize: "0.8rem", fontStyle: "italic", padding: "0.25rem 0.75rem", display: "inline-block" }}>Preview</span>
                          </td>
                        </tr>
                      ) :
                        editingEntry?.id === entry.id ? (
                          <tr key={entry.id} className="db-tr db-tr-editing">
                            <td className="db-td db-td-num">{idx + 1}</td>
                            {template.categories.map(cat => (
                              <td key={cat} className="db-td">
                                <input
                                  type="text"
                                  className="input-field"
                                  style={{ padding: "0.35rem 0.6rem", fontSize: "0.85rem" }}
                                  value={editingEntry.data[cat] ?? ""}
                                  onChange={e => setEditingEntry(prev => ({
                                    ...prev,
                                    data: { ...prev.data, [cat]: e.target.value }
                                  }))}
                                />
                              </td>
                            ))}
                            <td className="db-td db-td-action">
                              <div className="flex-gap-4" style={{ justifyContent: "flex-end" }}>
                                <button className="btn btn-primary" style={{ padding: "0.3rem 0.9rem", fontSize: "0.8rem" }} onClick={handleUpdateEntry}>Save</button>
                                <button className="btn btn-secondary" style={{ padding: "0.3rem 0.9rem", fontSize: "0.8rem" }} onClick={() => setEditingEntry(null)}>Cancel</button>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          <tr key={entry.id} className="db-tr">
                            <td className="db-td db-td-num">{idx + 1}</td>
                            {template.categories.map(cat => (
                              <td key={cat} className="db-td">{entry[cat] ?? ""}</td>
                            ))}
                            <td className="db-td db-td-action">
                              <button
                                className="btn btn-secondary entry-edit-btn"
                                style={{ padding: "0.25rem 0.75rem", fontSize: "0.8rem", whiteSpace: "nowrap" }}
                                onClick={() => setEditingEntry({ id: entry.id, data: { ...entry } })}
                              >
                                Edit
                              </button>
                            </td>
                          </tr>
                        )
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })()}
        </div>


      </div>

      {/* Toast Notifications Container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <span>{toast.message}</span>
            <button
              className="badge-delete"
              onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {confirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">{confirmModal.title}</h3>
            <p className="modal-body">{confirmModal.message}</p>
            <div className="flex-gap-4 items-center">
              <button
                className="btn btn-danger"
                onClick={confirmModal.onConfirm}
              >
                Confirm
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setConfirmModal(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
