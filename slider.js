let slideIndex = 0;
let slides;
let slider;
let autoSlideInterval;

document.addEventListener('DOMContentLoaded', function() {
    slides = document.querySelectorAll('.slide');
    slider = document.querySelector('.slider');
    
    if (slides.length > 0) {
        if (slider) {
            slider.style.display = 'flex';
            slider.style.transition = 'transform 0.5s ease';
        }
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.minWidth = '100%';
            slides[i].style.boxSizing = 'border-box';
        }
        
        showSlide(0);
        startAutoSlide();
    }
});

function showSlide(index) {
    if (!slides || slides.length === 0) return;
    
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    
    if (slider) {
        slider.style.transform = 'translateX(-' + (slideIndex * 100) + '%)';
    }
}

function changeSlide(direction) {
    stopAutoSlide();
    showSlide(slideIndex + direction);
    startAutoSlide();
}

function startAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
    
    autoSlideInterval = setInterval(function() {
        changeSlide(1);
    }, 5000);
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}