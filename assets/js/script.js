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
