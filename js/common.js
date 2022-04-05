'use strict';

const sideMenu = document.querySelector('.side_menu');
const sideMenuInner = document.querySelector('.side_inner');
const sideMenuBg = document.querySelector('.side_bg');

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
    }, 0);
  });
}
closeSideMemu();
