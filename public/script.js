function readInput() {
    let text = document.getElementById("myInput").value;

    firebase.database().ref("entries").push({
        value: text,
        timestamp: Date.now()
    }).then(() => {
        alert("Saved to Firebase!");
    }).catch((error) => {
        console.error("Error:", error);
    });
}
