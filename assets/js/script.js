console.log("NexaaWeb website loaded");

function updateDate(){
const options={
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
};

const today=new Date().toLocaleDateString("en-US",options);

document.getElementById("date").textContent=today;
}

updateDate();
