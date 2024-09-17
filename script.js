let counterValue = 0;

function add() {
    counterValue++;
    document.getElementById("counter").innerText = counterValue;
}

function subtract() {
    counterValue--;
    document.getElementById("counter").innerText = counterValue;
}
