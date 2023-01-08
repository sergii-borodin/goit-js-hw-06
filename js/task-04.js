let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');



btnDecrement.addEventListener('click', onDecrementButtonClick )
btnIncrement.addEventListener('click', onIncrementButtonClick)

function onDecrementButtonClick() {

    counterValue -= 1;
    spanValue.textContent = counterValue;
}

function onIncrementButtonClick() {
    counterValue += 1;
        spanValue.textContent = counterValue;

}








