const userName = document.getElementById('user_name');
const userPhone = document.getElementById('user_phone');
const userEmail = document.getElementById('user_email');
const userMsg = document.getElementById('user_message');
const submitBtn = document.getElementById('submit_btn');

// let regPhone = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}/;

submitBtn.addEventListener('click', () => {
  let nameValue = userName.value;
  let phoneValue = userPhone.value;
  let emailValue = userEmail.value;
  let msgValue = userMsg.value;

  Tracking_AddContact(emailValue, phoneValue, nameValue, msgValue, 'CONTACT');
});
