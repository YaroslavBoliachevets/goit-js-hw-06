const formEl = document.querySelector('.login-form');
const users = {};

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const message = 'Все поля должны быть заполнены';
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email != '' && password != '') {
    users.email = email;
    users.password = password;

    console.log('', users);
    formEl.reset();
  } else {
    alert(message);
  }
}
