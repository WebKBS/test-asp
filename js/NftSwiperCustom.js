var nftSwiper = undefined;
function nftRespons() {
  if (window.innerWidth < 1200 && nftSwiper === undefined) {
    nftSwiper = new Swiper('.nftSwiper', {
      slidesPerView: 1,
      spaceBetween: 16,
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
  } else if (window.innerWidth > 1199 && nftSwiper !== undefined) {
    nftSwiper.destroy();
    nftSwiper = undefined;
  }
}
nftRespons();

window.addEventListener('resize', function () {
  nftRespons();
});
