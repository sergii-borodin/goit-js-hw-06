const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputRange.addEventListener('input', onFontSizeChange)

function onFontSizeChange(e) {
    const fontSize = e.currentTarget.value;
    spanText.style.fontSize = `${fontSize}px`;
}