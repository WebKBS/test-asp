const mainList = document.querySelector('.main_list');
const NftList = document.querySelectorAll('.main_list li');
const itemList = document.querySelectorAll('.sub_list li');
const mintBtn = document.querySelector('.mint_btn');

NftList.forEach((list, idx, arr) => {
  clickEvent(list, arr);
});

itemList.forEach((list, idx, arr) => {
  clickEvent(list, arr);
});

function clickEvent(list, arr) {
  list.addEventListener('click', function () {
    arr.forEach((array) => {
      array.classList.remove('on');
    });

    list.classList.add('on');

    if (check()) {
      mintBtn.classList.add('on');
      mintBtn.disabled = false;
    }
  });
}

function check() {
  let isNftChecked = false;
  let isItemChecked = false;

  for (let idx = 0; idx < NftList.length; idx++) {
    if (NftList[idx].classList.contains('on')) {
      isNftChecked = true;
      break;
    }
  }
  for (let idx = 0; idx < itemList.length; idx++) {
    if (itemList[idx].classList.contains('on')) {
      isItemChecked = true;
      break;
    }
  }
  return isNftChecked && isItemChecked;
}
