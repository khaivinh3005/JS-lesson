/**
 * Chức năng search
 * b1: Tạo giao diện search
 * b2: DOM tới tới thẻ input và button search và hiển console
 * b3: Tạo function search và click coi thử function đó có hoạt động hay không và lấy được giá trị search ng dùng
 * b4:
 *
 */

// var elementInput = document.querySelector('#input-search');
// var elementBtnSearch = document.querySelector('#btn-search');

// elementBtnSearch.addEventListener('click', handleSearch);

// function handleSearch() {
//   var valueSearch = elementInput.value;

// }

import { showNoiDung } from './JS-lesson15-Push';

var danhSachDienThoai = [
  {
    id: 1,
    name: 'Iphone X',
    price: 10000000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg',
  },
  {
    id: 2,
    name: 'Iphone 11',
    price: 20000000,
    image:
      'https://cdn.hoanghamobile.com/i/preview/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg',
  },
  {
    id: 3,
    name: 'Iphone 12',
    price: 30000000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-thumb-600x600.jpg',
  },
  {
    id: 4,
    name: 'Iphone 14',
    price: 40000000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg',
  },
  {
    id: 5,
    name: 'Iphone 15',
    price: 100000000,
    image:
      'https://vcdn-sohoa.vnecdn.net/2023/08/22/iPhone-15-Pro-Burgandy-Feature-1241-3763-1692676036.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=K1MUebStDTCs1al8R_kTtw',
    sales: 10,
  },
];

// function handleSearch() {
//   /**
//    * B1: Chuyển đổi giá trị user nhập remove space và chuyển thành chữ thường hết
//    * B2: Chuyển đổi giá trị name trong danhSachDienThoai thành chữ thường và remove space
//    */

//   //B1
//   var valueSearchUser = 'iphONE  12';
//   valueSearchUser = valueSearchUser.replace(/\s/g, '').toLowerCase();

//   //B2
//   var viTri = danhSachDienThoai.findIndex((item, index) => {
//     // Chuyển đổi tên trong danh sách thành chữ thường
//     var namePhone = item.name.replace(/\s/g, '').toLowerCase();

//     // So sánh giá trị người dùng nhập với namePhone
//     var find = namePhone === valueSearchUser;
//     return find;
//   });

//   console.log('viTri : ', danhSachDienThoai[viTri]);
// }

// handleSearch();
