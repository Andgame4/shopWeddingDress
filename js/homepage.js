// tạo lớp sản phẩm
function Product(image, nameProduct, price, quantity) {
  this.image = image;
  this.nameProduct = nameProduct;
  this.price = price;
  this.quantity = quantity;
}

// Khởi tạo các đối tượng sản phẩm
let newProduct1 = new Product(
  "/assets/2c5ce8a7be6a67343e7b.jpg",
  "Váy cưới gucci1",
  2600000,
  1
);
let newProduct2 = new Product(
  "/assets/2c5ce8a7be6a67343e7b.jpg",
  "Váy cưới gucci2",
  2600000,
  1
);
let newProduct3 = new Product(
  "/assets/2c5ce8a7be6a67343e7b.jpg",
  "Váy cưới gucci3",
  2600000,
  1
);
let newProduct4 = new Product(
  "/assets/2c5ce8a7be6a67343e7b.jpg",
  "Váy cưới gucci4",
  2600000,
  1
);
let newProduct5 = new Product(
  "/assets/2c5ce8a7be6a67343e7b.jpg",
  "Váy cưới gucci5",
  2600000,
  1
);
let newProduct6 = new Product(
  "/assets/2c5ce8a7be6a67343e7b.jpg",
  "Váy cưới gucci6",
  2600000,
  1
);
let newProduct7 = new Product(
  "/assets/2c5ce8a7be6a67343e7b.jpg",
  "Váy cưới gucci7",
  2600000,
  1
);
let newProduct8 = new Product(
  "/assets/2c5ce8a7be6a67343e7b.jpg",
  "Váy cưới gucci8",
  2600000,
  1
);
// push các sản phẩm vảo mảng rồi lưu xuống localStorage
var arrayProduct = [];
arrayProduct.push(newProduct1);
arrayProduct.push(newProduct2);
arrayProduct.push(newProduct3);
arrayProduct.push(newProduct4);
arrayProduct.push(newProduct5);
arrayProduct.push(newProduct6);
arrayProduct.push(newProduct7);
arrayProduct.push(newProduct8);

if (typeof Storage !== "undefined") {
  window.localStorage.setItem("listProduct", JSON.stringify(arrayProduct));
} else {
  alert("Trình duyệt của bạn không hỗ trợ Storage");
}
// Lấy danh sách listProduct dưới localStorage
function getListProduct() {
  let listProduct = JSON.parse(localStorage.getItem("listProduct") || "[]");
  var productList = document.getElementById("listProduct");
  // Hiển thị các card đổ từ dữ liệu
  let data = "";
  for (var i = 0; i < listProduct.length; i++) {
    let item = ` <div class="productItem"> 
      <div> <img src="${listProduct[i].image}"></div>
          <div class="nameProduct"><p>${listProduct[i].nameProduct}</p></div>
          <div class="priceProduct"><div><p>đ${listProduct[i].price}</p></div> <div class="iconDetail"><i class="fa-solid fa-cart-shopping iconCart" onClick="addProductCart(${i})"></i><i class="fa-regular fa-heart favorite" onClick="addFavorite(${i})"></i></div></div>
          </div>`;
    data += item;
  }
  productList.innerHTML = data;
}
getListProduct();

// Thêm vào danh sách cart
var arrayCart = [];
var count = 0;
function addProductCart(indexProduct) {
  // lấy lisCart dưới localStorage
  var listPriceCart = JSON.parse(
    window.localStorage.getItem("listCart") || "[]"
  );
  // logic thêm vào mảng nếu mảng tồn tại
  if (listPriceCart.length > 0) {
    listPriceCart.push(arrayProduct[indexProduct]);
    window.localStorage.setItem("listCart", JSON.stringify(listPriceCart));
    alert("Thêm thành công giỏ hàng !");
  } else {
    // logic thêm vào mảng nếu mảng chưa tồn tại
    arrayCart.push(arrayProduct[indexProduct]);
    window.localStorage.setItem("listCart", JSON.stringify(arrayCart));
    alert("Thêm thành công giỏ hàng !");
  }
}

// thêm vào favorite
var arrayFavorite = [];
function addFavorite(index) {
  // đổi màu trái tim
  var favorite = document.getElementsByClassName("favorite");
  favorite[index].style.color = "red";
  // lưu vào mảng favorite xuống localStorage
  var listProduct = JSON.parse(
    window.localStorage.getItem("listProduct") || "[]"
  );

  // lấy lisCart dưới localStorage
  var listFavorite = JSON.parse(
    window.localStorage.getItem("listFavorite") || "[]"
  );
  // logic thêm vào mảng nếu mảng tồn tại
  if (listFavorite.length > 0) {
    listFavorite.push(listProduct[index]);
    window.localStorage.setItem("listFavorite", JSON.stringify(listFavorite));
    alert("Thêm thành công giỏ hàng !");
  } else {
    // logic thêm vào mảng nếu mảng chưa tồn tại
    arrayFavorite.push(listProduct[index]);
    window.localStorage.setItem("listFavorite", JSON.stringify(arrayFavorite));
    alert("Thêm thành công vào yêu thích !");
  }
}
