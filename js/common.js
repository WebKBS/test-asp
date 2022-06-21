'use strict';

const sideMenu = document.querySelector('.side_menu');
const sideMenuInner = document.querySelector('.side_inner');
const sideMenuBg = document.querySelector('.side_bg');
const $body = document.querySelector('body');

function openSidemenu() {
  const sideMenuBtn = document.querySelector('.menu_btn');

  sideMenuBtn.addEventListener('click', () => {
    sideMenu.classList.add('on');

    // setTimeout을 넣는 이유는
    // 부모가 display none상태라서
    // setTimeout 0초의 초기 4ms를 이용해 트랜지션을 넣는다.
    setTimeout(function () {
      sideMenuInner.classList.add('on');
      sideMenuBg.style.opacity = 1;
      $body.style.overflow = 'hidden';
    }, 0);
  });
}
openSidemenu();

function closeSideMemu() {
  const sideCloseBtn = document.querySelector('.side_inner .close');

  sideCloseBtn.addEventListener('click', () => {
    sideMenu.classList.remove('on');
    setTimeout(function () {
      sideMenuInner.classList.remove('on');
      sideMenuBg.style.opacity = 0;
      $body.style.overflow = 'auto';
    }, 0);
  });
}
closeSideMemu();

function commingSoon() {
  const footerSubLi = document.querySelectorAll('#footer .sitemap ul li ul li');
  // let textList = ['Mining', 'NFT', 'Marketplace', '출시예정', '출시예정', 'About', 'Whitepaper', 'Team', 'Docs'];

  footerSubLi.forEach((event, idx) => {
    event.addEventListener('click', () => {
      // let text = event.textContent;
      let srcAdd = '../images/comming_soon_img.png';
      let img = document.createElement('img');

      img.setAttribute('src', srcAdd);

      console.log(img);
      // textList.push(text);

      // <img src="./images/comming_soon_img.png" alt="" />;
      // event.textContent = 'Comming';
      event.appendChild(img);

      setTimeout(() => {
        event.removeChild(img);
      }, 800);
    });
  });
}
commingSoon();

/* subscribe 이메일 전송 이벤트 */
const emailInput = document.getElementById('email');
const emailSubmit = document.getElementById('submit');

/* 이메일 정규식 검사 */
let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

emailSubmit.addEventListener('click', sendEmailFunc);
emailInput.addEventListener('keyup', sendEmailEnterFunc);

function sendEmailFunc(event) {
  event.preventDefault();
  if (emailReg.exec(emailInput.value)) {
    Tracking_AddSubscribe(emailInput.value);
    // console.log('true');
    Swal.fire({
      icon: 'success',
      text: 'Email sending is complete.',
    });
  } else {
    Swal.fire({
      icon: 'error',
      text: 'Please check the email form.',
    });
  }
}
function sendEmailEnterFunc(event) {
  if (event.keyCode === 13) {
    if (emailReg.exec(emailInput.value)) {
      Tracking_AddSubscribe(emailInput.value);
      // console.log('true');
      Swal.fire({
        icon: 'success',
        text: 'Email sending is complete.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Please check the email form.',
      });
    }
  }
}

/* whitepaper 마우스 오버시 CommingSoon */
const WhitePaper = document.querySelector('.whitepaper');
const SideWhitePaper = document.querySelector('.side_whitepaper');
const CommingSpan = document.querySelector('.whitepaper span');
const SideCommingSpan = document.querySelector('.side_whitepaper span');

WhitePaper.addEventListener('mouseenter', enterChangeText);
WhitePaper.addEventListener('mouseleave', leaveChangeText);
SideWhitePaper.addEventListener('click', enterChangeText);
// SideWhitePaper.addEventListener('mouseleave', leaveChangeText);

function enterChangeText() {
  CommingSpan.textContent = 'Comming Soon';
  SideCommingSpan.textContent = 'Comming Soon';

  CommingSpan.style.color = '#7c40e7';
  SideCommingSpan.style.color = '#7c40e7';

  CommingSpan.style.paddingLeft = 0;
  SideWhitePaper.style.paddingLeft = 0;

  CommingSpan.style.backgroundImage = 'none';
  SideWhitePaper.style.backgroundImage = 'none';
}
function leaveChangeText() {
  CommingSpan.textContent = 'WHITEPAPER';
  // SideCommingSpan.textContent = 'WHITEPAPER';

  CommingSpan.style.color = '#222';
  // SideCommingSpan.style.color = '#222';

  CommingSpan.style.paddingLeft = '20px';
  // SideWhitePaper.style.paddingLeft = '4.42708vmin';

  CommingSpan.style.backgroundImage = 'url(../images/main/icon/document_icon_mobile.svg)';
  CommingSpan.style.backgroundRepeat = 'no-repeat';
  // SideWhitePaper.style.backgroundImage = 'url(../images/main/icon/document_icon_mobile.svg)';
}
