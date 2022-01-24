let prevScrollpos = window.pageYOffset,
header = document.querySelector('.header');


window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
        document.querySelector('.opt').style.display = 'none'
    }
    prevScrollpos = currentScrollPos;
}
