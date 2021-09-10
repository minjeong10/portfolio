/*branding js*/

if ( gsap ) {
  gsap.from(".text-img_1", {
    ease: Power0.easeOut,
    opacity: 0,
    duration: 0.4,
    x:200,
    scrollTrigger: {
      trigger: ".text-img_1",
      markers: false,
      start: "0 50%"
    }
  });

  gsap.from(".text-img_2", {
    ease: Power0.easeIn,
    opacity: 0,
    duration: 0.8,
    x:200,
    scrollTrigger: {
      trigger: ".text-img_2",
      markers: false,
      start: "0 50%"
    }
  });


  gsap.from(".sub-color-img1", {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".sub-color-img1",
      markers: false,
      start: "0 50%"
    }
  });

  gsap.from(".sub-color-img2", {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".sub-color-img2",
      markers: false,
      start: "0 50%"
    }
  });

  gsap.from(".sub-color-img3", {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".sub-color-img3",
      markers: false,
      start: "0 50%"
    }
  });

  gsap.from(".sub-color-img4", {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1.8,
    scrollTrigger: {
      trigger: ".sub-color-img4",
      markers: false,
      start: "0 50%"
    }
  });

  /*로고 이미지*/
  gsap.from(".img-logo_1", {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".img-logo_1",
      markers: false,
      start: "0 60%"
    }
  });

  gsap.from(".img-logo_2", {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: ".img-logo_2",
      markers: false,
      start: "0 60%"
    }
  });


  gsap.from(".img-logo_3", {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".img-logo_3",
      markers: false,
      start: "0 60%"
    }
  });


  gsap.from(".img-logo_4", {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1.8,
    scrollTrigger: {
      trigger: ".img-logo_4",
      markers: false,
      start: "0 60%"
    }
  });
}