import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push, onValue, get } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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
                const nodeName = childSnapshot.key;   // top-level node name
                options.push(nodeName);
            });
        } else {
            options.push("No databases");
        }

        options.sort((a, b) => a.localeCompare(b));
        options.unshift(select_db_text);    // Default text for select drop-down
        for (const text of options) {
            const option = document.createElement("option");
            option.value = text;
            option.textContent = text;
            dbList.appendChild(option);
        }
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
                if (entry.dummy) continue;
                const p = document.createElement("p");
                p.textContent = `Value: ${entry.value}, Timestamp: ${new Date(entry.timestamp).toLocaleString()}`;
                p.style.color = "black";
                entriesDiv.appendChild(p);
            }
        });
    }
}

// Pass in attributes (e.g. value, timestamp) as parameters
window.writeInput = function () {
    if (selectedRef) {
        const text = document.getElementById("myInput").value;
    
        push(ref(db, selectedRefName), {
            value: text,
            timestamp: Date.now()
        })
            .then(() => { alert("Saved to Database!"); })
            .catch((error) => { console.error(error); });
    } else {
        alert("Please select a database!");
    }
};

window.categories = [];
let categoryPlaceholder = "Enter category name";

window.addCategory = function () {
    const input = document.getElementById("categoryName");
    const category = input.value.trim();
    if (window.categories.some(c => c.toLowerCase() === category.toLowerCase())) {
       alert("Category already added! Please supply a new one.");
    } else if (category != "") {
        console.log(category);
        window.categories.push(category);
        // alert("Category " + category + " added!");
        renderCategories();
    } else {
        alert("Category name was not given!");
    }
    input.value = "";
    input.placeholder = categoryPlaceholder;
};

function renderCategories() {
    const container = document.getElementById("categoryContainer");
    container.innerHTML = "";

    for (const category of window.categories) {
        const pill = document.createElement("div");
        pill.className = "category-pill";
        pill.textContent = category;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "✕";
        removeBtn.onclick = () => removeCategory(category);

        pill.appendChild(removeBtn);
        container.appendChild(pill);
    }
}

function removeCategory(category) {
    window.categories = window.categories.filter(c => c !== category);
    renderCategories();
}



window.createDatabase = async function () {
    const text = document.getElementById("databaseName").value;
    if (text === "") {
        alert("Please provide a database name!");
        return;
    }
    const currRef = ref(db, text);

    if (await refExists(currRef)) {
        alert("This database already exists! Please give a different name.");
    } else {
        const data = {}
        for (const category of categories) {
            data[category] = "temp" + category;
        }
        if (categories == []) data[dummy] = "dummy";

        push(currRef, data)
            .then(() => { alert("Created new database " + text + "!"); })
            .catch((error) => { console.error(error); });
    }
};



// Update whenever new section added
const sections = ["homeSection", "addSection", "viewSection", "createSection"];

window.showSection = function (sectionName) {
    for (const section of sections) {
        document.getElementById(section).style.display = "none";
    }
    document.getElementById(sectionName).style.display = "block";
    if (sectionName == "viewSection") {
        viewDatabase();
    } else if (sectionName == "createSection") {
        window.categories = [];
    }
};