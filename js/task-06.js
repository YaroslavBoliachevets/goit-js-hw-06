
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkSymbol);

function checkSymbol(event) {

	const isRight = event.currentTarget.value.length == inputEl.dataset.length;
	
	if (isRight) {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid');
		
	} 
	else {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid');
	}
}