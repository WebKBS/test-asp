import { textBoxModalFunc, confirmModalFunc } from './modules.js';

// const onOffBtn = document.querySelectorAll('.on_off_btn');
const pushAlarm = document.getElementById('pushAlarm');
const marketing = document.getElementById('marketing');
const autoLoginBtn = document.getElementById('autoLogin');
const termsBtn = document.getElementById('termsBtn');

/* 자동로그인 설정 */
autoLoginBtn.addEventListener('click', () => {
  autoLoginBtn.classList.toggle('on');
});

/* push알림 설정 */
pushAlarm.addEventListener('click', () => {
  if (!pushAlarm.classList.contains('on')) {
    textBoxModalFunc('앱 PUSH 알림 설정완료', `전송자 : /서비스/`, `수신동의일시 : 2022-12-30 13:00`, '처리내용 : 앱 PUSH 알림 수신 처리완료');
    pushAlarm.classList.add('on');
  } else {
    confirmModalFunc(
      '앱 PUSH 알림 해제',
      `앱 PUSH 알림 수신을 해제하시면<br>
      주요 정보를 확인할 수 없습니다.`,
      pushCancel
    );
  }
});

/* 마케팅 설정 */
marketing.addEventListener('click', () => {
  if (!marketing.classList.contains('on')) {
    textBoxModalFunc('마케팅 알림 설정완료', `전송자 : /서비스/`, `수신동의일시 : 2022-12-30 13:00`, '처리내용 : 마케팅 알림 수신 처리완료');
    marketing.classList.add('on');
  } else {
    confirmModalFunc(
      '마케팅 알림 해제',
      `마케팅 알림 수신을 해제하시면<br>
      주요 정보를 확인할 수 없습니다.`,
      marketingCancel
    );
  }
});

function pushCancel() {
  document.querySelector('.join_btn').addEventListener('click', () => {
    pushAlarm.classList.remove('on');
    document.querySelector('.alert_modal_wrap').remove();
    textBoxModalFunc('앱 PUSH 알림 해제완료', `전송자 : /서비스/`, `수신동의일시 : 2022-12-30 13:00`, '처리내용 : 앱 PUSH 알림 수신 해제완료');
  });
}

function marketingCancel() {
  document.querySelector('.join_btn').addEventListener('click', () => {
    marketing.classList.remove('on');
    document.querySelector('.alert_modal_wrap').remove();
    textBoxModalFunc('마케팅 알림 해제완료', `전송자 : /서비스/`, `수신동의일시 : 2022-12-30 13:00`, '처리내용 : 마케팅 알림 수신 해제완료');
  });
}

/* 위치정보 약관 설정 */
termsBtn.addEventListener('click', () => {
  termsBtn.classList.toggle('on');
});
