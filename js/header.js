(function () {
    const comming = document.querySelector(".gnb .comming");
    const commingA = document.querySelector(".gnb .comming a");

    commingA.addEventListener("mouseenter", function (ev) {
        ev.preventDefault();
        this.innerHTML = "Comming Soon";
        comming.classList.add("text_change");
        // console.log(this.children);
    });

    commingA.addEventListener("mouseleave", function (ev) {
        ev.preventDefault();
        this.innerHTML = "Market";
        comming.classList.remove("text_change");
        // console.log(this.children);
    });

}());

(function () {
    const mobileGnbBtn = document.querySelector(".menu_btn");
    const mobileSlideMenu = document.querySelector(".mobi_side");
    const mobileSlideMenuBg = document.querySelector(".side_bg");
    const closeSide = document.querySelector(".mobi_side .overlay");
    // console.log(closeSide);

    mobileGnbBtn.addEventListener("click", (ev) => {
        ev.preventDefault();

        mobileSlideMenu.style.visibility = "visible";
        mobileSlideMenuBg.style.transform = "translateX(0)";

        document.querySelector("body").classList.add("stop-scroll");
    });

    closeSide.addEventListener("click", (ev) => {
        mobileSlideMenu.style.visibility = "hidden";
        mobileSlideMenuBg.style.transform = "translateX(-100%)";
        document.querySelector("body").classList.remove("stop-scroll");
    });

}());



//모바일 Market 클릭시 comming soon
commingText();
function commingText() {
    const mobileMarketBtn = document.querySelector(".mobi_side .comming");

    mobileMarketBtn.addEventListener("click", function () {
        // console.log(this);
        this.classList.add("on");
        this.textContent = "Comming Soon";
    });
    // console.log(mobileMarketBtn);
}

snsCommingText();
function snsCommingText() {
    const snsArea = document.querySelector(".side_sns ul");
    const snsAreaChildren = document.querySelectorAll(".side_sns ul li");
    const snsAreaComming = document.querySelector(".side_sns .comming");
    snsArea.addEventListener("click", function () {
        [...snsAreaChildren].forEach(e => {
            e.style.visibility = "hidden";
        });
        snsAreaComming.style.display = "block";

    });
}
