
let prevScrollpos = window.pageYOffset,
header = document.getElementsByClassName('header')[0],
menu_opt = document.getElementsByClassName("opt")[0];
menu_opt.style.display = "none";
window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
        document.getElementById("search-query").style.display = "none";
        menu_opt.style.display = "none";
        // menu_opt.setAttribute("src","/images/PinClipart.com_menu-clip-art_1128307.png");
    }
    prevScrollpos = currentScrollPos;
}

document.getElementsByClassName('img')[0].addEventListener('click',()=>{
     menu_opt.style.display = "block";
    //  menu_opt.setAttribute("src","/images/null.jpeg");
})
