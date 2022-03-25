function responsiveControl() { 
        
  if ( window.innerWidth < 768 ) {
    // 스와이퍼 모바일 슬라이드
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 6,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,

        autoplay: {
          delay:4000,// 하나의 슬라이드에서 다음 슬라이드 또는 이전 슬라이드 이동 시 소요 시간
          disableOnInteraction: false
        },
      },
    });
  }
}
window.addEventListener('resize', responsiveControl, false);
responsiveControl();   

// cont2 스와이퍼
cont2Swiper();
function cont2Swiper(){
  var swiper = new Swiper(".cont2_swiper", {
    spaceBetween: 2,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// cont4 스와이퍼
cont4Swiper();
function cont4Swiper(){
  var swiper = new Swiper(".cont4_swiper", {
    spaceBetween: 2,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
  });
}