let cargoHold = [
    'oxygen tanks',
    'space suits',
    'parrot',
    'instruction manual',
    'meal packs',
    'slinky',
    'security blanket'
];
let index = cargoHold.indexOf('slinky');
if (index !== -1) {
    cargoHold[index] = 'space tether';
}
console.log(cargoHold);
let removedElement = cargoHold.pop();
console.log(`Phần tử bị xóa: ${removedElement}`);
console.log(cargoHold);
let shiftedElement = cargoHold.shift();
console.log(`Phần tử bị xóa: ${shiftedElement}`);
console.log(cargoHold);
cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(cargoHold);
console.log(`Mảng cuối cùng: ${cargoHold}`);
console.log(`Chiều dài mảng: ${cargoHold.length}`);