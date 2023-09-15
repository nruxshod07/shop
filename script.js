let box = document.createElement("div");
let container = document.querySelector(".container");
let showFive = document.querySelector(".showFive");
let showAll = document.querySelector(".showAll");
let modal = document.querySelector('.modal')
let arr = [];
let icons = {};

box.classList.add("box");

for (let i = 0; i <= 6; i++) {
  let item = document.createElement("div");
  let imgBox = document.createElement("div");
  let img = document.createElement("img");
  let itemTitle = document.createElement("h1");
  let info = document.createElement("p");
  let iconBox = document.createElement("div");
  let button = document.createElement("button");

  imgBox.classList.add("imgBox");
  item.classList.add("item");
  img.classList.add("itemImg");
  //   itemTitle.classList.add()
  info.classList.add("itemInfo");
  iconBox.classList.add("iconBox");

  button.innerHTML = "В избранное";
  itemTitle.innerHTML = "MEN'S CLOTHING (120)";
  info.innerHTML =
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday";

  for (let k = 0; k <= 2; k++) {
    let itemIcon = document.createElement("div");
    let icon = document.createElement("img");
    let num = document.createElement("p");

    itemIcon.classList.add("itemIconBox");
    icon.classList.add("icon");
    num.classList.add("num");
  }

  arr.push(item);
  box.prepend(item);
  item.append(imgBox, itemTitle, info, iconBox, button);
  imgBox.prepend(img);
  img.src = "img/81fPKd-2AYL 1.png";

  showFive.onclick = () => {
    arr[6].style.display = "none";
    arr[5].style.display = "none";
  };
  showAll.onclick = () => {
    arr[6].style.display = "flex";
    arr[5].style.display = "flex";
  };
}
container.append(box);
