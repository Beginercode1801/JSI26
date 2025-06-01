function updateProducOnCart(productId){
    dbb.collection('products').doc(productId).update({
        "onCart":true
    })
    .then(() => {
        console.log("Product successfully updated to shopping list");
        loadProduct();
    })
    .catch((error) => {
        console.error("Error updating product to shopping list: ", error);
        });
}

function loadProduct() {
    const productContainer = document.querySelector('#productContainer');
    db.collection("product").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const products = doc.data();
                const productElemental = document.createElement("div");
                productElemental.innerHTML = `
            <img src=${products.Image}>
            <p>Name: ${products.Name}</p>
            <p>Price: ${products.Price}$</p>
            <button class="add-to-cart-btn" data-id="${doc.id}">Add to cart</button>
            `
                productContainer.appendChild(productElemental);
            });
            document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const productId = btn.getAttribute('data-id');
                    updateProducOnCart(productId)
            })
            
        })
        .catch((error) => {
            console.error("Error", error)
        });
})
}

window.onload = loadProduct;

const userInfor = document.querySelector('#user-infor');
const usernameDisplay = document.querySelector('#username');
const authBtn = document.querySelector('#auth-buttons');

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        const userDoc = db.collection('users').doc(uid);

        userDoc.get()
            .then((doc) => {
                if (doc.exists) {
                    const userData = doc.data();
                    usernameDisplay.textContent = `Hello ${userData.username}`;
                }
            })
            .catch((error) => {
                console.error("Error getting user data", error);
            });

        userInfor.style.display = 'flex';
        authBtn.style.display = 'none';
    }
});

// Logout functionality
const logoutButton = document.querySelector('#logout-button');
logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('User logged out successfully');
        alert("User logged out");
        authBtn.style.display = 'flex';
        userInfor.style.display = 'none';
    }).catch((error) => {
        console.log("Logout error", error);
    });
});