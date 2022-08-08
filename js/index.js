import { alertModalFunc } from './modules.js';
import { confirmModalFunc } from './modules.js';

const userPrice = document.querySelector('.earned_amount_wrap .price_wrap .price');

document.querySelector('.interlock').addEventListener('click', () => {
  /* 금액 없으면 */
  if (userPrice.textContent === '0') {
    alertModalFunc('사용 가능한 적립금이 없습니다.', '적립금 누적 후 사용해주세요.');
  } else {
    /* 금액 있으면 */
    document.querySelector('.exchange_modal').style.display = 'block';
  }
});

document.querySelector('.unlock').addEventListener('click', () => {
  confirmModalFunc('거래소 연동을 해제하시겠습니까?', '일부 서비스가 제한됩니다.', confirmFunc);
});

/* 돌아가기 */
document.querySelector('.exchange_modal .cancel_btn').addEventListener('click', (e) => {
  document.querySelector('.exchange_modal .cancel_btn').closest('.exchange_modal').style.display = 'none';
});

/* 사이드 메뉴 on off */
const html = document.querySelector('html');
const body = document.querySelector('body');
const sideMenu = document.querySelector('.side_menu');
const sideBtn = document.querySelector('.side_btn');
const sideBox = document.querySelector('.side_box');
const sideOverlay = document.querySelector('.side_overlay');
let posY;

sideBtn.addEventListener('click', () => {
  posY = html.scrollTop;

  if (!sideMenu.classList.contains('on')) {
    sideMenu.classList.add('on');
    sideBtn.classList.add('on');
    html.classList.add('not_scroll');
    body.classList.add('not_scroll');
    body.scrollTop = posY;

    setTimeout(() => {
      sideBox.style.transition = 'transform 0.3s';
      sideBox.style.transform = 'translateX(0)';
    });
  } else {
    sideRemoveOn();
  }
});

sideOverlay.addEventListener('click', sideRemoveOn);

/* 사이드메뉴 닫을때 함수 */
function sideRemoveOn() {
  sideBox.scrollTo(0, 0);
  sideMenu.classList.remove('on');
  sideBtn.classList.remove('on');
  sideBox.style.transform = 'translateX(-100%)';
  html.classList.remove('not_scroll');
  body.classList.remove('not_scroll');
  posY = window.scrollTo(0, posY);
}

/* 사이드메뉴 회사정보 */
document.querySelector('.select').addEventListener('click', () => {
  document.querySelector('.select').classList.toggle('on');
  document.querySelector('.side_bottom .info').classList.toggle('on');
});

/* 거래소 연동 해제시 엘리먼트 연동해제 display none */
function confirmFunc() {
  document.querySelector('.alert_modal_wrap .confirm_btn').addEventListener('click', (e) => {
    document.querySelector('.user_assets_wrap').style.display = 'none';
    document.querySelector('.unlock').style.display = 'none';
    document.querySelector('.alert_modal_wrap').remove();
  });
  // alert('a');
}
// confirmFunc();
