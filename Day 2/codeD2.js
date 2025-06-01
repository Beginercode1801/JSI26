//Hàm ko có giá trị trả về
// function sayHello(name){
//     console.log("Hello", name)
// }

// let my_name = "Messi";
// sayHello(my_name);

//Hàm có giá trị trả vể
// function get_average(a,b,c){
//     let sum = a + b + c;
//     let average = sum/ 3;
//     return average;
// }

// let result = get_average(10,50,20);
// console.log(result);

// Viết lại 2 hàm số bên trên theo arrow function
// let say_Hello = (name) => console.log("Xin chào", name);
// let get_average = (a,b,c) => (a + b + c) / 3

// Template Literals
// let firstName = "Sơn"
// let middleName = "Thái"
// let lastName = "Phạm"

// let fullName = `${lastName} ${middleName} ${firstName}`
// console.log(fullName)

// const product = "Laptop";
// const price = 16000000;
// const VAT = 0.1;
// const totalPrice = price + price * VAT
// console.log(`Sản phẩm: ${product}`)
// console.log(`Giá sản phẩm: ${price} VND`)
// console.log(`VAT: ${VAT * 100}%`)
// console.log(`Giá sản phẩm sau VAT: ${totalPrice} VND`)

// Array method
// Array =  Mảng
let students = ["Long", "Sơn", "Đạt", "Bách"];
//                0       1      2       3     (chỉ số duyệt bảng)
// Duyệt mảng
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}
// Thêm phẩn tử mới vào mảng
students.push("Kiên");
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}
// Xóa phần tử trong mảng
students.pop(); // Xoá cuối
students.shift(); //Xoá đầu
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}

// Map method in array
let number = [1,2,3,4,5]
let mapMethod = number.map((num) => num + 2);
console.log(mapMethod)

// Filter method in array
let filterMethod = number.filter((num) => num > 2);
console.log(filterMethod)

// Find method in array
let findMethod = number.find((num) => num > 2);
console.log(findMethod)