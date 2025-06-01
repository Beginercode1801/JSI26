// // Khai báo biến

// let age = 20; // Khai báo biến cục bộ
// var name = "Alex"; // Khai báo biến toàn cục
// const PI = 3.14; // Khai báo biến ko đổi

// // Sử dụng vòng lập để tổng các số từ 1 đến 10
// // Vòng lập for
// let sum = 0
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);

// // Vòng lập while
// let sum2 = 0
// let i = 1
// while (i <= 10) {
//     sum2 += i;
//     i++;
// }
// console.log(sum2);

// // Vòng lập do-while
// let sum3 = 0
// let j = 1
// do {
//     sum3 += j;
//     j++;
// } while (j <= 10);
// console.log(sum3);

// //Kiểm tra số điểm nếu:
// // - Điểm >= 80 -> "HSG"
// // - Điểm >= 60 -> "HSK"
// // - Điểm >= 40 -> "HSTB"
// // - Điểm < 40  -> "HSY"
// let point = 50
// if (point >= 80) {
//     console.log("HSG");
//     } 
// else if (point >= 60) {
//         console.log("HSK");
//     } 
// else if (point >= 40) {
//         console.log("HSTB");
//     } 
// else {
//         console.log("HSY");
//     }

// //Tính tổng các số chia hết cho 3, và tích các số chia hết cho 10 trong khoảng từ 1 đến 50
// let sum4 = 0;
// let product = 1;
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         sum4 += i;
//     }
//     if (i % 10 === 0) {
//         product *= i;
//         }
// }
// console.log(sum4);

// // DOM
// const h1 = document.querySelector(".1")
// const h2 = document.querySelector("#1")

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

function display_pokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}


// .then(response => response.json())
// .then(data => {
//     const pokemon = document.getElementById('pokemon')

//     data.forEach(Poke =>{
//         const listIteam = document.createElement('li')
//         listIteam.textContent = Poke.name
//         pokemon.appendChild(listIteam)
//     })
// } )
// .catch(error => console.error('Lỗi: ',error))

