/* HEADER LOAD */

fetch("components/header.html")
.then(res => res.text())
.then(data => {
document.getElementById("header").innerHTML = data;
});

/* FOOTER LOAD */

fetch("components/footer.html")
.then(res => res.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});
