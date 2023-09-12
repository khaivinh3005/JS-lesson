var elementBody = document.querySelector('#tblBody');
var btnDelete = document.querySelector('#delete');
var danhSachSinhVien = [
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
];

function showListSinhVien() {
  var str = '';
  danhSachSinhVien.map((item, index) => {
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
}

showListSinhVien();

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
  showListSinhVien();
}
