function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorBody = document.querySelector('body');
const color = document.querySelector('span.color')
const buttonColorChange = document.querySelector('button.change-color');

buttonColorChange.addEventListener('click', () => {
  colorBody.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
})
