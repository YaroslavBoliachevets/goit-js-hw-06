const inputEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);


function onInputChange(event) {
  
  if (event.currentTarget.value.length != '') {
    outputNameEl.textContent = event.currentTarget.value;
    
  } else {
    outputNameEl.textContent = 'Anonymous';
  }
}
