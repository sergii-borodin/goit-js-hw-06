

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor() )



const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const body = document.querySelector('body');

btnEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

