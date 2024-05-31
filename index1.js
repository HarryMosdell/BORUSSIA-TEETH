
gsap.registerPlugin(ScrollTrigger);




gsap.from(".desktopIntroAppear", {

opacity:0,
duration: 4,
scrollTrigger: {
  trigger: ".desktopIntroAppear",
  toggleActions: "play none none reset"
}
});


gsap.from(".welcomeBounce", {
y:-500,
duration: 2,
ease: "bounce",
scrollTrigger: {
  trigger: ".welcomeBounce",
  toggleActions: "play none none reset"
}
});



gsap.from(".falicitiesDesktopAppear", {

opacity:0,
duration: 4,
stagger:1,
scrollTrigger: {
  trigger: ".falicitiesDesktopAppear",
  toggleActions: "play none none reset"
}
});



if (window.matchMedia("(max-width: 800px)").matches) {

    
gsap.from(".moveLeftMpbile", {
x:'-100vw',
ease: "bounce",
duration: 2.5,
scrollTrigger: {
  trigger: ".moveLeftMpbile",
  toggleActions: "play none none reset"
}
});




}


if (window.matchMedia("(max-width: 800px)").matches) {
gsap.from(".moveRightMpbile", {

x:'100vw',
ease: "bounce",
duration: 2.5,
    delay:2,
scrollTrigger: {
  trigger: ".moveRightMpbile",
  toggleActions: "play none none reset"
}
});

}
