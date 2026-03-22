// ============================
// HEADER & FOOTER LOAD
// ============================

document.addEventListener("DOMContentLoaded", function(){

fetch("components/header.html")
.then(res => res.text())
.then(data => {
document.getElementById("header").innerHTML = data;
});

fetch("components/footer.html")
.then(res => res.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});

});


// ============================
// DATE UPDATE
// ============================

function updateDate(){

const options = {
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
}

const today = new Date().toLocaleDateString("en-US", options)

const dateElement = document.getElementById("date")

if(dateElement){
dateElement.innerText = today
}

}

updateDate()


// ============================
// STATS COUNTER
// ============================

const counters = document.querySelectorAll(".stat-number")

counters.forEach(counter => {

counter.innerText = "0"

const updateCounter = () => {

const target = +counter.getAttribute("data-target")
const count = +counter.innerText
const speed = 200
const increment = target / speed

if(count < target){

counter.innerText = Math.ceil(count + increment)

setTimeout(updateCounter, 10)

}else{

counter.innerText = target + "+"

}

}

updateCounter()

})


// ============================
// FADE UP ANIMATION
// ============================

const faders = document.querySelectorAll(".fade-up")

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(!entry.isIntersecting) return

entry.target.classList.add("appear")

})

}, {threshold:0.2})

faders.forEach(el => observer.observe(el))

// ============================
// CURSOR GLOW EFFECT
// ============================

const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});


// ============================
// MAGNETIC BUTTON EFFECT
// ============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
btn.addEventListener("mousemove", e => {
const rect = btn.getBoundingClientRect();
const x = e.clientX - rect.left - rect.width / 2;
const y = e.clientY - rect.top - rect.height / 2;

btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
});

btn.addEventListener("mouseleave", () => {
btn.style.transform = "translate(0,0)";
});
});


// ============================
// 3D CARD TILT EFFECT
// ============================

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
card.addEventListener("mousemove", e => {
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateX = -(y / rect.height - 0.5) * 10;
const rotateY = (x / rect.width - 0.5) * 10;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

card.addEventListener("mouseleave", () => {
card.style.transform = "rotateX(0) rotateY(0) scale(1)";
});
});

// LOADER
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

// SCROLL BAR
window.onscroll=()=>{
let winScroll=document.body.scrollTop||document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
let scrolled=(winScroll/height)*100;
document.getElementById("progress-bar").style.width=scrolled+"%";
};
