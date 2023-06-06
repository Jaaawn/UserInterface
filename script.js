
// JavaScript for "added to cart" popup---------------
const buyButton = document.querySelector('.buy-button');
const popup = document.getElementById('popup');

// Open the popup when the buy button is clicked
buyButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Close the popup when clicking outside the popup content
popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

// JavaScript for "Quantity" (cart) ----------------
function updateQuantity(change) {
  const quantityElement = document.getElementById('quantity');
  let currentQuantity = parseInt(quantityElement.textContent, 10);
  currentQuantity += change;

  if (currentQuantity < 1) {
    currentQuantity = 1;
  }

  quantityElement.textContent = currentQuantity;
}



// JavaScript for "slideshow" (homepage) ----------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


