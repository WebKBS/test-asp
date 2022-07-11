window.addEventListener('load', function () {
  this.document.getElementById('wrap').style.opacity = 1;
  this.document.getElementById('load').style.opacity = 0;
  this.document.getElementById('load').style.transition = 'opacity .5s';

  if (document.getElementById('load').style.opacity === '0') {
    document.getElementById('load').style.display = 'none';
  }
});
