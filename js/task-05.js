const inputEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  outputNameEl.textContent = event.currentTarget.value;
}
