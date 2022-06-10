//hamburger menu
var cont=0;
function openNav() {
    cont++;
    if(cont%2==0){
        document.getElementById("nav").style.right = "-100%";

    }else{
        document.getElementById("nav").style.right = "0";

    }
}

//change header color on scroll
window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    if(window.scrollY >=750){
        nav.classList.add("active_nav")
    }
   
    else{
        nav.classList.remove("active_nav")
    }
})

const card = document.querySelector("#card1");
card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

const card2 = document.querySelector("#card2");
card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped');
});

const card3 = document.querySelector("#card3");
card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped');
});

const card4 = document.querySelector("#card4");
card4.addEventListener("click", function (e) {
  card4.classList.toggle('is-flipped');
});

const card5 = document.querySelector("#card5");
card5.addEventListener("click", function (e) {
  card5.classList.toggle('is-flipped');
});
