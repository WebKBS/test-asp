'use strict';

(function(){
  const menuListBtn = document.querySelectorAll(".content .menu_list li")
  const menuContentText = document.querySelectorAll(".menu_content .text_wrap li");
  const gifWrap = document.querySelectorAll(".gif_wrap li");


  for(let i = 0; i < menuListBtn.length; i++){
    show(i);
  }
  
  function show(event){
    menuListBtn.item(event).addEventListener('click', onHandler);

    function onHandler(ev){
      
      menuListBtn.forEach(e => {
        e.classList.remove("on");
      });
      menuContentText.forEach(e => {
        e.classList.remove("on");
      })
      gifWrap.forEach(e => {
        e.classList.remove("on");
      });
      menuListBtn.item(event).classList.add("on");
      menuContentText.item(event).classList.add("on");
      gifWrap.item(event).classList.add("on");
    }
  }
}());





function responsiveControl() { 
        
  if ( window.innerWidth < 767 ) {
      // 스와이퍼 모바일 슬라이드
      var swiper = new Swiper(".mySwiper", {
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



