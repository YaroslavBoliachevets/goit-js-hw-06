const inputValueEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

console.log('inputValueEl', inputValueEl.value);

inputValueEl.addEventListener('input', onChangeSize);

function onChangeSize(event) {
  textEl.setAttribute('style', `font-size:${event.currentTarget.value}px`);
}
