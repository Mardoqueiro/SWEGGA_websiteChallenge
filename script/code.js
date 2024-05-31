const femalePrice = 150.95;
const malePrice = 180.95;

function calculateTotalPrice() {
    const femaleQuantity = parseFloat(document.getElementsByName('quantity')[0].value) || 0;
    const maleQuantity = parseFloat(document.getElementsByName('quantity')[1].value) || 0;
    const femaleTotalPrice = femaleQuantity * femalePrice;
    const maleTotalPrice = maleQuantity * malePrice;
    const totalPrice = femaleTotalPrice + maleTotalPrice;

    document.getElementById('femaleTotal').textContent = femaleTotalPrice.toFixed(2);
    document.getElementById('maleTotal').textContent = maleTotalPrice.toFixed(2);
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}
