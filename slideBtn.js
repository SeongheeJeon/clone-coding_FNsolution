const slideNextBtn = document.querySelector(".move.next"),
    slidePrevBtn = document.querySelector(".move.prev");


function moveNextEvent(){
    console.log("clicked next btn");
    clearInterval(slideInterval);
    slide();
    console.log(clearInterval);
    slideInterval = setInterval(slide, 3000);
}


function movePrevEvent(){
    clearInterval(slideInterval);
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

    currentSlide.classList.remove(SHOWING_CLASS);
    const prevSlide = currentSlide.previousElementSibling;
    if(prevSlide){
        prevSlide.classList.add(SHOWING_CLASS);
        updatePageNumber(prevSlide);
    } else {
        lastSlide.classList.add(SHOWING_CLASS);
        updatePageNumber(lastSlide);
    }
    slideInterval=setInterval(slide,3000);
}

function init(){
    slideNextBtn.addEventListener("click", moveNextEvent);
    slidePrevBtn.addEventListener("click", movePrevEvent);
}

init();