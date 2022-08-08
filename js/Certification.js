const changeBtn = document.querySelector('.cancel_btn');
const pwInput = document.querySelector('.pw');
const infoMsg = document.querySelector('.info_text');

let msgArray = ['정보를 입력해주세요.', '비밀번호가 일치하지 않습니다.'];

changeBtn.addEventListener('click', validationFunc);

function validationFunc() {
  if (pwInput.value === '') {
    infoMsg.textContent = msgArray[0];
  } else {
    // 변경 성공시
  }
}

pwInput.addEventListener('input', () => {
  if (pwInput.value !== '') {
    changeBtn.disabled = false;
  } else {
    changeBtn.disabled = true;
  }
});
