// DOM => Document Object Model

// B1: khai thẻ và DOM thẻ HTML có id : ele-h1
var theH1 = document.getElementById('ele-h1');

// B2: Kiểm tra tên biến vừa DOM có hiển thị chưa
console.log('the h1 : ', theH1);

// Option 1 : lấy nội dung của thẻ vừa mới DOM
console.log('content : ', theH1.textContent);

// Option 2: lấy color của thẻ vừa mới DOM
console.log('color : ', theH1.style.color);

// --------------------------------------------

// Option 3: Trường muốn DOM thẻ h2
// B1: khai thẻ và DOM thẻ HTML có id : ele-h2
var theH2 = document.getElementById('ele-h2');

// B2: Kiểm tra tên biến vừa DOM có hiển thị chưa
console.log('the h2 : ', theH2);

// Case 1: Lấy content của thẻ vừa mới DOM ở h1 cho thẻ vừa DOM của h2
// B1: Tạo 1 biến để lấy content từ thẻ mới DOM ở h1 và hiển thị;
var textContentOfEleh1 = theH1.textContent;
console.log('textContentOfEleh1: ', textContentOfEleh1);

// B2: Sau khi lấy được content của thẻ DOM h1 và sau đó sẽ thực hiện update cho thẻ DOM h2;
theH2.textContent = textContentOfEleh1;

// Case: Lấy color của thẻ vừa mới DOM ở h1 cho thẻ vừa DOM của h2
// B1: Tạo 1 biến để lấy color từ thẻ mới DOM ở h1 và hiển thị;
var colorOfEleH1 = theH1.style.color;

// B2: Sau khi lấy được color của thẻ DOM h1 và sau đó sẽ thực hiện update cho thẻ DOM h2;
theH2.style.color = colorOfEleH1;
