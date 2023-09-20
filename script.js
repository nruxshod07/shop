let cart = [];

let products = document.querySelector(".products");
let show_first_five = document.querySelector(".show_first_five");
let show_all = document.querySelector(".show_all");
let totalView = document.querySelector("#total");
let scrollable = document.querySelector(".scrollable");

function reload(data, place) {
  place.innerHTML = "";

  for (let item of data) {
    let product = document.createElement("div"),
      image = document.createElement("div"),
      img = document.createElement("img"),
      product_descr = document.createElement("div"),
      product_descr_title = document.createElement("div"),
      txt = document.createElement("p"),
      rating = document.createElement("div"),
      price = document.createElement("div"),
      price_span_$ = document.createElement("span"),
      price_span = document.createElement("span"),
      rate = document.createElement("div"),
      rate_span_star = document.createElement("span"),
      rate_span = document.createElement("span"),
      count = document.createElement("div"),
      count_span_box = document.createElement("span"),
      count_span = document.createElement("span"),
      btn_favorite = document.createElement("div");

    product.classList.add("product", "grid-box");
    image.classList.add("image");
    product_descr.classList.add("product-descr");
    product_descr_title.classList.add("product-descr-title");
    txt.classList.add("txt");
    rating.classList.add("rating");
    price.classList.add("price");
    price_span_$.classList.add("material-symbols-outlined");
    rate_span_star.classList.add("material-symbols-outlined");
    count_span_box.classList.add("material-symbols-outlined");
    btn_favorite.classList.add("favorite");

    img.src = item.image;
    img.alt = "image";

    product_descr_title.innerHTML =
      item.title.length >= 20 ? item.title.slice(0, 20) : item.title;
    txt.innerHTML =
      item.description.length >= 100
        ? item.description.slice(0, 150)
        : item.description;
    price_span_$.innerHTML = "attach_money";
    rate_span_star.innerHTML = "star";
    count_span_box.innerHTML = "inventory_2";
    price_span.innerHTML = item.price;
    rate_span.innerHTML = item.rating.rate;
    count_span.innerHTML = item.rating.count;
    btn_favorite.innerHTML = "В избранное";

    product.append(image);
    product.append(product_descr);
    image.append(img);
    product_descr.append(product_descr_title);
    product_descr.append(txt);
    product_descr.append(rating);
    rating.append(price);
    price.append(price_span_$);
    price.append(price_span);
    rating.append(rate);
    rate.append(rate_span_star);
    rate.append(rate_span);
    rating.append(count);
    count.append(count_span_box);
    count.append(count_span);
    product_descr.append(btn_favorite);
    place.append(product);
    let discount = 20;
    btn_favorite.onclick = () => {
      if (cart.includes(item.id)) {
        // delete
        cart = cart.filter((id) => id !== item.id);
        btn_favorite.classList.remove("fav_act");
        btn_favorite.innerHTML = "В избранное";
        console.log(item);
      } else {
        CartReload();
      }

      totalView.innerHTML = cart.length;
      function CartReload() {
        cart.push(item.id);

        btn_favorite.classList.add("fav_act");
        btn_favorite.innerHTML = "Добавлено";
        let curr = 1;
        let cartItem = document.createElement("div");
        let cartItemTitleImg = document.createElement("img");
        let cartCheckbox = document.createElement("input");
        let cartItemTitleDiv = document.createElement("div");
        let cartItemTitle = document.createElement("h1");
        let cartItemDesc = document.createElement("p");
        let cartItemPriceDiv = document.createElement("div");
        let cartItemDelete = document.createElement("div");
        let cartItemPrice = document.createElement("div");
        let cartItemNewPrice = document.createElement("p");
        let cartItemOldPrice = document.createElement("p");
        let cartItemBottom = document.createElement("div");
        let counter = document.createElement("div");
        let count = document.createElement("div");
        let plus = document.createElement("img");
        let minus = document.createElement("img");
        let deleteImg = document.createElement("img");
        let deleteText = document.createElement("p");

        cartItemDelete.classList.add("cartItemDelete");
        counter.classList.add("counter");
        cartItem.classList.add("cartItem");
        cartItemTitleImg.classList.add("cartItemTitleImg");
        cartCheckbox.classList.add("cartCheckbox");
        cartItemTitleDiv.classList.add("cartItemTitle");
        cartItemPriceDiv.classList.add("cartItemAndPrice");
        cartItemBottom.classList.add("cartItemBottom");
        plus.classList.add("plus");
        minus.classList.add("minus");
        cartItemOldPrice.classList.add("cartItemOldPrice");

        plus.src = "img/4115237_add_plus_icon.png";
        minus.src = "img/4115236_delete_min_minus_icon.png";
        cartItemTitleImg.src = item.image;
        cartCheckbox.type = "checkbox";
        cartItemTitle.innerHTML = item.title;
        cartItemDesc.innerHTML = "Продавец:...";
        discount = Math.round((item.price / 100) * 80);
        cartItemNewPrice.innerHTML = discount;
        cartItemOldPrice.innerHTML = item.price;
        plus.innerHTML = "plus";
        minus.innerHTML = "minus";
        count.innerHTML = curr;
        deleteText.innerHTML = "Удалить";
        deleteImg.src = "img/185090_delete_garbage_icon.png";

        cartItemDelete.prepend(deleteImg, deleteText);
        counter.prepend(plus, count, minus);
        cartItemBottom.prepend(cartItemDesc, counter);
        cartItemPrice.prepend(cartItemNewPrice, cartItemOldPrice);
        cartItemPriceDiv.prepend(cartItemDelete, cartItemPrice);
        cartItemTitleDiv.prepend(cartItemTitle, cartItemBottom);
        cartItem.prepend(
          cartCheckbox,
          cartItemTitleImg,
          cartItemTitleDiv,
          cartItemPriceDiv
        );

        plus.onclick = () => {
          +count.innerHTML++;
          if (count.innerHTML >= "5") {
            count.innerHTML = "5";
          }
          cartItemNewPrice.innerHTML = discount * +count.innerHTML;
          cartItemOldPrice.innerHTML =
            Math.round(item.price) * +count.innerHTML;
        };
        minus.onclick = () => {
          +count.innerHTML--;
          if (+count.innerHTML <= "0") {
            count.innerHTML = "0";
            cartItemNewPrice.innerHTML = "0";
            cartItemOldPrice.innerHTML = "0 ";
          } else {
            cartItemNewPrice.innerHTML = +cartItemNewPrice.innerHTML - discount;
            cartItemOldPrice.innerHTML =
              +cartItemOldPrice.innerHTML - Math.round(item.price);
          }
          console.log(discount);
        };
        cartItemDelete.onclick = () => {
          cartItem.remove();
          cart = cart.filter((id) => id !== item.id);
          btn_favorite.classList.remove("fav_act");
          btn_favorite.innerHTML = "В избранное";
          totalView.innerHTML = +totalView.innerHTML - 1;
        };
        scrollable.prepend(cartItem);
      }
    };
  }
}
reload(arr, products);

show_first_five.onclick = () => {
  let sliced = arr.slice(0, 5);

  reload(sliced, products);
};

show_all.onclick = () => {
  reload(arr, products);
};
