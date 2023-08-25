// ES6
var elementDanhSach = document.querySelector('#danhSachSP');
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
    name: 'Iphone 11',
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
    price: 40000000,
    image:
      'https://vcdn1-sohoa.vnecdn.net/2023/08/22/iphone-15-pro-burgandy-feature-8677-4236-1692676036.jpg?w=900&h=540&q=100&dpr=1&fit=crop&s=Yeuc7RWkIq4BtT3iJxdFyQ',
  },
];
var elementModal = document.querySelector('#modal-item');

function showSanPham() {
  var content = '';

  danhSachDienThoai.map((item, index) => {
    content += `
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src=${item.image}
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${item.name}</div>
        <div class="">${item.price}</div>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#photography</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#travel</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#winter</span
        >
      </div>
      <div>
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onclick="showModal(${item.name})"
      >
        Toggle modal
      </button>
      </div>  
      
      
    </div>
    `;
  });

  elementDanhSach.innerHTML = content;
}

showSanPham();

function showModal(name) {
  var str = `<h1>${name}</h1>`;
  return (elementModal.innerHTML = str);
}
