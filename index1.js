


gsap.registerPlugin(ScrollTrigger)

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
gsap.from(".MobileCardLeftMove", {
x:-600,
ease: "bounce",
duration: 2.5,
scrollTrigger: {
  trigger: ".MobileCardLeftMove",
  toggleActions: "play none none reset"
}
});

}


if (window.matchMedia("(max-width: 800px)").matches) {
gsap.from(".MobileCardRightMove", {

x:600,
ease: "bounce",
duration: 2.5,
scrollTrigger: {
  trigger: ".MobileCardRightMove",
  toggleActions: "play none none reset"
}
});

}




