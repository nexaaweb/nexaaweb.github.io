window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-content");
  hero.style.opacity = "0";
  hero.style.transform = "translateY(50px)";

  setTimeout(() => {
    hero.style.transition = "all 1s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 300);
});
