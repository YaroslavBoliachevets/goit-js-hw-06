function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const labelEl = document.querySelector('.color');
const bodyEl = document.body;
let newColor = '';

btnChangeColorEl.addEventListener('click', onChangeBodyColor);
btnChangeColorEl.addEventListener('click', onChangeLabel);

function onChangeBodyColor() {
  newColor = getRandomHexColor();

  bodyEl.setAttribute('style', `background-color:${newColor}`);
}

function onChangeLabel() {
  labelEl.textContent = `${newColor}`;
}
