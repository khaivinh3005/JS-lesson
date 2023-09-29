/**
 * Get : Phương thức lấy toàn bộ danh sách ở API
 * URL : Đường link
 * Then: Nếu đường link đúng thì nó sẽ trả ra data
 * Catch: Nếu đường link sai or phương thức sai thì sẽ báo lỗi
 */

let listElement = document.querySelector('#listDS');

// Hàm call api
const callAPI = () => {
  axios({
    method: 'get',
    url: 'https://6516d0c809e3260018ca5908.mockapi.io/ListUser',
  })
    .then((response) => {
      let data = response.data;
      showUI(data);
    })
    .catch((error) => {
      alert('duong link loi roi ku');
    });
};

callAPI();

const showUI = (data) => {
  let str = '';
  data.map((item, index) => {
    str += `
    <div class="col-sm-4">
    <div class="card">
      <img
        src="data:image/jpeg;base64,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"
        class="card-img-top"
        alt="meomeo"
        width="400"
      />
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional
          content.
        </p>
        <span onclick='deleteItem(${item.id})' class="btn btn-danger">Delete</span>
      </div>
    </div>
    </div>
    `;
  });

  listElement.innerHTML = str;
};

// Hàm xoá
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
