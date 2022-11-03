const sideOpenBtn = document.querySelector('.side_open_btn');
const sideCloseBtn = document.querySelector('.side_close_btn');
const sideMenu = document.querySelector('.side_menu');

sideOpenBtn.addEventListener('click', openSideMenu);
sideCloseBtn.addEventListener('click', closeSideMenu);

function openSideMenu() {
  sideMenu.classList.add('on');
  document.body.classList.add('on');
  document.querySelector('html').classList.add('on');
}

function closeSideMenu() {
  sideMenu.classList.remove('on');
  document.body.classList.remove('on');
  document.querySelector('html').classList.remove('on');
}
