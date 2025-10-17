function appendToDisplay(value) {
    const display = document.getElementById('display');
    if(display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        let result = eval(display.value);
        if(Number.isInteger(result)) {
            display.value = result;
        } else {
            display.value = result.toFixed(2);
        }
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            clearDisplay();
        }, 2000);
    }
}

document.getElementById('display').value = '0';
