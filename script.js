const cards = document.querySelectorAll(".news-card");

let index = 0;

setInterval(() => {

cards[index].classList.remove("active");

index++;

if(index >= cards.length){
index = 0;
}

cards[index].classList.add("active");

},3000);
