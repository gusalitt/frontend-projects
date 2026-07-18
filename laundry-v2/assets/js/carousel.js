const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slide = document.querySelector(".carousel-box");
let isScrollingRight = true;
let autoScrollInterval;
let autoScrollTimeout;
let autoScrollDelay = 1000;
let userActionDelay = 2000;
let isAutoScrollActive = false;

function updateSlide(type = null) {
	const box = document.querySelector(".carousel-box .card");
	const boxWidth = Math.ceil(box.getBoundingClientRect().width);

	if (type === "next") {
		slide.scrollLeft += boxWidth;
	}

	if (type === "prev") {
		slide.scrollLeft -= boxWidth;
	}
}

function startAutoScroll() {
	if (isAutoScrollActive || isDragging) return;
	isAutoScrollActive = true;

	autoScrollInterval = setInterval(() => {
		const slideWidth = slide.getBoundingClientRect().width;

		if (isScrollingRight && slide.scrollLeft >= slide.scrollWidth - slideWidth - 2) {
			isScrollingRight = false;
		}
		if (!isScrollingRight && slide.scrollLeft <= 0) {
			isScrollingRight = true;
		}

		updateSlide(isScrollingRight ? "next" : "prev");
	}, autoScrollDelay);
}

function stopAutoScroll() {
	clearInterval(autoScrollInterval);
	isAutoScrollActive = false;
}

function delayAutoScroll() {
	clearTimeout(autoScrollTimeout);
	autoScrollTimeout = setTimeout(startAutoScroll, userActionDelay);
}

next.addEventListener("click", () => {
	stopAutoScroll();
	isScrollingRight = true;

	updateSlide("next");
	delayAutoScroll();
});

prev.addEventListener("click", () => {
	stopAutoScroll();
	isScrollingRight = false;

	updateSlide("prev");
	delayAutoScroll();
});

// For mouese drag
let startX, scrollLeft;
let isDragging = false;

function handleMouserDown(e) {
	isDragging = true;
	startX = e.pageX - slide.offsetLeft;
	scrollLeft = slide.scrollLeft;
	slide.style.cursor = "grabbing";

	stopAutoScroll();
}

function handleMouseMove(e) {
	if (!isDragging) return;
	e.preventDefault();

	const x = e.pageX - slide.offsetLeft;
	const walk = (x - startX) * 3;
	slide.scrollLeft = scrollLeft - walk;

	stopAutoScroll();
}

function handleMouseUpOrLeave() {
	isDragging = false;
	slide.style.cursor = "grab";

	delayAutoScroll();
}

slide.addEventListener("mousedown", handleMouserDown);
slide.addEventListener("mousemove", handleMouseMove);
slide.addEventListener("mouseup", handleMouseUpOrLeave);
slide.addEventListener("mouseleave", handleMouseUpOrLeave);

startAutoScroll();
