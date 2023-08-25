var elementListItem = document.querySelector('.listItem');
function showNoiDung() {
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

  var str = '';
  //Hàm map
  danhSachDienThoai.map((item, index) => {
    var tenSP = item.name;
    var price = item.price.toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND',
    });
    var image = item.image;

    // ES5
    // var sales = 30;
    // if (item.name === 'Iphone 15') {
    //   sales = 50;
    // }

    // ES6 nếu name là iphone 15 thì sẽ là 50 còn ko thì sẽ là 30
    var sales = item.name === 'Iphone 15' ? 50 : 30;

    str += `
    <div class="item">
        <img
        src=${image}
        alt=${tenSP}
        width="200"
        height="400"
        style="height: 200px"
        />
        <h1>Tên sản phẩm : <span>${tenSP}</span></h1>
        <h3>Giá : <span>${price}</span></h3>
        <span class="sales" style="background-color: ${
          item.name === 'Iphone 15' ? 'blue' : 'red'
        }">Sales ${sales}%</span>
    </div>
    `;
  });

  elementListItem.innerHTML = str;
}

showNoiDung();
