let p1 = new Phone("Iphone", "Tím", "42 triệu", "ephone.jpg")
let p2 = new Phone("Iphone", "Xanh", "40 triệu", "ephonexanh.jpg")
let p3 = new Phone("Iphone", "Tím Hồng", "45 triệu", "ephonetimhong.jpg")
let p4 = new Phone("Iphone", "Đỏ", "46 triệu", "ephonedo.jpg")
let p5 = new Phone("Iphone", "Cam", "48 triệu", "ephonecam.jpg")
let p6 = new Phone("Iphone", "Gold", "41 triệu", "ephonecam.jpg")
let arr = [[p1, p2, p3], [p4, p5, p6]];

function display(arr) {
    let data = ""
    data += "<table>"
    for (let i = 0; i < arr.length; i++) {
        data += "<tr>"
        for (let j = 0; j < arr[i].length; j++) {
            data += `<td>
          <div class="all">
          <div class="image">
          <img src="${arr[i][j]._image}"></div>
          <div class="name">
          <span style="...">${arr[i][j]._name}</span></div>
          <div class="color"></div> 
          <span style="color: black">Màu: ${arr[i][j]._color}</span>
          <div class="price">
          <span style="color: black">Giá: ${arr[i][j]._price}</span></div>
          <div><button id="mua" onclick="buy()">Đặt hàng<i class="fa-solid fa-cart-shopping"></i></button></div>
          </div>
          </td>`
        }

        data += "</tr>"
    }
    data += "</table>"
    console.log(data)
    document.getElementById("manhinh").innerHTML = data
}

display(arr)
