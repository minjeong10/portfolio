/* EXPERIENCE js*/

  /*GSAP 효과*/
  gsap.from(".img2-flower", {
    ease: Power0.easeOut,
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".img2-flower",
      markers: false,
      start: "0 80%"
    }
  });

  gsap.from(".img3-flower", {
    ease: Power0.easeOut,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".img3-flower",
      markers: false,
      start: "0 80%"
    }
  });