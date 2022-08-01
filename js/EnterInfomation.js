'use strict';

const Email = document.getElementById('email');
const Pw = document.getElementById('pw');
const cPw = document.getElementById('c_pw');
const Male = document.getElementById('male');
const FeMale = document.getElementById('female');
const Address = document.getElementById('address');
const FindAddressBtn = document.getElementById('find_ads');
const Ads = document.getElementById('ads');
const CompleteBtn = document.getElementById('complete_btn');
const EmailErrorMsgElement = document.querySelector('.email_check');
const PwErrorMsgElement = document.querySelector('.pw_check');

//특수문자 포함 숫자포함 8자 이상 16자 이내
let passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

//Email 정규식
let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

let errorMsg = ['올바른 양식이 아닙니다.', '비밀번호가  일치하지 않습니다.'];

function FormCheck() {
  if (Email.value === '') {
    alert('Email을 입력하세요.');
    Email.focus();

    return false;
  } else if (!emailReg.exec(Email.value)) {
    alert('이메일이 올바르지 않습니다.');
    Email.focus();

    return false;
  }

  if (Pw.value === '') {
    alert('비밀번호를 입력하세요.');
    Pw.focus();

    return false;
  } else if (!passwordRule.exec(Pw.value)) {
    alert('비밀번호 양식이 맞지 않습니다.');
    Pw.focus();

    return false;
  }

  if (cPw.value === '') {
    alert('비밀번호 확인을 입력하세요.');
    cPw.focus();

    return false;
  } else if (!passwordRule.exec(cPw.value)) {
    alert('비밀번호 양식이 맞지 않습니다.');
    cPw.focus();

    return false;
  } else if (Pw.value !== cPw.value) {
    alert('비밀번호가 맞지않습니다.');
    cPw.focus();

    return false;
  }

  if (!Male.checked === true && !FeMale.checked === true) {
    alert('성별을 체크하세요');
    Male.focus();
    return false;
  }

  if (Address.value === '') {
    alert('주소를 입력하세요.');
    Address.focus();
    return false;
  }

  if (Ads.value === '') {
    alert('상세주소를 입력하세요.');
    Ads.focus();
    return false;
  }

  // 유효성 성공시 다음으로 이동
  window.location.href = './SignupComplete.html';
}

Email.addEventListener('change', EmailCheck);
cPw.addEventListener('change', pwCheck);
Pw.addEventListener('change', pwCheck);

function EmailCheck() {
  if (!emailReg.exec(Email.value)) {
    EmailErrorMsgElement.style.display = 'block';
    EmailErrorMsgElement.textContent = errorMsg[0];
  } else {
    EmailErrorMsgElement.style.display = 'none';
    EmailErrorMsgElement.textContent = '';
  }
}

function pwCheck() {
  if (Pw.value !== cPw.value) {
    PwErrorMsgElement.style.display = 'block';
    PwErrorMsgElement.textContent = errorMsg[1];

    return false;
  } else if (!passwordRule.exec(cPw.value)) {
    PwErrorMsgElement.style.display = 'block';
    PwErrorMsgElement.textContent = errorMsg[0];

    return false;
  } else {
    PwErrorMsgElement.style.display = 'none';
    PwErrorMsgElement.textContent = '';
  }
}

CompleteBtn.addEventListener('click', FormCheck);

//주소 찾기 api
function findAddr() {
  new daum.Postcode({
    oncomplete: function (data) {
      console.log(data);

      let roadAddr = data.roadAddress; // 도로명 주소 변수
      let jibunAddr = data.jibunAddress; // 지번 주소 변수
      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById('zonecode').value = data.zonecode;
      if (roadAddr !== '') {
        document.getElementById('address').value = roadAddr;
      } else if (jibunAddr !== '') {
        document.getElementById('address').value = jibunAddr;
      }
    },
  }).open();
}

FindAddressBtn.addEventListener('click', findAddr);
