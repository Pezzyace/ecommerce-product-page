const addItem = document.getElementById('add-btn');
const minusItem = document.getElementById('minus-btn');
const cartQuantity = document.getElementById('cartQuantity');


let currentImage = 0;
const images = document.querySelectorAll('slider-img');
const thumbnails = document.querySelectorAll('thumbnail');

function showImage(index) {
  images[currentImage].style.display = 'none';
  thumbnails[currentImage].classList.remove('active');
  currentImage = index;
  images[currentImage].style.display = 'block';
  thumbnails[currentImage].classList.add('active');
}

function prevImage() {
  const prevIndex = (currentImage - 1 + images.length) % images.length;
  showImage(prevIndex);
}

function nextImage() {
  const nextIndex = (currentImage + 1) % images.length;
  showImage(nextIndex);
}


addItem.addEventListener("click", () => {
  cartQuantity++;
})

minusItem.addEventListener("click", () => {
  cartQuantity--;
})