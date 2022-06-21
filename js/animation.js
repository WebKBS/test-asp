const contBg = document.querySelector('.cont1_bg');
const iconsAni = document.querySelectorAll('.cont1 .icons li');
const iconsAfter = document.querySelectorAll('.cont1 .icons li span');
const contText = document.querySelectorAll('.ani2');
const contShadow = document.querySelector('.shadow_bg');
const transEvent = document.querySelectorAll('.translate50');

contBg.style.display = 'block';

function contAnimation() {
  transEvent.forEach((event, idx) => {
    setTimeout(() => {
      event.style.opacity = 1;
      event.style.transform = 'translateY(0)';
      event.style.transition = '1.5s';
    }, 600 * (idx + 1));
  });
}

function iconAniFunc() {
  // console.log(iconsAfter);

  setTimeout(() => {
    iconsAni.forEach((event, idx) => {
      event.style.opacity = 1;
      event.style.transform = 'translateY(0)';
      event.style.transition = '1.5s';
      iconsAfter[idx].style.display = 'block';
    });
  }, 2000);
}
function textAniFunc() {
  setTimeout(() => {
    contText.forEach((event) => {
      setTimeout(() => {
        event.style.opacity = 1;
        event.style.transform = 'translateY(0)';
        event.style.transition = '1.5s';
      }, 1000);
    });
  }, 2000);
}
function shadowAniFunc() {
  setTimeout(() => {
    contShadow.style.transform = 'translate(0)';
  }, 2100);
}

// =========
if (window.innerWidth >= 1200) {
  contAnimation();
  iconAniFunc();
  textAniFunc();
  shadowAniFunc();
} else {
  contShadow.style.display = 'none';
  contAnimation();
  iconAniFunc();
  textAniFunc();
}
