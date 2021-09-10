console.clear();

if ( window['gsap'] == undefined ) {
  gsap = false;
}



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

