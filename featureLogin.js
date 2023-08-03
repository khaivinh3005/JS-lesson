var email = document.querySelector('#email');
var password = document.querySelector('#password');
var btnSubmit = document.querySelector('#btn');

btnSubmit.addEventListener('click', login);

function login() {
  var valueEmail = email.value;
  var valuePassword = password.value;

  if (valueEmail && valuePassword) {
    alert('Successful login');
    window.location.href = 'lesson6-lyThuyetFunction.html';
  } else {
    alert('Vui long dien day du thong');
  }
}
