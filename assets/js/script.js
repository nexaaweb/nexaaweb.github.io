// TESTIMONIAL SLIDER

const track = document.querySelector(".testimonials-track");
const cards = document.querySelectorAll(".testimonial-card");

let index = 0;

function updateSlider(){

if(!track) return;

const cardWidth = cards[0].offsetWidth + 30;

track.style.transform = `translateX(-${index * cardWidth}px)`;

}

setInterval(()=>{

if(index < cards.length-3){
index++;
}else{
index=0;
}

updateSlider();

},4000);


// PORTFOLIO CENTER HIGHLIGHT

const portfolioCards=document.querySelectorAll(".portfolio-card");

let portfolioIndex=1;

function updatePortfolio(){

portfolioCards.forEach(card=>card.classList.remove("active"));

portfolioCards[portfolioIndex].classList.add("active");

portfolioIndex++;

if(portfolioIndex>=portfolioCards.length){
portfolioIndex=0;
}

}

setInterval(updatePortfolio,3000);


// SCROLL TOP

const scrollBtn=document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){
scrollBtn.style.display="block";
}else{
scrollBtn.style.display="none";
}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});


// CHATBOT

const chatBtn=document.querySelector(".chatbot-button");
const chatBox=document.querySelector(".chatbot-box");
const chatClose=document.querySelector(".chat-close");

if(chatBtn){
chatBtn.onclick=()=>{chatBox.style.display="flex";}
}

if(chatClose){
chatClose.onclick=()=>{chatBox.style.display="none";}
}


// HEADER DATE

const dateElement=document.getElementById("headerDate");

const today=new Date();

const options={
weekday:"long",
day:"numeric",
month:"short",
year:"numeric"
};

dateElement.innerText=today.toLocaleDateString("en-US",options);
