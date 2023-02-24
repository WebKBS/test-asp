const checkBox = document.querySelectorAll('.all_check ~ p input[type=checkbox]');
const allCheck = document.getElementById('all');
const joinBtn = document.querySelector('.join_btn');

const checkObject = {};

allCheck.addEventListener('click', (e) => {
  const { checked } = e.target;

  if (checked) {
    checkBox.forEach((e) => {
      e.checked = true;
      checkObject[e.id] = true;
      joinBtn.disabled = false;
    });
  } else {
    checkBox.forEach((e) => {
      e.checked = false;
      checkObject[e.id] = false;
      joinBtn.disabled = true;
    });
  }
});

checkBox.forEach((e) => {
  e.addEventListener('input', (ev) => {
    const { checked, id } = ev.target;

    checkObject[id] = checked;
    //console.log(checkObject);
    checkStatus();
    allCheckStatus();
  });
});

// 필수 체크 상태 함수
function checkStatus() {
  const { check1, check2, check3 } = checkObject;
  if (check1 && check2 && check3) {
    joinBtn.disabled = false;
  } else {
    joinBtn.disabled = true;
  }
}

// 전체 체크 상태 함수
function allCheckStatus() {
  const { check1, check2, check3, check4, check5 } = checkObject;
  if (check1 && check2 && check3 && check4 && check5) {
    allCheck.checked = true;
  } else {
    allCheck.checked = false;
  }
}

joinBtn.addEventListener('click', () => {
  window.location.href = './EnterInformation.html';
  checkBox.forEach((e) => {
    e.checked = false;
  });
  allCheck.checked = false;
});
