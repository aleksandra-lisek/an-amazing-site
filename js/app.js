document.addEventListener("DOMContentLoaded", function() {
    const prev = document.querySelector(".prev");
    const next = document.querySelector('.next');
    let slideIndex = 1;

//function which change "display" of divs with reviews
    const ShowSlides = (n) => {
        let i;
        const slides = document.getElementsByClassName("review-box");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "flex";
    }

// function which choose next review
        const NextSlides = () => {
            let n = 1;

            ShowSlides(slideIndex += n);
        };

// function which choose previous review

        const PrevSlides = () => {
            let n = -1;

            ShowSlides(slideIndex += n);
        };

    prev.addEventListener("click", PrevSlides);
    next.addEventListener("click", NextSlides);



});
