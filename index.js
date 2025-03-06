const display = document.getElementById("display");

function appendToDisplay(input) {
    const displayAkhir = display.value.slice(-1);
    if (displayAkhir === "" && ["+", "-", "*", "/"].includes(input)){
        return;
    }

    if (["+", "-", "*", "/"].includes(displayAkhir) && ["+", "-", "*", "/"].includes(input)) {
        return;
    }

    display.value += input;
}

function clearDisplay(){
    display.value = null;
}


function calculate() {
    display.value = eval(display.value); 
}