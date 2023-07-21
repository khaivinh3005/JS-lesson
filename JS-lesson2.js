// cộng : +
// trừ  : -
// chia : /
// nhân : *
// thương: %
/**
 * a++ = a + 1
 * a-- = a - 1
 * ++
 * a+=1 với a = a + 1 như nhau;
 * a*= 2 với a = a * 2 như nhau;
 */

var a = 2;
var sum1 = a++; // tính rồi là 3, nhưng xuất hiện là 2;
var sum2 = a++; // tinhs rồi là 4, hiện ra bằng 3;
var sum3 = a++; // tính rồi là 5, hiện ra bằng 4;

// bài 1
/**
 * Cạnh ab và cạnh ac cho trước
 * Tìm bc
 *
 *
 * công thức sau khi gg: bc^2 = ab^2 + ac^2
 * => bc = căn bậc 2 của ((ab^2) + (ac^2))
 *
 * viết code:
 * bước 1: đầu vào có ab vs ac
 * var ab = 2;
 * var ac = 4;
 *
 * bước 2: áp dụng công thức
 *
 *
 * bước 3: đầu ra là tính bc
 *
 */

var a = 123;

var hangTram = Math.floor(a / 100);
var hangChuc = Math.floor((a % 100) / 10);
var hangDonVi = Math.floor(a % 10);
var total = hangTram + hangChuc + hangDonVi;
console.log(total);
