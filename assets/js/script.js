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

<script>
  const faders = document.querySelectorAll('.fade-up');
  const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
      });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
</script>

<script>

const faders=document.querySelectorAll('.fade-up');

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(!entry.isIntersecting)return;
entry.target.classList.add('appear');
});
},{threshold:0.2});

faders.forEach(el=>observer.observe(el));

</script>
