// Phương thức includes : kiểm tra biến giá trị có bao gồm giá trị mong muốn hay không?
var valueUser = 'IPhonE      20';

// Kiểm tra biến valuesUser có giá trị 15 không
// Nếu có 15 thì trả về true , ngược lại là false
var isCheckNumber = valueUser.includes('15'); //true
var isCheckProduce = valueUser.includes('iphone'); //true

// Xoá những khoảng cách trống của valueUser
var newValue = valueUser.replace(/\s/g, ''); // IPhonE20

// Chuyển đổi chữ hoa thành chữ thường
var convertLowerCase = newValue.toLowerCase(); //iphone20
