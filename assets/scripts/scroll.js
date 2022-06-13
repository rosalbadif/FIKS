

// gsap.to(".img" , {
//     scrollTrigger: {
//         trigger: ".img",
//         start: "center bottom",
       
//     },
//     x:300
// })

let tl = gsap.timeline({
    scrolltrigger: {
        trigger: ".hero-container",
        start:"bottom top"
    }
})

tl.from(".img", {x: -400, opacity:0, duration:1.5}, )
    .from(".feature", {y:400, opacity:0, duration:1},"-=1" )
    .from(".description", {y:400, opacity:0, duration:1},"-=1" )
