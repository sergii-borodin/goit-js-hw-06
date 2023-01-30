
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const body = document.querySelector('body');

btnEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanEl.textContent = color;
  console.log(color )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}