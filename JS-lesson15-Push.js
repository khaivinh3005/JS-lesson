var elementListItem = document.querySelector('.listItem');
var elementName = document.getElementById('name');
var elementPrice = document.getElementById('price');
var elementLinkImage = document.getElementById('picture');
var elementSales = document.getElementById('sales');
var elementButton = document.getElementById('button');
var elementInput = document.querySelector('#input-search');
var elementBtnSearch = document.querySelector('#btn-search');

elementButton.addEventListener('click', addItem);
elementBtnSearch.addEventListener('click', handleSearch);

elementInput.addEventListener('keyup', handleSearch);

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

function showNoiDung() {
  var str = '';
  console.log('danhSachDienThoai : ', danhSachDienThoai);
  //Hàm map
  danhSachDienThoai.map((item, index) => {
    var tenSP = item.name;
    var price = item.price.toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND',
    });
    var image = item.image;

    var removeValueSapce = item.name.toLocaleLowerCase().replace(/\s/g, '');
    var sales = removeValueSapce.includes('iphone15') ? item.sales : 30;

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
  var newNamePhone = elementName.value.toLowerCase();
  var newPricePhone = Number(elementPrice.value);
  var newImagePhone = elementLinkImage.value;
  var firstLetterString = newNamePhone[0].toUpperCase() + newNamePhone.slice(1);
  var valueSales = Number(elementSales.value);

  if (newNamePhone && newPricePhone && newImagePhone && valueSales) {
    var newPhone = {
      name: firstLetterString,
      price: newPricePhone,
      image: newImagePhone,
      id: danhSachDienThoai.length + 1,
      sales: valueSales,
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

    // Gọi lại show nội dung
    showNoiDung();
  } else {
    alert(' vui long nhap');
  }
}

function handleSearch() {
  /**
   * B1: Chuyển đổi giá trị user nhập remove space và chuyển thành chữ thường hết
   * B2: Chuyển đổi giá trị name trong danhSachDienThoai thành chữ thường và remove space
   */

  //B1
  var valueSearchUser = elementInput.value;
  valueSearchUser = valueSearchUser.replace(/\s/g, '').toLowerCase();

  //B2
  var viTri = danhSachDienThoai.findIndex((item, index) => {
    // Chuyển đổi tên trong danh sách thành chữ thường
    var namePhone = item.name.replace(/\s/g, '').toLowerCase();

    // Nếu ng dùng nhập iphone10 thì mình sẽ gán giá trị ng dùng nhập bằng iphone x
    if (valueSearchUser === 'iphone10') {
      valueSearchUser = 'iphonex';
    }

    // So sánh giá trị người dùng nhập với namePhone
    var find = namePhone === valueSearchUser;
    return find;
  });

  if (viTri !== -1) {
    console.log('viTri : ', viTri);
    var danhSachDienThoaiUpdate = [];
    danhSachDienThoaiUpdate.push(danhSachDienThoai[viTri]);
    danhSachDienThoai = danhSachDienThoaiUpdate;
    showNoiDung();
  } else {
    danhSachDienThoai = [
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

    showNoiDung();
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

/** Show danh sách sản phẩm
 * Cho trước danh sách sản phẩm
 *
 * 1: Làm giao diện trước : HTML + CSS
 * 2: Thực hiện JS:
 *   2.1: DOM Tới thằng chưa list danh sách (Tức là class listItem) và kiểm tra bằng console
 *   2.2: Tạo hàm show sản phẩm và gọi hàm để kiểm tra bằng console để xem hàm đó có hoạt động hay không ?
 *   2.2.1: Show danh sách sản phẩm bằng hàm map và in ra giao diện
 */

/**
 * Chức năng thêm sản phẩm
 * 1: Tạo giao diện HTML + CSS
 * 2: Thực hiện JS:
 *   2.1: DOM và kiểm tra giá trị người dùng nhập và kiểm tra bằng console
 *   2.2: Tạo function và thêm sự kiện onlick để để kiểm tra khi click vào nút thêm có hoạt động function hay ko?
 *   2.2.1: Khai báo biến người dùng nhập để console ra giá trị biến đó.
 *   2.2.2: Kiểm tra điều kiện có tồn tại giá trị người dùng nhập hay ko?
 *          => nếu có thì thực hiện
 *          => còn ko thì thông báo lỗi
 *   2.2.3: Nếu thoả mãn điều kiện 2.2.2 thì thực :
 *         + Khai bao biến object và kiểm tra trong đó object phải chứa đủ key của từng item trong danh sách sản phẩm
 *         + Lấy danh sách sản phẩm ra và thêm object vừa khai báo vào danh sách sản phẩm (Phương thức : push)
 *         + Gọi lại hàm show sản phẩm
 *
 */
