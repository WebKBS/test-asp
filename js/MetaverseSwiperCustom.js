var swiper = new Swiper('.mySwiper', {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
});

var swiper1 = undefined;
function respons() {
  if (window.innerWidth > 1199 && swiper1 == undefined) {
    swiper1 = new Swiper('.mySwiper2', {
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth < 1200 && swiper1 != undefined) {
    swiper1.destroy();
    swiper1 = undefined;
  }
}
respons();

window.addEventListener('resize', function () {
  respons();
});
