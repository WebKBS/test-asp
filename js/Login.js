'use-strict';

const LoginBtn = document.querySelector('.login_btn');
const idInput = document.querySelector('.user_id');
const pwInput = document.querySelector('.user_pw');
const errorMsg = document.querySelector('.form_msg');

let errorMsgArray = ['아이디를 입력하세요.', '비밀번호를 입력하세요.', '회원정보가 일치하지 않습니다.', '비밀번호가 일치하지 않습니다.'];

LoginBtn.addEventListener('click', () => {
  if (idInput.value === '') {
    errorMsg.style.display = 'block';
    errorMsg.textContent = errorMsgArray[0];
  } else if (pwInput.value === '') {
    errorMsg.style.display = 'block';
    errorMsg.textContent = errorMsgArray[1];
  }

  setTimeout(() => {
    errorMsg.style.display = 'none';
  }, 3000);

  /* 비밀 번호 일치 하지 않을때 작성 */

  /* 회원정보 일치하지 않을때 작성 */
});

idInput.addEventListener('click', () => {
  errorMsg.style.display = 'none';
});

pwInput.addEventListener('click', () => {
  errorMsg.style.display = 'none';
});
