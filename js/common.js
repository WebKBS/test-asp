const container = document.querySelector('.container');
const modal = document.querySelector('.modal');
const modalBackground = document.querySelector('.modal .background');
const mintingButton = document.querySelector('.link_wrap button');
const connectButton = document.querySelector('.connect_btn');

connectButton.addEventListener('click', function () {
  // 모달 오픈시 배경 블러
  container.classList.add('on');

  // 모달 ON
  modal.classList.add('on');

  // 버튼 클릭시 ON
  connectButton.querySelector('.state_text').textContent = 'ON';
  connectButton.classList.add('on');
});

/* 모달 해제 이벤트 */
modalBackground.addEventListener('click', function () {
  //모달 해지시 블러 삭제
  container.classList.remove('on');

  //모달 닫기
  modal.classList.remove('on');

  // 버튼 클릭시 OFF
  connectButton.querySelector('.state_text').textContent = 'OFF';
  connectButton.classList.remove('on');
});
