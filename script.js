const plusItem = document.getElementById('add-btn');
const minusItem = document.getElementById('minus-btn');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileNav = document.getElementById('mobile-nav');
const cart = document.getElementById("cart");
const checkout = document.getElementById("checkout");
const checkoutCloseBtn = document.getElementById("checkout-close-btn");
const image = document.getElementById("image");
const amount = document.getElementById("amount");
const prevBtn = document.getElementById("prev-btn");
const prevBtnMod = document.getElementById("prev-btn-mod");
const nextBtn = document.getElementById("next-btn");
const closeModal = document.getElementById("close-modal");
const indicator = document.querySelector("#indicator");
const cartWrp = document.querySelector("#cart-wrp");
const cartEmpty = document.querySelector("#cart-empty");
const thumbMob = document.getElementById("thumbMob");
const thumbMobMod = document.getElementById("thumbMobMod");
const lightBox = document.getElementById("lightbox");
const addToCart = document.getElementById("add-to-cart");
const number = document.getElementById("number");
const totalSum = document.getElementById("total-sum");
const deleteBtn = document.getElementById("delete-btn");


let amountValue = 0;
let currentImg =  1;

indicator.style.display = "none";

function plus() {
  amountValue++;
  amount.innerText = amountValue;
}

function minus() {
  if (amountValue > 0) {
    amountValue--;
  }
  amount.innerText = amountValue;
}

function nextImg() {
  if (currentImg == 4) {
    currentImg == 1
  } else {
    currentImg++;
  }
  thumbMob.src=`./images/image-product-${currentImg}.jpg`;
}

prevBtn.addEventListener("click", () =>{
  if (currentImg == 1) {
    currentImg == 4
  } else {
    currentImg--;
  }
  thumbMob.src=`./images/image-product-${currentImg}.jpg`;
})

function nextImg() {
  if (currentImg == 4) {
    currentImg == 1
  } else {
    currentImg++;
  }
  thumbMobMod.src=`./images/image-product-${currentImg}.jpg`;
}

function prevImg() {
  if (currentImg == 1) {
    currentImg == 4
  } else {
    currentImg--;
  }
  thumbMobMod.src=`./images/image-product-${currentImg}.jpg`;
}
closeModal.addEventListener("click", () => {
  lightBox.style.display= "none";
})

image.addEventListener("click", () => {
  lightBox.style.display = "flex";
})

menuBtn.addEventListener("click", () => {
  mobileNav.style.display = 'flex';
})

closeBtn.addEventListener("click", () => {
  mobileNav.style.display = 'none';
})

cart.addEventListener("click", () => {
  checkout.style.display = 'flex';
})

checkoutCloseBtn.addEventListener("click", () => {
  checkout.style.display = 'none';
})

addToCart.addEventListener("click", () => {
  if (amountValue > 0) {
    const total = 125.00 * amountValue;

    cartEmpty.style.display = "none";
    cartWrp.style.display = "flex";
    indicator.style.display = "block";
    indicator.innerText = amountValue;
    number.innerText = amountValue;
    totalSum.innerText = "$" + total; 
  }
})

deleteBtn.addEventListener("click", () => {
  cartWrp.style.display = "none";
  cartEmpty.style.display = "flex";
  indicator.style.display = "none";
})

