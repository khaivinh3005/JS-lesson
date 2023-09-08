// // Phương thức includes : kiểm tra biến giá trị có bao gồm giá trị mong muốn hay không?
// var valueUser = 'IPhonE      20';

// // Kiểm tra biến valuesUser có giá trị 15 không
// // Nếu có 15 thì trả về true , ngược lại là false
// var isCheckNumber = valueUser.includes('15'); //true
// var isCheckProduce = valueUser.includes('iphone'); //true

// // Xoá những khoảng cách trống của valueUser
// var newValue = valueUser.replace(/\s/g, ''); // IPhonE20

// // Chuyển đổi chữ hoa thành chữ thường
// var convertLowerCase = newValue.toLowerCase(); //iphone20

// user :  iPhOne    15

// 1 => iPhOne15 2=> iphone15 3=> Iphone15
// SHow :  Iphone 15

var elementNamePhone = document.querySelector('#name');
var elementButton = document.querySelector('#button');

elementButton.addEventListener('click', showNoiDung);

function showNoiDung() {
  var namePhone = elementNamePhone.value;

  //1 remove space
  namePhone = namePhone.replace(/\s/g, '');

  //2 to lower text
  namePhone = namePhone.toLowerCase();

  namePhone = namePhone[0].toUpperCase() + namePhone.slice(1);
  console.log('namePhone : ', namePhone);
}
