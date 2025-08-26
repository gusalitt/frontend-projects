const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const slide = document.querySelector(".carousel-box");

const box = document.querySelector(".carousel-box li.col-12");
const boxWidth = box.getBoundingClientRect().width + 10;

function updateSlide(type = null) {
    if (type === "next") {
        let newScrollLeft = slide.scrollLeft + boxWidth;
        slide.scrollTo({left: Math.round(newScrollLeft), behavior: "smooth"});
    }

    if (type === "prev") {
        let newScrollLeft = slide.scrollLeft - boxWidth;
        slide.scrollTo({left: Math.round(newScrollLeft), behavior: "smooth"});
    }
}

next.addEventListener("click", () => {
    updateSlide("next");
});

prev.addEventListener("click", () => {
    updateSlide("prev");
});