function updateDate(){

const options = { 
weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric'
};

const today = new Date().toLocaleDateString('en-US', options);

document.getElementById("date").innerHTML = today;

}

updateDate();
