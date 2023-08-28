var elementListItem = document.querySelector('.listItem');
var elementName = document.getElementById('name');
var elementPrice = document.getElementById('price');
var elementLinkImage = document.getElementById('picture');
var elementButton = document.getElementById('button');

elementButton.addEventListener('click', addItem);

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
];

function showNoiDung() {
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

function addItem() {
  var newNamePhone = elementName.value;
  var newPricePhone = Number(elementPrice.value);
  var newImagePhone = elementLinkImage.value;
  var firstLetterString = newNamePhone[0].toUpperCase() + newNamePhone.slice(1);

  if (newNamePhone && newPricePhone && newImagePhone) {
    var newPhone = {
      name: firstLetterString,
      price: newPricePhone,
      image: newImagePhone,
      id: danhSachDienThoai.length + 1,
    };

    // cập nhật tiền theo format vnđ
    newPhone.price.toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND',
    });

    // cập nhật tên thành in hoa
    // newPhone.name.toUpperCase();

    // Add sản phẩm
    danhSachDienThoai.push(newPhone);

    console.log('danhSachDienThoai:  ', danhSachDienThoai);
    // Gọi lại show nội dung
    showNoiDung();
  } else {
    alert(' vui long nhap');
  }
}

/**
 * Bài tập về nhà
 * Làm trang FPT : Header + danh mục từng thiết bị điện tử + danh Sách laptop
 * Danh Sách Laptop:
 * Tạo thêm input bao gồm : Tên + giá + hình ảnh + giá đã giảm
 * Làm chức năng thêm sản phẩm laptop và hiển thị giao diện
 *
 */
