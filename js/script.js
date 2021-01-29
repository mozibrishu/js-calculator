







// Get Set Method
function getAmount(id) {
    return parseFloat(document.getElementById(id).innerText);
}
function setAmount(id, amount) {
    document.getElementById(id).innerText = amount;
}