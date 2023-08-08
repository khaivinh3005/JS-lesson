// lý thuyết function (gọi tắt là hàm)
var buttonTatDen = document.querySelector('#tatDen');
var buttonBatDen = document.querySelector('#batDen');
var theBody = document.querySelector('body');
var theH1 = document.querySelector('h1');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var btn = document.querySelector('#btn');

buttonTatDen.addEventListener('click', batVaTatDen);
buttonBatDen.addEventListener('click', batVaTatDen);

function batVaTatDen() {
  //thuộc tính toggle : nếu thẻ đó có class color-red thì sẽ xoá và ngược lại nếu ko có thì sẽ thêm
  theH1.classList.toggle('color-red');
}

// TH1
// btn.addEventListener('click', function submit(event) {
//   console.log('event : ', event);
// });

// TH2
btn.addEventListener('click', showData);
function showData(event) {
  // event là thuộc tính có sẵn trong sự kiện click của function
  // Sự kiện ko cho reload page
  event.preventDefault();
  console.log('event: ', event);
}
