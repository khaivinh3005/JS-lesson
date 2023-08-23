// ES6
var listFruits = [
  {
    name: 'oi',
    price: 20,
  },
  {
    name: 'cam',
    price: 10,
  },
  {
    name: 'xoai',
    price: 30,
  },
];
listFruits.map((item, index) => {
  console.log('name : ', item.name, 'vi tri : ', index);
});
