// Mobile Menu Toggle
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// MOBILE MENU TOGGLE

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



// TESTIMONIALS AUTO SLIDER

let testimonials = document.querySelectorAll(".testimonial-card");
let index = 0;

function showTestimonial() {

  testimonials.forEach(card => {
    card.classList.remove("active");
  });

  index++;

  if (index >= testimonials.length) {
    index = 0;
  }

  testimonials[index].classList.add("active");

}

setInterval(showTestimonial, 4000);
