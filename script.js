


var tl = gsap.timeline();
tl.to(".loading", {
    opacity: 0,
    delay: 2.5,
    duration: 1
 })
.to(".loader", {
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut"
})
.to(".loader", {
    y: "-100%",
    duration: 1,
    ease: "Expo.easeInOut"
}, "up")
.to(".svgwaala", {
    opacity: 1,
    delay: -1.7,
    ease: "Expo.easeInOut"
}, "donut")
.to("#shoe", {
    opacity: 1,
    scale: 2.2,
    delay: -1.4,
    ease: "Expo.easeInOut",
    rotationY: "+=15",
    duration: 3,
    rotationX: "+=15",
    rotationZ: "+=15"
}, "up");



var tl2 = gsap.timeline();

document.querySelectorAll("#explore h1").forEach(function (elem) {
    elem.addEventListener("click", function () {
        tl2
        .to("#shoe", {
            width: "80vw",
            top: "-10%",
            rotate: "180deg",
            ease: "power3.out",  
            duration: 1.5,      
            opacity: 0,
            delay: 0.2          
        })
            .to(".svgwaala", {
                opacity: 0
            });
            
    });
});


function redirectToMain() {
    window.location.href = "main.html"; 
}


