import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push, onValue, get } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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
const selectedRefName = "entries";
const selectedRef = ref(db, selectedRefName);


// Updates display of all database options
const dbList = document.getElementById("dbList");

onValue(rootRef, (snapshot) => {
    dbList.innerHTML = ""; // clear previous content
    if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
            const nodeName = childSnapshot.key;   // top-level node name
            const p = document.createElement("p");
            p.textContent = nodeName;
            p.style.color = "black";
            dbList.appendChild(p);
        });
    } else {
        const p = document.createElement("p");
        p.textContent = "No databases";
        p.style.color = "black";
        dbList.appendChild(p);
    }
});

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

// Updates display of viewed database
if (refExists(selectedRef)) {
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

// Pass in attributes (e.g. value, timestamp) as parameters
window.writeInput = function () {
    const text = document.getElementById("myInput").value;
    push(ref(db, selectedRefName), {
        value: text,
        timestamp: Date.now()
    })
        .then(() => { alert("Saved to Database!"); })
        .catch((error) => { console.error(error); });
};

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
        push(currRef, {
            dummy: "dummy"
        })
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
};