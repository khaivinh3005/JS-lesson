// lý thuyết function (gọi tắt là hàm)
var buttonTatDen = document.querySelector('#tatDen');
var buttonBatDen = document.querySelector('#batDen');
var theBody = document.querySelector('body');
var theH1 = document.querySelector('h1');

buttonTatDen.addEventListener('click', batVaTatDen);
buttonBatDen.addEventListener('click', batVaTatDen);

function batVaTatDen() {
  //thuộc tính toggle : nếu thẻ đó có class color-red thì sẽ xoá và ngược lại nếu ko có thì sẽ thêm
  theH1.classList.toggle('color-red');
}
