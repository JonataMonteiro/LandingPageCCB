document.addEventListener('DOMContentLoaded', () => {

  // ===== CARROSSEL (Lógica de Classes - Fade) =====
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  // Selecionamos a área inteira para detectar o toque, 
  // pois o track pode ficar sem altura se os slides sumirem momentaneamente
  const carouselArea = document.querySelector('.container-objetivo-carousel');
  
  let currentIndex = 0; 
  let touchStartX = 0;
  let touchEndX = 0;

  function showSlide(index) {
    // 1. Loop Infinito
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    // 2. Limpa TUDO antes de ativar
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // 3. Ativa apenas o atual
    if (slides[currentIndex]) slides[currentIndex].classList.add('active');
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  // Evento de clique nas bolinhas
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // ===== SWIPE (TOUCH) =====
  if (carouselArea) {
    carouselArea.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselArea.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const threshold = 50; // Mínimo em pixels para contar como swipe

    // Deslizar para ESQUERDA (Próximo)
    if (touchStartX - touchEndX > threshold) {
      showSlide(currentIndex + 1);
    }
    
    // Deslizar para DIREITA (Anterior)
    if (touchEndX - touchStartX > threshold) {
      showSlide(currentIndex - 1);
    }
  }

  // ===== MENU HAMBURGUER (Mantido) =====
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }
});