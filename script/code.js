function calculateTotal() {
    const femalePrice = 150.95;
    const malePrice = 180.95;
    const femaleQuantity = document.orders.femaleQuantity.value;
    const maleQuantity = document.orders.maleQuantity.value;
    const femaleTotal = femalePrice * femaleQuantity;
    const maleTotal = malePrice * maleQuantity;
    const orderTotal = femaleTotal + maleTotal;
    alert("Total for Female Jackets: " + femaleTotal + "\nTotal for Male Jackets: " + maleTotal + "\nTotal Order Price: " + orderTotal);
}

 /**
         * Calculates the total price of the order.
         * 
         * @param form The order form element.
         * @returns void
         */
 function calculateTotal(form: HTMLFormElement): void {
    const femalePrice = 150.95;
    const malePrice = 180.95;
    const femaleQuantity = parseInt(form.femaleQuantity.value);
    const maleQuantity = parseInt(form.maleQuantity.value);
    const femaleTotal = femalePrice * femaleQuantity;
    const maleTotal = malePrice * maleQuantity;
    const orderTotal = femaleTotal + maleTotal;
    alert("Total for Female Jackets: " + femaleTotal + "\nTotal for Male Jackets: " + maleTotal + "\nTotal Order Price: " + orderTotal);
}