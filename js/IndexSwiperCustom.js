var swiper = undefined;
function respons() {
  if (window.innerWidth < 768 && swiper === undefined) {
    swiper = new Swiper('.mySwiper', {
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
  } else if (window.innerWidth > 767 && swiper !== undefined) {
    swiper.destroy();
    swiper = undefined;
  }
}
respons();

window.addEventListener('resize', function () {
  respons();
});
