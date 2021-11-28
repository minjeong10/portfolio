/* 메뉴 */
$(".logo").click(function () {
  $(".navwrap").addClass("active");
  $(".logo").addClass("active");
  $(".close").addClass("active");
});

$(".close").click(function () {
  $(".navwrap").removeClass("active");
  $(".logo").removeClass("active");
  $(".close").removeClass("active");
});

if ( gsap ) {
  /*GSAP 효과*/
  gsap.from(".img-group-1__img-1", {
    ease: Power0.easeOut,
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".img-group-1",
      markers: false,
      start: "0 80%"
    }
  });

  gsap.from(".img-group-1__img-2", {
    ease: Power0.easeOut,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".img-group-1",
      markers: false,
      start: "0 80%"
    }
  });

  gsap.from(".img-group-1__img-3", {
    ease: Power2.easeIn,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: ".img-group-1",
      markers: false,
      start: "0 80%"
    }
  });

  gsap.from(".img-group-1__img-4", {
    ease: Power2.easeIn,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".img-group-1",
      markers: false,
      start: "0 80%"
    }
  });

  gsap.from(".img-group-1__img-5", {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".img-group-1",
      markers: false,
      start: "0 80%"
    }
  });
}
