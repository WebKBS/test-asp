/* 경고창 함수 */
export function alertModalFunc(title, text) {
  const alertModal = document.querySelector('.alert_modal_wrap');
  const modalElement = `
  <div class="overlay"></div>
  <div class="modal">
    <div class="icon"></div>
    <p class="modal_title ft_sub_t1">${title}</p>
    <p class="modal_sub_text ft_sub_txt1">${text}</p>
    <div class="button_wrap">
      <button type="button" class="join_btn ft_sub_t1" id="closeModal">확인</button>
    </div>
  </div>
`;
  alertModal.insertAdjacentHTML('beforeend', modalElement);
  alertModal.style.display = 'block';

  document.getElementById('closeModal').addEventListener('click', (e) => {
    alertModal.innerHTML = '';
    alertModal.style.display = 'none';
  });
}

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
