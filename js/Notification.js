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

noticeBtn.forEach((ev) => {
  ev.addEventListener('click', (event) => {
    let target = event.currentTarget;
    let textElement = target.nextElementSibling;

    if (textElement.classList.contains('on')) {
      textElement.classList.remove('on');
    } else {
      noticeText.forEach((ev) => {
        ev.classList.remove('on');
      });

      textElement.classList.add('on');
    }
    // console.log(textElement);
  });
});
