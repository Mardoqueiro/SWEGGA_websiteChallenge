<<<<<<<<<<<<<<  ✨ Codeium Command ⭐ >>>>>>>>>>>>>>>>
function calculateTotalPrice() {
    var femaleTable = document.getElementById("femaleTable");
    var maleTable = document.getElementById("maleTable");
    var orderTable = document.getElementById("orderTable");
    var femaleTotal = 0;
    var maleTotal = 0;
    var orderTotal = 0;

    for (var i = 1; i < femaleTable.rows.length; i++) {
        var quantity = parseInt(femaleTable.rows[i].cells[4].getElementsByTagName("input")[0].value);
        var price = parseFloat(femaleTable.rows[i].cells[3].innerHTML.slice(1));
        femaleTotal += quantity * price;
    }

    for (var i = 1; i < maleTable.rows.length; i++) {
        var quantity = parseInt(maleTable.rows[i].cells[4].getElementsByTagName("input")[0].value);
        var price = parseFloat(maleTable.rows[i].cells[3].innerHTML.slice(1));
        maleTotal += quantity * price;
    }

    orderTotal = femaleTotal + maleTotal;

    document.getElementById("femaleTotal").innerHTML = "Total: R" + femaleTotal.toFixed(2);
    document.getElementById("maleTotal").innerHTML = "Total: R" + maleTotal.toFixed(2);
    document.getElementById("orderTotal").innerHTML = "Total: R" + orderTotal.toFixed(2);
}
<<<<<<<  eb96f859-66c6-4b52-be56-3df44203bf1a  >>>>>>>