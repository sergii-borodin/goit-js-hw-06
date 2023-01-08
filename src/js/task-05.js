const inputValue = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output');


inputValue.addEventListener('input',onInputValuePrint)

function onInputValuePrint() {
    spanValue.textContent = inputValue.value;
}