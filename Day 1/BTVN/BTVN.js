function countTrue(arr) {
    return arr.filter(value => value === true).length;
}
function handleCount() {
    const input = document.getElementById("inputArray").value;
    const array = input.split(",").map(item => item.trim() === "true");
    const result = countTrue(array);
    document.getElementById("result").textContent = `Số lượng giá trị "true": ${result}`;
}