import { itemListButtonEvent } from './modules.js';

const tabBtn = document.querySelectorAll('.tab_box p');
const tabContent = document.querySelectorAll('.tab_content');

// console.log(tabContentUl.children.length);

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener('click', () => {
    for (let j = 0; j < tabBtn.length; j++) {
      tabBtn[j].classList.remove('on');
      tabContent[j].style.display = 'none';
    }

    tabBtn[i].classList.add('on');
    tabContent[i].style.display = 'block';
  });
}

const menuList = document.querySelectorAll('.menu_list ul li');

itemListButtonEvent(menuList);
