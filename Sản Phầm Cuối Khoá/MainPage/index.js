function loadProduct() {
    const productContainer = document.querySelector('#todo-list');
    productContainer.innerHTML = " ";
    db.collection("task").orderBy("createdAt", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const products = doc.data();
                const productElemental = document.createElement("div");
                color = "#44ff00"
                delet = `<button>❌</button>`
                if (products.important == "yes" && products.urgent == "yes") {
                    color = "#ff0000"
                } else if (products.important == "yes" && products.urgent == "no") {
                    color = "#ff8400"
                } else if (products.important == "no" && products.urgent == "yes") {
                    color = "#f6ff00"
                }
                productElemental.style.borderLeft = `20px solid ${color}`
                productElemental.innerHTML = `
            <p>${products.content}</p>
            <button onclick="deleteTask()">Xoá</button>
            `
                    productContainer.appendChild(productElemental);
                });
        })
        .catch((error) => {
            console.error("Error", error)
        });


}

window.onload = loadProduct;

function addTask() {
    const taskForm = document.querySelector('#add-container');
    const content = document.querySelector('#todo-input').value;
    const urgent = document.querySelector('#urgent').value;
    const important = document.querySelector('#important').value;

    if (!content || !urgent || !important) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    db.collection("task").add({
        content: content,
        important: important,
        urgent: urgent,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then(() => {
            console.log("Add task successfully");
            taskForm.reset();
            loadProduct()
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

}

function deleteTask() {
    const deleted = doc.id;
    db.collection("task").doc(deleted).delete()
    .then(() => {
        console.log("Document successfully deleted!");
        loadProduct()
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}