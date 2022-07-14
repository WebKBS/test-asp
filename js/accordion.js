const accordionBtn = document.querySelectorAll('.accordion_menu .title');
const accordionList = document.querySelectorAll('.accordion_menu .sub_list');

accordionBtn.forEach((event) => {
  event.addEventListener('click', function () {
    event.nextElementSibling.classList.toggle('active');
    event.classList.toggle('active');
  });
});
