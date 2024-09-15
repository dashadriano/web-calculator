const display = document.getElementById("display");

function addElementToDisplay(input) {
    display.value += input;
}

function clearAll() {
    display.value = "";
}

function doOperation() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "ERROR"
    }
}