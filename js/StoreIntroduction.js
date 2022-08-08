import { toggleClassList } from './modules.js';

const toggleBtn = document.querySelector('.open_btn');
const targetEle = document.querySelector('.details_info');

toggleClassList(toggleBtn, targetEle); /* 버튼, 타겟 */
