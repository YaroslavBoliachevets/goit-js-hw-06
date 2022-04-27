let counterValue = 0;

const containerEl = document.querySelector('#counter'); 
const valueEl = document.querySelector('#value');

const decrementEl = containerEl.firstElementChild;
const incrementEl = containerEl.lastElementChild;


decrementEl.addEventListener('click', decrement);
incrementEl.addEventListener('click', increment)


function decrement() {
	counterValue -= 1;
	console.log('counterValue', counterValue);
	valueEl.textContent =counterValue;
	
}

function increment() {
	counterValue += 1;
	console.log('counterValue', counterValue);
	valueEl.textContent =counterValue;
	
}