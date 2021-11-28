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










