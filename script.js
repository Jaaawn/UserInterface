let slideIndex = 0;

function shiftSlide(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    slideIndex = (slideIndex + n) % slides.length;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    shiftSlide(0);
});