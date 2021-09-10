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
