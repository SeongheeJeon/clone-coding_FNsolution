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
    const currentSlide = document.querySelector(`.slider .${SHOWING_CLASS}`);

    currentSlide.classList.remove(SHOWING_CLASS);
    const prevSlide = currentSlide.previousElementSibling;
    if(prevSlide){
        prevSlide.classList.add(SHOWING_CLASS);
        updatePageNumber(prevSlide);
        updateBtnImg(prevSlide);
    } else {
        lastSlide.classList.add(SHOWING_CLASS);
        updatePageNumber(lastSlide);
        updateBtnImg(lastSlide);
    }

    // Contents slide
    const currentContent = document.querySelector(`.contents.${SHOWING_CLASS}`);

    currentContent.classList.remove(SHOWING_CLASS);
    if(currentContent.id==1){
        lastContent.classList.add(SHOWING_CLASS);
    } else {
        const prevContent = currentContent.previousElementSibling;
        prevContent.classList.add(SHOWING_CLASS);
    }
    slideInterval=setInterval(slide,3000);
}

function init(){
    slideNextBtn.addEventListener("click", moveNextEvent);
    slidePrevBtn.addEventListener("click", movePrevEvent);
}

init();