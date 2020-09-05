const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slide:first-child");

function slide(){
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            firstSlide.classList.add(SHOWING_CLASS);
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}

function open_small_menu(){
    console.log('hello');
    var menu_dot = document.getElementsByClassName('menu-dot');
    // $('#menu_dot').css('background-color','blue');
    menu_dot.style.setProperty('background-color','blue');
}

slide();
setInterval(slide, 3000);  

// 햄버거 메뉴 toggle
$(function() {
    $("#small-menu-toggle").on("click", function(){
        $("#small-menu-list").slideToggle("fast");
    });
});

// resize -> 햄버거 메뉴 slideup
$(function(){
    $(window).resize(function(){
        $("#small-menu-list").slideUp("fast");
    });
});

// 햄버거 메뉴 toggle
// const menu_dot = document.querySelector("#small-menu-toggle");
// const menu_list = document.querySelector("#small-menu-list");

// menu_dot.addEventListener("click", toggle);
// function toggle() {
//     menu_list.classList.toggle("on");
// }