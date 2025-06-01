function loadProduct() {
    const productContainer = document.querySelector('#todo-list');
    db.collection("task").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const products = doc.data();
                const productElemental = document.createElement("div");
                productElemental.innerHTML = `
            <p>1. ${products.content}</p>
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
    var important_value;
    if (important == 'Có') {
        important_value = document.getElementById('important-Y').value;

    } else if (important == 'Không') {
        important_value = document.getElementById('important-N').value;


    if (!content) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    db.collection("to-do").add({
        content: content,
        important: important_value,
        urgent: urgent,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
     })
    .then(() => {
        console.log("Add task successfully");
        taskForm.reset();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

    }
}
