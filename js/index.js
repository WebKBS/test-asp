/* webtoon 마우스 오버시 comming soon */
const webToon = document.querySelector('.webtoon');
const webToonDiv = document.querySelector('.webtoon .img_wrap');
const webToonImg = document.querySelector('.webtoon .img_wrap img');

webToon.addEventListener('mouseenter', removeItem);
webToon.addEventListener('mouseleave', addItem);

function removeItem() {
  // console.log(webToonDiv.children);
  webToonImg.style.display = 'none';

  let $span = document.createElement('span');
  $span.textContent = 'COMING SOON';
  $span.classList.add('f_main4');
  $span.style.color = '#40AAF8';

  webToonDiv.appendChild($span);
}

function addItem() {
  // console.log(webToonDiv.children);
  webToonImg.style.display = 'block';

  webToonDiv.children[1].remove();
}
