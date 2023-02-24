import { alertModalFunc } from './modules.js';

const FindAddressBtn = document.getElementById('find_ads');
const CompleteBtn = document.getElementById('complete_btn');
const Ads = document.getElementById('ads');

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

CompleteBtn.addEventListener('click', () => {
  if (Ads.value === '') {
    alertModalFunc('상세주소를 입력하세요.', '');
  } else {
  }
});
