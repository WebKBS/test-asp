const changH2 = document.querySelectorAll('.mainSlider .text_box h2');
const changSubTitle = document.querySelectorAll('.mainSlider .text_box .sub_title');
const changBtnText = document.querySelectorAll('.mainSlider .text_box .start_btn');
const cont1H2 = document.querySelectorAll('.cont1 h2');


/* 메인 슬라이드 폰트 사이즈 조정 */
window.addEventListener('resize', _.debounce(() => {
    changH2.forEach(ev => {

        if (window.matchMedia('(max-width: 1400px)').matches) {
            remove(ev, "h2");
            add(ev, "h4");
        } else {
            remove(ev, "h4");
            add(ev, "h2");
        }

        if (window.matchMedia('(max-width: 768px)').matches) {
            remove(ev, "h4");
            add(ev, "h8");
        } else {
            remove(ev, "h8");
        }

        if (window.matchMedia('(max-width: 640px)').matches) {
            remove(ev, "h8");
            add(ev, "h9");
        } else {
            remove(ev, "h9");
        }
    });

    changSubTitle.forEach(ev => {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            remove(ev, "sub_title7");
            add(ev, "sub_title9");
        } else {
            remove(ev, "sub_title9");
            add(ev, "sub_title7");
        }

        if (window.matchMedia('(max-width: 640px)').matches) {
            remove(ev, "sub_title9");
            add(ev, "sub_title13");
        } else {
            remove(ev, "sub_title13");
        }
    });

    changBtnText.forEach(ev => {
        if (window.matchMedia('(max-width: 640px)').matches) {
            remove(ev, "sub_title7");
            add(ev, "sub_title15");
        } else {
            remove(ev, "sub_title15");
            add(ev, "sub_title7");
        }
    });

    cont1H2.forEach(ev => {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            remove(ev, "h2");
            add(ev, "h4");
        } else {
            remove(ev, "h4");
            add(ev, "h2");
        }
    })

    console.log('resize');
}, 100)
)


function remove(event, remove) {
    event.classList.remove(remove);
}
function add(event, add) {
    event.classList.add(add);
}