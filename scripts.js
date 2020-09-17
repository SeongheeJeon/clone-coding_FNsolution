const SHOWING_CLASS = "showing";
const slideCount = 3;
const firstSlide = document.querySelector(".slide:first-child"),
    lastSlide = document.querySelector(".slide:last-child"),
    pageNumber = document.querySelector(".present-page"),
    slideBtnNext = document.querySelector(".move.next .slideImg"),
    slideBtnPrev = document.querySelector(".move.prev .slideImg"),
    firstContent = document.querySelectorAll(".main .contents")[0],
    lastContent = document.querySelectorAll(".main .contents")[slideCount-1]
    ;

function slideContentFn(){
    const currentContent = document.querySelector(`.contents.${SHOWING_CLASS}`);
    if(currentContent){
        currentContent.classList.remove(SHOWING_CLASS);
        if(currentContent.id == slideCount){
            firstContent.classList.add(SHOWING_CLASS);
        } else {
            const nextContent = currentContent.nextElementSibling;
            nextContent.classList.add(SHOWING_CLASS);
        }
    } else {
        firstContent.classList.add(SHOWING_CLASS);
    }
}

function updateBtnImg(currentSlide){
    const id = parseInt(currentSlide.id);
    if(currentSlide.id==slideCount){
        slideBtnPrev.src = `./image/main${slideCount-1}.jpg`
        slideBtnNext.src = `./image/main${1}.jpg`
    } else if(currentSlide.id==1){
        slideBtnPrev.src = `./image/main${slideCount}.jpg`
        slideBtnNext.src = `./image/main${id+1}.jpg`
    } else {
        slideBtnPrev.src = `./image/main${id-1}.jpg`
        slideBtnNext.src = `./image/main${id+1}.jpg`
    }
}

function updatePageNumber(currentSlide){
    pageNumber.innerHTML = currentSlide.id;
}

function slide(){
    const currentSlide = document.querySelector(`.slider .${SHOWING_CLASS}`);
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(SHOWING_CLASS);
            updatePageNumber(nextSlide);
            updateBtnImg(nextSlide);
        } else {
            firstSlide.classList.add(SHOWING_CLASS);
            updatePageNumber(firstSlide);
            updateBtnImg(firstSlide);
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
        updatePageNumber(firstSlide);
        updateBtnImg(firstSlide);
    }
    slideContentFn();
}


// function open_small_menu(){
//     console.log('hello');
//     var menu_dot = document.getElementsByClassName('menu-dot');
//     // $('#menu_dot').css('background-color','blue');
//     menu_dot.style.setProperty('background-color','blue');
// }

slide();
let slideInterval = setInterval(slide, 3000);  

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