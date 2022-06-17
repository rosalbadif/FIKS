

// gsap.to(".img" , {
//     scrollTrigger: {
//         trigger: ".img",
//         start: "center bottom",
       
//     },
//     x:300
// })

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero__container",
        start:"bottom center"
    }
})

tl.from(".img", {x: -400, opacity:0, duration:1}, )
    .from(".feature", {y:400, opacity:0, duration:1}, )
    .from(".description", {y:400, opacity:0, duration:0.5},)
