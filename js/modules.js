/* 경고창 함수 */
export function alertModalFunc(title, text) {
  const modalElement = `
  <div class="alert_modal_wrap">
    <div class="overlay"></div>
    <div class="modal">
      <div class="icon"></div>
      <p class="modal_title ft_sub_t1">${title}</p>
      <p class="modal_sub_text ft_sub_txt1">${text}</p>
      <div class="button_wrap">
        <button type="button" class="join_btn ft_sub_t1" id="closeModal">확인</button>
      </div>
    </div>
  </div>
`;
  document.body.insertAdjacentHTML('beforeend', modalElement);
  document.querySelector('.alert_modal_wrap').style.display = 'block';

  document.getElementById('closeModal').addEventListener('click', (e) => {
    document.querySelector('.alert_modal_wrap').remove();
    // alertModal.style.display = 'none';
  });
}

/* confrim 선택창 함수 */
export function confirmModalFunc(title, text, callback) {
  const modalElement = `
  <div class="alert_modal_wrap">
    <div class="overlay"></div>
    <div class="modal">
      <div class="icon"></div>
      <p class="modal_title ft_sub_t1">${title}</p>
      <p class="modal_sub_text ft_sub_txt1">${text}</p>
      <div class="button_wrap">
        <button type="button" class="cancel_btn ft_sub_t1">취소</button>
        <button type="button" class="join_btn confirm_btn ft_sub_t1">확인</button>
      </div>
    </div>
  </div>
`;
  document.body.insertAdjacentHTML('beforeend', modalElement);
  document.querySelector('.alert_modal_wrap').style.display = 'block';

  document.querySelector('.alert_modal_wrap .cancel_btn').addEventListener('click', (e) => {
    document.querySelector('.alert_modal_wrap').remove();
  });

  setTimeout(() => {
    callback();
  });
}

/* 클래스 on toggle */
export function toggleClassList(button, target) {
  button.addEventListener('click', onOff);

  function onOff() {
    target.classList.toggle('on');
  }
}

/* 아코디언 함수 */
export function accordionEvent(button, targetEle) {
  button.forEach((ev) => {
    ev.addEventListener('click', (event) => {
      let target = event.currentTarget;
      let textElement = target.nextElementSibling;

      if (textElement.classList.contains('on')) {
        textElement.classList.remove('on');
      } else {
        targetEle.forEach((ev) => {
          ev.classList.remove('on');
        });

        textElement.classList.add('on');
      }
      // console.log(textElement);
    });
  });
}

/* 아이템 리스트 버튼 on off */
export function itemListButtonEvent(button) {
  for (let i of button) {
    i.addEventListener('click', () => {
      for (let k of button) {
        k.classList.remove('on');
      }
      i.classList.add('on');
    });
  }
}

/* 텍스트 박스가있는 모달 */
export function textBoxModalFunc(title, text1, date, text2) {
  const modalElement = `
  <div class="confirm_modal_wrap">
        <div class="overlay"></div>
        <div class="modal">
          <div class="icon"></div>
          <p class="modal_title ft_sub_t1">${title}</p>
          <div class="modal_box">
            <p class="ft_sub_txt1">
              <span>🞄</span>
              ${text1}
            </p>
            <p class="ft_sub_txt1">
              <span>🞄</span>
              ${date}
            </p>
            <p class="ft_sub_txt1">
              <span>🞄</span>
              ${text2}
            </p>
          </div>
          <div class="button_wrap">
            <button type="button" class="join_btn ft_sub_t1">확인</button>
          </div>
        </div>
      </div>
`;
  document.body.insertAdjacentHTML('beforeend', modalElement);
  document.querySelector('.confirm_modal_wrap').style.display = 'block';

  document.querySelector('.join_btn').addEventListener('click', (e) => {
    document.querySelector('.confirm_modal_wrap').remove();
    // alertModal.style.display = 'none';
  });
}
