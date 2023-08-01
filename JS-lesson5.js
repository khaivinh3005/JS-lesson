// DOM tới thẻ
var theLabelTK = document.querySelector('#label-tk');
var theDivCha = document.querySelector('#cha-id');

// Cập nhật style cho div cha
theDivCha.style.border = '1px solid black';

// Thêm 1 class cho theDivCha
theDivCha.classList.add('div-bg');

// Thêm nhiều class cho theDivCha
theDivCha.classList.add('div-tong', 'div-bg');
