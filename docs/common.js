console.clear();

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

/* about me js*/

console.clear();

var tl = gsap.timeline({
  repeat:-1,
  repeatDelay:1
});

tl.from(".Typo > div > span", {
  opacity: 0,
  stagger: 0.5
});


function SwitchEffect1__init() {
  $('.switch-effect-1').each(function(index, el) {
    const $el = $(el);

    const itemSeconds = $el.attr('data-item-seconds') ? parseInt($el.attr('data-item-seconds')) : 2000;

    setInterval(function() {
      // 현재 활성화된 녀석을 찾는다.
      const $current = $el.find(' > ul > li.active');
      // 그 다음 후보를 찾는다.
      const $post = $current.next().length == 0 ? $el.find(' > ul > li:first-child') : $current.next();

      // 교체
      $current.removeClass('active');
      $post.addClass('active');
    }, itemSeconds);
  });
}

SwitchEffect1__init();

gsap.from('.text-title_1', {
  ease: Power2.easeIn,
  opacity:0,
  y:-50,
  duration:0.9,
  scrollTrigger:{
    trigger:'.text-title_1',
    markers:false,
    start:'0 80%'
  }
});

gsap.from('.text-title_2', {
  ease: Power2.easeIn,
  opacity:0,
  y:0,
  duration:1.5,
  scrollTrigger:{
    trigger:'.text-title_2',
    markers:false,
    start:'0 80%'
  }
});



/* 스크롤트리거 */
$(window).scroll(function () {

  var i = $(window).scrollTop();

  var sub_c2 = $(".sub_c2").offset().top;
  var sub_c3 = $(".sub_c3").offset().top;

  if (i >= sub_c2 && i < sub_c3 - 100) {
    $(".sub_c2 > .img_graph").addClass("active")
  } 
  else {
    $(".sub_c2 > .img_graph").removeClass("active")
  }
  
  if (i >= sub_c3 - 80 && i < sub_c3 + 350) {
    $(".sub_c3 > .bar1").addClass("active")
    $(".sub_c3 > .bar2").addClass("active")
    $(".sub_c3 > .bar3").addClass("active")
    $(".sub_c3 > .bar4").addClass("active")
    $(".sub_c3 > .bar5").addClass("active")
    $(".sub_c3 > .bar6").addClass("active")
  } 
  else {
    $(".sub_c3 > .bar1").removeClass("active")
    $(".sub_c3 > .bar2").removeClass("active")
    $(".sub_c3 > .bar3").removeClass("active")
    $(".sub_c3 > .bar4").removeClass("active")
    $(".sub_c3 > .bar5").removeClass("active")
    $(".sub_c3 > .bar6").removeClass("active")
  }
});


/*우측하단버튼*/

/* 우측 하단 메뉴 버튼 */
$('.plus-link').click(function() {
  let has = $('.btn-inner').hasClass('active');
  
  if ( has ) {
    $('.btn-inner').removeClass('active');
  }
  else {
    $('.btn-inner').addClass('active');
  }
});

$('.plus-link').click(function() {
  let has = $('.plus-link').hasClass('active');
  
  if ( has ) {
    $('.plus-link').removeClass('active');
  }
  else {
    $('.plus-link').addClass('active');
  }
});

$('.plus-link').click(function() {
  let has = $('.down-click').hasClass('active');
  
  if ( has ) {
    $('.down-click').removeClass('active');
  }
  else {
    $('.down-click').addClass('active');
  }
});
/* 우측 하단 메뉴 버튼 끝 */















/*포트폴리오 js*/

/* 이미지 프리로드 함수 */
function preloading (imageArray) {
  let n = imageArray.length;
  for (let i = 0; i < n; i++) {
    let img = new Image(); img.src = imageArray[i];
  }
}

/* 이미지 프리로드 */
preloading([
  'https://picsum.photos/id/137/1000/1500',
  'https://picsum.photos/id/117/1000/1500',
  'https://picsum.photos/id/139/1000/1500',
  'https://picsum.photos/id/140/1000/1500'
]);

function Part__showPart(no) {
  $('.part-group').attr('data-no', no);
  
  // 기존에 활성화 된 녀석들 제거
  $('.part.active').removeClass('active');
  $('.part.part-' + no).addClass('active');
}

function Part__showPartPrev() {
  const total = $('.part-head > *').length;
  const currentNo = $('.part-head > .active').index() + 1;
  
  const newNo = currentNo - 1 > 0 ? currentNo - 1 : total;
  
  Part__showPart(newNo);
}

function Part__showPartNext() {
  const total = $('.part-head > *').length;
  const currentNo = $('.part-head > .active').index() + 1;
  
  const newNo = currentNo + 1 > total ? 1 : currentNo + 1;
  
  Part__showPart(newNo);
}

Part__showPart(1);



/*branding js*/

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

/* EXPERIENCE js*/

/* PROCESS js*/
