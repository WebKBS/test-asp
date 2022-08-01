let progress = document.querySelector('progress');
setInterval(() => {
  progress.value += 1;

  progress.value === 100 ? (progress.value = 0) : false;
}, 30);
