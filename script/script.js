document.addEventListener('DOMContentLoaded', () => {

  // ===== CARROSSEL =====
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (slides[index]) slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // ===== MENU HAMBURGUER =====
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
  });

  // 👉 FECHAR MENU AO CLICAR EM UM LINK
  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
    });
  });   

});
