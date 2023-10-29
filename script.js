const productImages = document.querySelectorAll("img-preview");
const productImageSlide = document.getElementById("image-slider");
const addItem = document.getElementById('add-btn');
const minusItem = document.getElementById('minus-btn');
const cartQuantity = document.getElementById('cartQuantity');


let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
      console.log("clicked");
        productImages[activeImageSlide].classList.remove('opacity');
        item.classList.add('opacity');
        productImageSlide.style.backgroundImage = `url('/images/image-product-2.jpg')`;
        activeImageSlide = i;
    })
})



addItem.addEventlistener("click", () => {
  cartQuantity++;
})

minusItem.addEventlistener("click", () => {
  cartQuantity--;
})