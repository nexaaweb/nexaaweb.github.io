// ==========================
// MOBILE MENU TOGGLE
// ==========================

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}



// ==========================
// TESTIMONIALS SLIDER
// ==========================

const track = document.querySelector(".testimonials-track");
const cards = document.querySelectorAll(".testimonial-card");
const nextBtn = document.querySelector(".testimonial-arrow.right");
const prevBtn = document.querySelector(".testimonial-arrow.left");

let index = 0;

function updateSlider() {

  if (!track || cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth + 30;

  track.style.transform = `translateX(-${index * cardWidth}px)`;

}

// NEXT BUTTON
if (nextBtn) {
  nextBtn.addEventListener("click", () => {

    if (index < cards.length - 3) {
      index++;
      updateSlider();
    }

  });
}

// PREVIOUS BUTTON
if (prevBtn) {
  prevBtn.addEventListener("click", () => {

    if (index > 0) {
      index--;
      updateSlider();
    }

  });
}


// AUTO SLIDE

setInterval(() => {

  if (!track || cards.length === 0) return;

  if (index < cards.length - 3) {
    index++;
  } else {
    index = 0;
  }

  updateSlider();

}, 4000);
// SCROLL TO TOP BUTTON

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

if (window.scrollY > 400) {
scrollBtn.style.display = "block";
} else {
scrollBtn.style.display = "none";
}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});
// CHATBOT

const chatBtn = document.querySelector(".chatbot-button");
const chatBox = document.querySelector(".chatbot-box");
const chatClose = document.querySelector(".chat-close");

chatBtn.addEventListener("click", () => {

chatBox.style.display = "flex";

});

chatClose.addEventListener("click", () => {

chatBox.style.display = "none";

});

// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / 200;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter,10);

}else{

counter.innerText = target;

}

};

updateCounter();

});

// HEADER DATE

const dateElement = document.getElementById("headerDate");

const today = new Date();

const options = {
weekday: "long",
day: "numeric",
month: "short",
year: "numeric"
};

const formattedDate = today.toLocaleDateString("en-US", options);

dateElement.innerText = formattedDate;
