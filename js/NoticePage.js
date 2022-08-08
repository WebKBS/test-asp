import { accordionEvent, itemListButtonEvent } from './modules.js';

const noticeBtn = document.querySelectorAll('.event_wrap .title_wrap');
const noticeText = document.querySelectorAll('.event_wrap .text');

accordionEvent(noticeBtn, noticeText);

const menuList = document.querySelectorAll('.scroll_wrap ul li');

itemListButtonEvent(menuList);
