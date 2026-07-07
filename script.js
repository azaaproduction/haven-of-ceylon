// HOC Hub JavaScript

console.log("HOC Hub Loaded Successfully");

document.addEventListener("DOMContentLoaded", () => {

    console.log("Website Ready");

});

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", function () {
    menu.classList.toggle("active");
});

const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

},5000);
