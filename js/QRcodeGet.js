import { alertModalFunc } from './modules.js';

const setInput = document.getElementById('set_input');
const setConfrim = document.getElementById('setConfirm');

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
    window.location.href = './QRcodeScan.html';
  }
});
