import { alertModalFunc } from './modules.js';

const setInput = document.getElementById('set_input');
const confirmInput = document.getElementById('confrim_input');
const setConfrim = document.getElementById('setConfirm');
const confrim = document.getElementById('confirm');

let reg = /(\d)\1\1/i;

/* 연속된 숫자 사용시 */
setConfrim.addEventListener('click', () => {
  if (setInput.value === '') {
    alertModalFunc('인증번호를 입력하세요', '');
  } else if (reg.test(setInput.value)) {
    alertModalFunc('연속된 숫자를 사용할 수 없습니다.', '');
    setInput.value = '';
  } else if (setInput.value.length < 6) {
    alertModalFunc('인증번호 6자를 입력하세요', '');
  } else {
    document.querySelector('.set_input').classList.remove('on');
    document.querySelector('.confrim_input').classList.add('on');
  }
});

/* 연속된 숫자 사용시 */
confrim.addEventListener('click', () => {
  if (confirmInput.value === '') {
    alertModalFunc('인증번호를 입력하세요', '');
  } else if (reg.test(confirmInput.value)) {
    alertModalFunc('연속된 숫자를 사용할 수 없습니다.', '');
    confirmInput.value = '';
  } else if (confirmInput.value.length < 6) {
    alertModalFunc('인증번호 6자를 입력하세요', '');
  } else {
    // 인증 완료 코드 작성
  }
});
