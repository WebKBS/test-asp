var swiper1 = undefined;
function respons() {
  if (window.innerWidth <= 767 && swiper1 == undefined) {
    swiper1 = new Swiper('.mySwiper', {
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
  } else if (window.innerWidth > 767 && swiper1 != undefined) {
    swiper1.destroy();
    swiper1 = undefined;
  }
}
respons();

window.addEventListener('resize', function () {
  respons();
});

var swiper2 = undefined;
function respons2() {
  if (window.innerWidth <= 767 && swiper2 == undefined) {
    swiper2 = new Swiper('.mySwiper2', {
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
  } else if (window.innerWidth > 767 && swiper2 != undefined) {
    swiper2.destroy();
    swiper2 = undefined;
  }
}
respons2();

window.addEventListener('resize', function () {
  respons2();
});
