import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push, onValue, get, remove, update } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

console.log("script.js loaded");

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCWZH433ys-IM8IwixQZHO9L48C9MQYrfo",
    authDomain: "public-database-72a80.firebaseapp.com",
    databaseURL: "https://public-database-72a80-default-rtdb.firebaseio.com/",
    projectId: "public-database-72a80",
    storageBucket: "public-database-72a80.appspot.com",
    messagingSenderId: "668043866524",
    appId: "1:668043866524:web:1c1e18e1e0f78d95481859",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const rootRef = ref(db, "/");

// Database selected
let selectedRefName = "";
let selectedRef;
const select_db_text = "Select a database...";
let dbChangeListenerAttached = false;

window.getDatabaseList = function () {
    // Updates display of all database options
    const dbList = document.getElementById("database-select");

    if (!dbList) {
        console.log("DB List Empty");
        return;
    }

    onValue(rootRef, (snapshot) => {
        const options = []
        dbList.innerHTML = ""; // clear previous content

        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                let isPrivate = false;
                const dbName = childSnapshot.key;

                // Get ONLY the first entry of this database
                childSnapshot.forEach((entrySnapshot) => {
                    const entry = entrySnapshot.val();

                    if (entry?.PrivacyStatus === "private") {
                        isPrivate = true;
                    }

                    return true;
                });

                if (!isPrivate) {
                    options.push(dbName);
                }
            });
        }
        if (options.length == 0) options.push("No databases");

        options.sort((a, b) => a.localeCompare(b));
        options.unshift(select_db_text);    // Default text for select drop-down
        for (const text of options) {
            const option = document.createElement("option");
            option.value = text;
            option.textContent = text;
            dbList.appendChild(option);
        }

        if (selectedRefName != "") dbList.value = selectedRefName;
    });

    if (!dbChangeListenerAttached) {
        dbList.addEventListener("change", (event) => {
            const selectedValue = event.target.value;
            if (selectedValue != select_db_text) {
                console.log("Selected:", selectedValue);
                selectedRefName = selectedValue;
                updateRef();
                viewDatabase(); // Refresh database element list if on that section.
            }
            
        });
        dbChangeListenerAttached = true;
    }
}

function updateRef() {
    if(selectedRefName == "") return false;
    try {
        selectedRef = ref(db, selectedRefName);
    } catch (err) {
        console.log(err);
    }
}

async function refExists(refName) {
    get(refName).then((snapshot) => {
        if (snapshot.exists()) {
            return true;
        } else {
            return false;
        }
    }).catch((error) => { console.error(error); });
    return false;
}

window.viewDatabase = function () {
    // Updates display of viewed database
    if (selectedRef && refExists(selectedRef)) {
        onValue(selectedRef, (snapshot) => {
            const data = snapshot.val();
            const entriesDiv = document.getElementById("entriesList");
            entriesDiv.innerHTML = ""; // clear previous content

            for (const key in data) {
                const entry = data[key];
                if (entry.PrivacyStatus) continue;
                const p = document.createElement("p");
                p.textContent = `Value: ${entry.value}, Timestamp: ${new Date(entry.timestamp).toLocaleString()}`;
                p.style.color = "black";
                entriesDiv.appendChild(p);
            }
        });
    }
}

window.buildCategoryInputs = function () {
    const container = document.getElementById("categoryInputs");
    container.innerHTML = "";

    if (!selectedRefName) return;

    // Get first entry of selected database
    onValue(ref(db, selectedRefName), (snapshot) => {
        let firstEntry = null;

        snapshot.forEach((entrySnapshot) => {
            firstEntry = entrySnapshot.val();
            return true; // ⛔ only first entry
        });

        if (!firstEntry) return;

        for (const key in firstEntry) {
            if (key === "PrivacyStatus") continue;

            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = key;
            input.dataset.category = key;

            container.appendChild(input);
        }
    }, { onlyOnce: true });
};

// Pass in attributes (e.g. value, timestamp) as parameters
window.writeInput = function () {
    if (selectedRef) {
        const inputs = document.querySelectorAll("#categoryInputs input");
        const data = {};

        inputs.forEach(input => {
            data[input.dataset.category] = input.value;
        });

        data.timestamp = Date.now();

        push(ref(db, selectedRefName), data);
        alert("Saved to Database!");
    } else {
        alert("Please select a database!");
    }
};

window.categories = [];
let categoryPlaceholder = "Enter category name";
let categoryDefaultValuePlaceholder = "Enter a default value for your category name";
let createDatabasePlaceholder = "Enter database name";

window.addCategory = function (section) {
    let categorySection, defaultSection;
    if(section == "createSection") {
        categorySection = "categoryNameCreate";
        defaultSection = "categoryDefaultValueCreate";
    } else if (section == "modifySection") {
        categorySection = "categoryNameModify";
        defaultSection = "categoryDefaultValueModify";
    } else {
        return;
    }

    const input = document.getElementById(categorySection);
    const category = input.value.trim().replace(":", "");
    const defaults = document.getElementById(defaultSection);
    const defaultValue = defaults.value.trim().replace(":", "");
    if (window.categories.some(c => c.toLowerCase() === category.toLowerCase())) {
       alert("Category already added! Please supply a new one.");
    } else if (category != "") {
        console.log(category + ": " + defaultValue);
        if(defaultValue == "") {
            window.categories.push(category);
        } else {
            window.categories.push(category + ":" + defaultValue);
        }
        
        renderCategories(window.categories, section);
    } else {
        alert("Category name was not given!");
    }
    input.value = "";
    input.placeholder = categoryPlaceholder;
    defaults.value = "";
    defaults.placeholder = categoryDefaultValuePlaceholder;

};

window.createDatabase = async function () {
    const input = document.getElementById("databaseName");
    const privacyToggle = document.getElementById("privacy");
    const text = input.value;
    if (text === "") {
        alert("Please provide a database name!");
        input.value = "";
        input.placeholder = createDatabasePlaceholder;
    } else {
        const currRef = ref(db, text);

        if (await refExists(currRef)) {
            alert("This database already exists! Please give a different name.");
        } else {
            const data = {}
            for (const c of window.categories) {
                const [category, defaultValue] = c.split(":");
                if (defaultValue) data[category] = defaultValue;
                else data[category] = "temp" + category;
            }
            if (privacyToggle.checked == true) data["PrivacyStatus"] = "public";
            else data["PrivacyStatus"] = "private";
            
            push(currRef, data)
                .then(() => { alert("Created new database " + text + "!"); })
                .catch((error) => { console.error(error); });
        }
    }
    input.value = "";
    input.placeholder = createDatabasePlaceholder;
};

window.deleteDatabase = function () {
    if (!selectedRefName) return;

    const dbRef = ref(db, selectedRefName);
    remove(dbRef)
        .then(() => {
            alert("Database deleted:", selectedRefName);
            console.log("Database deleted:", selectedRefName);
        })
        .catch(err => {
            console.error("Delete failed:", err);
        });
};

window.modifyCategories = async function () {
    const snapshot = await get(selectedRef);
    if (!snapshot.exists()) return;

    const updates = {};

    snapshot.forEach(nodeSnap => {
        const nodeKey = nodeSnap.key;
        const nodeData = nodeSnap.val() || {};

        for (const c of window.categories) {
            const [category, defaultValue] = c.split(":");
            if (!(category in nodeData)) {
                if (defaultValue) updates[`${selectedRefName}/${nodeKey}/${category}`] = defaultValue;
                else updates[`${selectedRefName}/${nodeKey}/${category}`] = "temp" + category;
            }
        }
    });

    if (Object.keys(updates).length > 0) {
        await update(ref(db), updates);
        alert("Categories successfully added!");
    }
};

function renderCategories(categories, section) {
    let containerName;
    if(section == "createSection") {
        containerName = "categoryContainerCreate";
    } else if (section == "modifySection") {
        containerName = "categoryContainerModify";
    } else {
        return;
    }

    const container = document.getElementById(containerName);
    container.innerHTML = "";

    for (const category of categories) {
        const pill = document.createElement("div");
        pill.className = "category-pill";
        pill.textContent = category;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "✕";
        removeBtn.onclick = () => removeCategory(categories, section, category);

        pill.appendChild(removeBtn);
        container.appendChild(pill);
    }
}

function removeCategory(categories, section, category) {
    for (const c of categories) {
        if (c == category) {
            categories.pop(c);
        }
    }
    renderCategories(categories, section);
}

// Update whenever new section added
const sections = ["homeSection", "addSection", "viewSection", "createSection", "modifySection"];

window.showSection = function (sectionName) {
    for (const section of sections) {
        document.getElementById(section).style.display = "none";
    }
    document.getElementById(sectionName).style.display = "block";
    if (sectionName == "viewSection") {
        viewDatabase();
    } else if (sectionName == "addSection") {
        buildCategoryInputs();
    }

    window.categories = [];
    let container = document.getElementById("categoryContainerCreate");
    container.innerHTML = "";
    container = document.getElementById("categoryContainerModify");
    container.innerHTML = "";
};