function readInput() {
    let text = document.getElementById("myInput").value;

    window.dbPush(text)
        .then(() => {
            alert("Saved to Firebase!");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Failed: " + error.message);
        });
}
