var windowWidth = window.innerWidth;
var cont=0;

// gsap.registerPlugin(ScrollTrigger);

const nav=document.querySelector("nav");

//horizontal scroll
var horizontalLength = document.querySelector(".element-wrapper").scrollWidth;
// console.log(horizontalLength)

var distFromTop = document.querySelector(".horizontal-section").offsetTop;

var scrollDistance = distFromTop + horizontalLength - windowWidth;

document.querySelector(".horizontal-section").style.height = horizontalLength + "px";

document.getElementById("nav").style.height = window.innerHeight;

window.onscroll=function() {
    var scrollTop = window.pageYOffset;
    if(scrollTop >=distFromTop && scrollTop <=scrollDistance) {
        document.querySelector (".element-wrapper").style.transform="translateX(-"+(scrollTop - distFromTop)+"px)";
    }
}

//hamburger menu
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
    // console.log(window.scrollY)
    if(window.scrollY >=750){
        nav.classList.add("active_nav")
    }
   
    else{
        nav.classList.remove("active_nav")
    }
})

//remove header on scroll
window.addEventListener("scroll", () => {
   
    if(window.scrollY >=document.querySelector(".overview").offsetTop){
        nav.classList.remove("active_nav")
    }
   
    if (window.scrollY >=document.querySelector(".wrapper").offsetTop){
        nav.classList.add("active_nav")
    }

    if (window.scrollY >=document.querySelector(".switcher").offsetTop){
        nav.classList.remove("active_nav")
    }
    
})



