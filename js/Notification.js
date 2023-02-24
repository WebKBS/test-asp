import { accordionEvent } from './modules.js';

const tabBtn = document.querySelectorAll('.tab_box p');
const tabContent = document.querySelectorAll('.tab_content');
const nullContent = document.querySelector('.no_notification');

const tabContentUl = document.querySelector('.tab_content ul');

// console.log(tabContentUl.children.length);

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener('click', () => {
    for (let j = 0; j < tabBtn.length; j++) {
      tabBtn[j].classList.remove('on');
      tabContent[j].style.display = 'none';
    }

    if (tabContentUl.children.length !== 0) {
      tabContent[i].style.display = 'block';
      nullContent.style.display = 'none';
    } else {
      nullContent.style.display = 'block';
    }

    tabBtn[i].classList.add('on');
  });
}

const noticeBtn = document.querySelectorAll('.event_wrap .title_wrap');
const noticeText = document.querySelectorAll('.event_wrap .text');

accordionEvent(noticeBtn, noticeText);
