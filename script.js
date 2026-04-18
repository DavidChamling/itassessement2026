let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(direction) {
    showSlide(slideIndex + direction);
}

setInterval(() => {
    changeSlide(1);
}, 5000);

// Initialize
if (slides.length > 0) {
    showSlide(0);
}