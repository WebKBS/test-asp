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





