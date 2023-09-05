let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.textContent === '0' && value !== '.' ) {
        display.textContent = '';
    }
    display.textContent += value;
}



// function appendToDisplay(value) {
//     if (display.textContent === '0' && value !== '.') {
//         display.textContent = '';
//     }
//     if (display.textContent.length < '6') {
//         display.textContent += value;
//     }
// }


function clearDisplay() {
    display.textContent = '0';
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

function deleteLastCharacter() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}