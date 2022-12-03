function getListFavorite() {
  let listFavorite = JSON.parse(localStorage.getItem("listFavorite") || "[]");
  var favoriteList = document.getElementById("card");
  // Hiển thị các card đổ từ dữ liệu
  let data = "";
  for (var i = 0; i < listFavorite.length; i++) {
    let item = `<div class="card-head"><img src="${listFavorite[i].image}"></div>
    <div class="card-body">
      <div class="product-desc">
        <span class="product-title">${listFavorite[i].nameProduct}</span>
      </div>
      <div class="product-properties">
        <span class="product-price"><b>${listFavorite[i].price}</b> VND</span>
      </div>
    </div>`;
    data += item;
  }
  console.log(favoriteList);
  favoriteList.innerHTML = data;
}
getListFavorite();
