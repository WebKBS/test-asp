const checkBox = document.querySelector('input[type="checkbox"]');
const confirmBtn = document.querySelector('.join_btn');

checkBox.addEventListener('click', () => {
  if (checkBox.checked === true) {
    confirmBtn.disabled = false;
  } else {
    confirmBtn.disabled = true;
  }
});

confirmBtn.addEventListener('click', () => {
  window.location.href = './ResignMembershipCompletion.html';
});
