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
  var thoaDieuKien;
  // C1:
  if (giaTriA && giaTriB) {
    thoaDieuKien = true;
  } else {
    thoaDieuKien = false;
  }

  // c2
  //   thoaDieuKien = soSanhThoaManDieuKien(giaTriA, giaTriB);

  console.log('thoaDieuKien: ', thoaDieuKien);
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
