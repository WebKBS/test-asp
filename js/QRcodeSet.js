import { alertModalFunc } from './modules.js';

const $input = document.querySelector('.normal');

let reg = /(\d)\1\1/i;

/* 연속된 숫자 사용시 */
$input.addEventListener('change', () => {
  if (reg.test($input.value)) {
    alertModalFunc('연속된 숫자를 사용할 수 없습니다.', '');
    $input.value = '';
  }
});
