const accordionBtn = document.querySelectorAll('.accordion_menu .title');
const accordionList = document.querySelectorAll('.accordion_menu .sub_list');
const accordionMenu = document.querySelector('.accordion_menu');

accordionBtn.forEach((event) => {
  event.addEventListener('click', function () {
    event.nextElementSibling.classList.toggle('active');
    event.classList.toggle('active');
  });
});

document.querySelector('.side_menu_btn').addEventListener('click', () => {
  document.querySelector('.acco_overlay').style.display = 'block';
  accordionMenu.style.display = 'block';
});

document.querySelector('.acco_overlay').addEventListener('click', (event) => {
  document.querySelector('.acco_overlay').style.display = 'none';
  accordionMenu.style.display = 'none';
});
