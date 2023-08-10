// var numberA = document.getElementById('a').value;
// var numberB = document.getElementById('b').value;
// var numberC = document.getElementById('c').value;

// function tinhTong(thamSo1, thamSo2, thamSo3) {
//   var so1 = Number(thamSo1);
//   var so2 = Number(thamSo2);
//   var so3 = Number(thamSo3);
//   /**
//    * th1: có tham số 1 và tham sô 2 và tham số 3
//    * th2: có tham số 1 và tham số 2
//    * Th3: có tham số 1
//    * th4: ko có tham số nào
//    */
//   var tong;
//   if (so1 && so2 && so3) {
//     tong = so1 + so2 + so3;
//   } else if (so1 && so2) {
//     tong = so1 + so2;
//   } else if (so1) {
//     tong = so1;
//   }
//   console.log('tong : ', tong);
// }

// tinhTong(numberA, numberB, numberC);
// tinhTong(numberA, numberB);
// tinhTong(numberA);

// Vi du
// if (numberA > numberB) {
//   console.log('numberA > number B');
// } else if (numberA < numberB) {
//   console.log('numberA < number B');
// } else {
//   console.log('numberA = number B');
// }

/**
 * && : và
 * || : hoặc
 * == : so sánh bằng
 * >= ; so sánh lớn hơn hoặc bằng
 * <= ; so sánh bé hơn hoặc bằng
 * != ; khác
 */

var a = 'hello'; //a có giá trị
var b = 4;

// !a = 0 || false || "" ko ko có giá

if (!a) {
  console.log('a hoặc b ko có giá trị');
} else {
  console.log('ca a va b co gia tri');
}
