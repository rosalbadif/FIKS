var windowWidth = window.innerWidth;
var cont=0;

var horizontalLength = document.querySelector(".element-wrapper").scrollWidth;
console.log(horizontalLength)

var distFromTop = document.querySelector(".horizontal-section").offsetTop;

var scrollDistance = distFromTop + horizontalLength - windowWidth;

document.querySelector(".horizontal-section").style.height = horizontalLength + "px";

window.onscroll=function() {
    var scrollTop = window.pageYOffset;
    if(scrollTop >=distFromTop && scrollTop <=scrollDistance) {
        document.querySelector (".element-wrapper").style.transform="translateX(-"+(scrollTop - distFromTop)+"px)";
    }
}

function openNav() {
    cont++;
    if(cont%2==0){
        document.getElementById("nav").style.right = "-100%";
        // document.getElementById("scrittemenù1").style.opacity = 0;
        // document.getElementById("scrittemenù2").style.opacity = 0;
    }else{
        document.getElementById("nav").style.right = "0";
        // document.getElementById("scrittemenù1").style.opacity = 100;
        // document.getElementById("scrittemenù2").style.opacity = 100;
    }
}