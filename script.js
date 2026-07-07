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
