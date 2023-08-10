var elementA = tenCuaThe('#a');
var elementB = tenCuaThe('#b');
var elementButton = tenCuaThe('#btn');

elementButton.addEventListener('click', tinhTong);

function tenCuaThe(thamSo) {
  //cach 1
  //    var dom = document.querySelector(thamSo);
  //    return dom

  // cach 2
  //    return document.querySelector(thamSo);
  var dom = document.querySelector(thamSo);
  return dom;
}

function tinhTong() {
  var giaTriA = elementA.value;
  var giaTriB = elementB.value;
  var thoaDieuKien = soSanhThoaManDieuKien(giaTriA, giaTriB);
  if (thoaDieuKien) {
    console.log('sum : ', giaTriA + giaTriB);
  } else {
    alert('vui long nhap day du thong tin');
  }
}

function tinhHieu() {
  var giaTriA = elementA.value;
  var giaTriB = elementB.value;
  var thoaDieuKien = soSanhThoaManDieuKien(giaTriA, giaTriB);
}

function soSanhThoaManDieuKien(thamSoA, thamSoB) {
  var ketQuaReturn;
  if (thamSoA && thamSoB) {
    ketQuaReturn = true;
  } else {
    ketQuaReturn = false;
  }
  return ketQuaReturn;
}
