document.addEventListener('DOMContentLoaded', () => {
    
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    function showSlide(index) {
        
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
});