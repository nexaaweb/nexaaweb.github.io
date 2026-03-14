fetch("components/header.html")
.then(res=>res.text())
.then(data=>{
document.getElementById("header").innerHTML=data;
})

fetch("components/footer.html")
.then(res=>res.text())
.then(data=>{
document.getElementById("footer").innerHTML=data;
})


function updateDate(){

const options={
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
}

const today=new Date().toLocaleDateString("en-US",options)

document.getElementById("date").innerText=today

}

updateDate()

// ============================
// SECTION 3 – KEY STATS COUNTER
// ============================

const counters = document.querySelectorAll(".stat-number");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const speed = 200;

const increment = target / speed;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter,10);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

});
