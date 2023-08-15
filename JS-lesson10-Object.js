// Object
function hienThiThongTin() {
  var maSinhVien = '123';
  var tenSinhVien = 'Wibu';
  var loaiSinhVien = 'Rich';
  var diemToan = 9;
  var diemVan = 8;

  var doiTuong = {
    maSV: '',
    tenSV: '',
    loaiSV: '',
    dToan: '',
    dVan: '',
    dTb: '',
    xepLoai: '',
  };

  doiTuong.maSV = maSinhVien;
  doiTuong.tenSV = tenSinhVien;
  doiTuong.loaiSV = loaiSinhVien;
  doiTuong.dToan = diemToan;
  doiTuong.dVan = diemVan;

  doiTuong.dTb = '';
  doiTuong.dTb = tinhDiemTrungBinh(diemToan, diemVan);
  doiTuong.xepLoai = xepLoaiSinhVien(doiTuong.dTb);

  function tinhDiemTrungBinh(diemToan, diemVan) {
    var diemTB = (diemToan + diemVan) / 2;
    return diemTB;
  }

  function xepLoaiSinhVien(diemTrungBinhSinhVien) {
    var xepLoai;
    if (diemTrungBinhSinhVien >= 8.5) {
      xepLoai = 'Giỏi';
    } else if (diemTrungBinhSinhVien < 8.5 && diemTrungBinhSinhVien >= 6.5) {
      xepLoai = 'KhÁ';
    } else {
      xepLoai = 'Trung Bình';
    }
    return xepLoai;
  }
}

hienThiThongTin();
