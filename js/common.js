/* 푸터 href 없으면 비활성화 */
const $a = document.querySelectorAll('#footer a');

$a.forEach((event) => {
  if (event.attributes.href.value === '#') {
    event.classList.add('disabled_color');
    // event.addEventListener('click', (e) => {
    //   e.preventDefault();
    // });
  }
});

const aAll = document.querySelectorAll('a');
aAll.forEach((event) => {
  if (event.attributes.href.value === '#') {
    event.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
});
