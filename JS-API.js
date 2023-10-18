/**
 * Get : Phương thức lấy toàn bộ danh sách ở API
 * URL : Đường link
 * Then: Nếu đường link đúng thì nó sẽ trả ra data
 * Catch: Nếu đường link sai or phương thức sai thì sẽ báo lỗi
 */

const listElement = document.querySelector('#listDS');
const inputIdItem = document.querySelector('#idItem');
const inputIdImage = document.querySelector('#idItem');

const btnAdd = document.querySelector('#btn-add');

// Hàm call api để lấy dữ liệu người dùng
const callAPI = () => {
  axios({
    method: 'get',
    url: 'https://6516d0c809e3260018ca5908.mockapi.io/ListUser',
  })
    .then((response) => {
      let data = response.data;
      setLocalStorage(data);
      showUI(data);
    })
    .catch((error) => {
      alert('duong link loi roi ku');
    });
};

callAPI();

const showUI = (data) => {
  let str = '';
  data.map((item, index, listData) => {
    str += `
    <div class="col-sm-4">
    <div class="card">
      <img
        class="card-img-top"
        alt="meomeo"
        width="400"
        height="200"
        src=${
          item.image.length > 10
            ? item.image
            : 'https://haycafe.vn/wp-content/uploads/2022/07/anh-wibu-co-hau-gai-toc-xanh.jpg'
        }
      />
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional
          content.
        </p>
        <span onclick='saveChange(${item.id}, ${JSON.stringify(
      listData
    )})' class="btn btn-primary">Edit</span>
        <span onclick='deleteItem(${
          item.id
        })' class="btn btn-danger">Delete</span>
      </div>
    </div>
    </div>
    `;
  });

  listElement.innerHTML = str;
};

function setLocalStorage(listUser) {
  localStorage.setItem('DSNV', JSON.stringify(listUser));
}

// Hàm xoá: API xoá item mà mình muốn
const deleteItem = (id) => {
  axios({
    method: 'delete',
    url: `https://6516d0c809e3260018ca5908.mockapi.io/ListUser/${id}`,
  }).then((response) => {
    // Khi xoá thành công thì mình sẽ call function callAPI để cập nhật lại giao diện
    if (response.data) {
      alert('Đã xoá thành công');
      callAPI();
    }
  });
};

// API cập nhật lại id mà mình muốn chỉnh sửa
const callApiUpdate = (id, updatedObject) => {
  axios({
    method: 'put',
    url: `https://6516d0c809e3260018ca5908.mockapi.io/ListUser/${id}`,
    // dữ liệu mình truyền xuống cho BE
    data: updatedObject,
  }).then((response) => {
    if (response.data) {
      console.log('response.data : ', response.data);
    }
  });
};

// Hàm chỉnh sửa
const saveChange = (id, data) => {
  console.log('list : ', data);
  let listUserLocal = [];
  if (localStorage.getItem('DSNV') !== null) {
    listUserLocal = JSON.parse(localStorage.getItem('DSNV'));
  }

  const index = listUserLocal.findIndex((item) => item.id == id);
  const user = listUserLocal[index];

  document.querySelector('#idItem').value = user.name;
  document.querySelector('#idImage').value = user.image;
  document.querySelector('.modal').classList.add('show');
  document.querySelector('.modal').style.display = 'block';

  document.getElementById('btnSave').addEventListener('click', function () {
    const updateObject = {
      name: document.querySelector('#idItem').value,
      image: document.querySelector('#idImage').value,
    };

    callApiUpdate(listUserLocal[index].id, updateObject);
  });
};

// Hàm thêm user
const callAPIAddUser = () => {
  //newObject
  axios({
    method: 'post',
    url: 'https://6516d0c809e3260018ca5908.mockapi.io/ListUser',
    data: {
      name: 'Viet Long',
      image:
        'https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/52820203_750269395346555_1053896313428508672_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7a1959&_nc_ohc=B246XS-hfekAX-yxluj&_nc_ht=scontent.fdad1-2.fna&_nc_e2o=f&oh=00_AfCmvrp43ZuxQ7nJfaSB6RS13yAzzEpxw6uppsYcfULOZQ&oe=65521B22',
    },
  }).then((response) => {
    if (response.data) {
      alert('Đã Thêm thành công');
      callAPI();
    }
  });
};

// Hàm edit User
const editUser = (id, listData) => {
  console.log('id  : ', id);
  console.log('listData : ', listData);
};
