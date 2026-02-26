window.addEventListener("load", () => {

  // HERO ENTRY
  const hero = document.querySelector(".hero-content");
  hero.style.opacity = "0";
  hero.style.transform = "translateY(50px)";

  setTimeout(() => {
    hero.style.transition = "all 1s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 300);

});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// SCROLL REVEAL
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });
});
