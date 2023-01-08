const inputValue = document.querySelector('#validation-input');
console.dir(inputValue)
const inputValidationLength = inputValue.dataset.length;

inputValue.addEventListener('blur', oninputValueBlur)

function oninputValueBlur() {
    console.log(typeof inputValue.value.length)
    if (inputValue.value.length !== inputValidationLength) {
        inputValue.classList.add('invalid');
    } else if (inputValue.value.length === inputValidationLength && inputValue.classList('invalid')) {
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');
    } else if (inputValue.value.length !== inputValidationLength && inputValue.classList('valid')) {
        inputValue.classList.remove('valid');
        inputValue.classList.add('invalid');
    }
}