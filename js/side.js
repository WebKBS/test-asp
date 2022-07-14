const walletBtn = document.querySelector('.wallet_btn');
const sideMenu = document.querySelector('.side_menu');
const overlay = document.querySelector('.overlay');

walletBtn.addEventListener('click', sideMenuOpen);
overlay.addEventListener('click', sideMenuClose, true);

function sideMenuOpen() {
  overlay.style.display = 'block';
  sideMenu.classList.add('active');

  document.body.style.overflow = 'hidden';
}

function sideMenuClose(event) {
  overlay.style.display = 'none';
  sideMenu.classList.remove('active');

  document.body.style.overflow = 'auto';
}
