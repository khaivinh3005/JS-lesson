// Viết Arrow function
// Phien ban dài dòng
// const arrowFunction = (dongVat1, dongVat2, dongVat3, dongVat4, dongVat5) => {
//   console.log('dongVat1  : ', dongVat1);
//   console.log('dongVat2  : ', dongVat2);
//   console.log('dongVat3 : ', dongVat3);
//   console.log('dongVat4  : ', dongVat4);
// };

// arrowFunction('cho', 'meo', 'heo', 'bo', 'khi');

// Phiên bản rút gọn là rest params

// const newArrowFunction = (...restParams) => {
//   console.log('restParams:  ', restParams);

// };

// newArrowFunction('cho', 'meo', 'heo', 'bo', 'khi', 'sau', 'chuon chuon');

// Array
// let mangC = [1, 2, 3, 4];
// let mangD = [...mangC]; //Update với mảng c có 4 phần tử

// console.log('mangC : ', mangC);
// console.log('mangD : ', mangD);

// //
// mangC.push(5); //mảng c update

// // mang D đâu có đc update mô mà đòi tăng lên

// console.log('mangC sau update : ', mangC);
// console.log('mangD sau update : ', mangD);

// Object
// let object = {
//   name: 'Subake',
//   age: 27,
//   city: 'Tam Ky',
//   size: {
//     weight: '65kg',
//     height: '170cm',
//   },
//   skill: function () {
//     return 'dep trai';
//   },
//   classObject: '10A',
// };

// // ES5
// let nameObject = object.name;
// let ageObject = object.age;

// console.log('nameObject : ', nameObject);
// console.log('ageObject : ', ageObject);

// console.log('---------------------');
// // ES6
// let { name, age, city, size, skill, classObject } = object;

// // Đổi tên trong object
// let { weight: weightSubake, height: heightSubake } = size;

// console.log('weightSubake : ', weightSubake);
// console.log('heightSubake : ', heightSubake);

let arr = ['JS', 'Java', 'C++', 'C#'];

// c1
// arr.forEach((item) => console.log('item  : ', item));

// c2
// for (let i = 0; i < arr.length; i++) {
//   console.log('item  : ', arr[i]);
// }

// c3 : for in
for (let viTri in arr) {
  console.log('index : ', arr[viTri]);
}

// c4: for of
for (let item of arr) {
  console.log('item : ', item);
}
