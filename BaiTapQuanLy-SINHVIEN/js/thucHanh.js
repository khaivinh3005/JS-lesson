var elementBody = document.querySelector('#tblBody');
var btnDelete = document.querySelector('#delete');
var btnDiemCaoNhat = document.querySelector('#btnSVCaoDiemNhat');
var btnDiemThapNhat = document.querySelector('#btnSVThapDiemNhat');
var btnDemSinhVienGioi = document.querySelector('#btnSoSVGioi');
var btnDemSapXep = document.querySelector('#btnSapXepTang');

btnDiemCaoNhat.addEventListener('click', timSinhVienDiemCaoNhat);
btnDiemThapNhat.addEventListener('click', timSinhVienDiemNhoNhat);
btnDemSinhVienGioi.addEventListener('click', timDanhSachSinhVienGioi);
btnDemSapXep.addEventListener('click', sapXepSinhVien);

var danhSachSinhVien = [
  {
    name: 'Nguyen Van A',
    dtb: 7,
    image: 'images/1.png',
  },
  {
    name: 'Nguyen Van E',
    dtb: 12,
    image: 'images/a.png',
  },
  {
    name: 'Nguyen Van B',
    dtb: 7.5,
    image: 'images/2.png',
  },
  {
    name: 'Nguyen Van C',
    dtb: 9,
    image: 'images/3.png',
  },
  {
    name: 'Nguyen Van D',
    dtb: 10,
    image: 'images/a.png',
  },
];

function showListSinhVien() {
  var str = '';
  var danhSach = '';
  if (localStorage.getItem('danhSachSinhVienA')) {
    danhSach = JSON.parse(localStorage.getItem('danhSachSinhVienA'));
  } else {
    danhSach = danhSachSinhVien;
  }

  danhSach.map((item, index) => {
    var name = item.name;
    str += `
        <tr>
        <td>
          <span class="custom-checkbox">
            <input
              type="checkbox"
              id="checkbox1"
              name="options[]"
              value="1"
            />
            <label for="checkbox1"></label>
          </span>
        </td>
        <td><img src=${item.image} alt="" /></td>
        <td>${item.name}</td>
        <td class="td-scores">${item.dtb}</td>
        <td>
          <a
            
            ><i
              class="material-icons"
              data-toggle="tooltip"
              title="Edit"
              onclick = "editSinhVien()"
              >&#xE254;</i
            ></a
          >
          <i
              class="material-icons"
              title="Delete"
              onclick = "deleteSinhVien('${item.name}')"
              >&#xE872;
          </i>
        </td>
      </tr>
        `;
  });

  elementBody.innerHTML = str;

  // Lưu dữ liệu dưới local storage
  localStorage.setItem('danhSachSinhVienA', JSON.stringify(danhSachSinhVien));
}

function deleteSinhVien(tenSinhVien) {
  var index = danhSachSinhVien.findIndex((item) => {
    return item.name === tenSinhVien;
  });

  console.log('danhSachSinhVien  trước khi xoá : ', danhSachSinhVien);
  // Nếu index ko có thì nó return = -1
  if (index !== -1) {
    danhSachSinhVien.splice(index, 1);
  }

  console.log('danhSachSinhVien  sau khi xoá : ', danhSachSinhVien);

  // Lưu dưới local danh sách sau khi xoá
  localStorage.setItem('danhSachSinhVienA', JSON.stringify(danhSachSinhVien));

  showListSinhVien();
}

function timSinhVienDiemCaoNhat() {
  if (danhSachSinhVien.length === 1) {
    danhSachSinhVien = [
      {
        name: 'Nguyen Van A',
        dtb: 7,
        image: 'images/1.png',
      },
      {
        name: 'Nguyen Van B',
        dtb: 7.5,
        image: 'images/2.png',
      },
      {
        name: 'Nguyen Van C',
        dtb: 9,
        image: 'images/3.png',
      },
      {
        name: 'Nguyen Van D',
        dtb: 10,
        image: 'images/a.png',
      },
      {
        name: 'Nguyen Van E',
        dtb: 12,
        image: 'images/a.png',
      },
    ];
    showListSinhVien();
  } else {
    // Cần có danh sách sinh viên
    // ban đầu mình sẽ tạo 1 biến và gán cho thằng đầu tiên
    var sinhVien = danhSachSinhVien[0];

    // Duyệt qua danh sách nếu thằng thứ 2 lớn hơn thằng sinh viên thì sẽ gán biến sinhVien bằng thằng lớn hơn
    for (var i = 0; i < danhSachSinhVien.length; i++) {
      // danhSachSinhVien[i] theo thứ tự từ 0 tới 4

      // Nếu điểm sinh viên được khai báo ở trên < danhSachSinhVien[i] thì sẽ gán biến sinh viên cho danhSachSinhVien[i]
      if (sinhVien.dtb < danhSachSinhVien[i].dtb) {
        sinhVien = danhSachSinhVien[i];
      }
    }

    // cập nhật danh sách sinh viên = sinh viên tìm được
    danhSachSinhVien = [sinhVien];

    // Hiển thị lại giao diện
    showListSinhVien();
  }
}

function timSinhVienDiemNhoNhat() {
  if (danhSachSinhVien.length === 1) {
    danhSachSinhVien = [
      {
        name: 'Nguyen Van A',
        dtb: 7,
        image: 'images/1.png',
      },
      {
        name: 'Nguyen Van B',
        dtb: 7.5,
        image: 'images/2.png',
      },
      {
        name: 'Nguyen Van C',
        dtb: 9,
        image: 'images/3.png',
      },
      {
        name: 'Nguyen Van D',
        dtb: 10,
        image: 'images/a.png',
      },
      {
        name: 'Nguyen Van E',
        dtb: 12,
        image: 'images/a.png',
      },
    ];
    showListSinhVien();
  } else {
    // Cần có danh sách sinh viênv

    // ban đầu mình sẽ tạo 1 biến và gán cho thằng đầu tiên
    var sinhVien = danhSachSinhVien[0];

    // Duyệt qua danh sách nếu thằng thứ 2 lớn hơn thằng sinh viên thì sẽ gán biến sinhVien bằng thằng lớn hơn
    for (var i = 0; i < danhSachSinhVien.length; i++) {
      // danhSachSinhVien[i] theo thứ tự từ 0 tới 4

      // Nếu điểm sinh viên được khai báo ở trên > danhSachSinhVien[i] thì sẽ gán biến sinh viên cho danhSachSinhVien[i]
      if (sinhVien.dtb > danhSachSinhVien[i].dtb) {
        sinhVien = danhSachSinhVien[i];
      }
    }

    // cập nhật danh sách sinh viên = sinh viên tìm được
    danhSachSinhVien = [sinhVien];

    // Hiển thị lại giao diện
    showListSinhVien();
  }
}

showListSinhVien();

function timDanhSachSinhVienGioi() {
  let danhSachSinhVienGioi = [];
  danhSachSinhVien.map((sinhVien) => {
    if (sinhVien.dtb >= 8) {
      danhSachSinhVienGioi.push(sinhVien);
    }
  });

  danhSachSinhVien = danhSachSinhVienGioi;
  showListSinhVien();
}
// let danhSachSinhVienGioi = [];
// Mình sẽ dùng vòng lập for nếu những sinh viên lớn có điểm > 8 thì danhSachSinhVienGioi thêm sinh viên đó vô

function sapXepSinhVien() {
  danhSachSinhVien = danhSachSinhVien.sort(
    (sinhVienA, sinhVienB) => sinhVienA.dtb - sinhVienB.dtb
  );
  showListSinhVien();
}
