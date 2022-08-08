const changeBtn = document.querySelector('.cancel_btn');
const pwInput = document.querySelector('.pw');
const cPwInput = document.querySelector('.c_pw');
const infoMsg = document.querySelector('.info_text');
const inputAll = document.querySelectorAll('.info_input');

let msgArray = ['정보를 입력해주세요.', '비밀번호가 일치하지 않습니다.', '영문, 숫자, 특수문자 조합 8~16자리 입력 필요'];

//특수문자 포함 숫자포함 8자 이상 16자 이내
let passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

changeBtn.addEventListener('click', validationFunc);

function validationFunc() {
  if (pwInput.value === '' || cPwInput.value === '') {
    infoMsg.textContent = msgArray[0];
  } else if (pwInput.value !== cPwInput.value) {
    infoMsg.textContent = msgArray[1];
  } else if (!passwordRule.test(pwInput.value) || !passwordRule.test(cPwInput.value)) {
    infoMsg.textContent = msgArray[2];
  } else {
    // 변경 성공시
  }
}

inputAll.forEach((input) => {
  input.addEventListener('click', () => {
    infoMsg.textContent = '';
  });
});
