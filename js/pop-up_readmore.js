function readmore() {
    let dots = [];
    let moreText = [];
    let btnText = [];

    for (i = 0; i < 4; i++) {
        dots[i] = document.getElementsByClassName("dots")[i];
        moreText[i] = document.getElementsByClassName("pop-up__more-text")[i];
        btnText[i] = document.getElementsByClassName("btn__more-less")[i];
    }

    for (i = 0; i < 4; i++) {
        if (dots[i].style.display === "none") {

            dots[i].style.display = "inline";
            btnText[i].innerHTML = "Показать больше";
            moreText[i].style.display = "none";
        }
        else {
            dots[i].style.display = "none";
            btnText[i].innerHTML = "Скрыть";
            moreText[i].style.display = "inline";
        }
    }
}