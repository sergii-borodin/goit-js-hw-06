const inputValue = document.querySelector('#validation-input');
console.dir(inputValue)
const inputValidationLength = Number(inputValue.dataset.length);
console.log(typeof inputValidationLength);

inputValue.addEventListener('blur', oninputValueBlur)

function oninputValueBlur(e) {
    console.log(typeof inputValue.value.length)
    if (e.target.value.length === inputValidationLength && inputValue.classList.contains('invalid')) {
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');
    }
    if (e.target.value.length !== inputValidationLength && inputValue.classList.contains('valid')){
        inputValue.classList.remove('valid');
        inputValue.classList.add('invalid');
    }
    if (e.target.value.length !== inputValidationLength) {  
        inputValue.classList.add('invalid');
    }
    if (e.target.value.length === inputValidationLength) {  
        inputValue.classList.add('valid');
    }
}