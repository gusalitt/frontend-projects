// To hide or show sidebar in mobile device
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.mobile').classList.toggle('show');
});

function updateSlide(type, slide, item) {
    if (type == "next") {
        let newScroll = slide.scrollLeft + item;
        slide.scrollTo({left: Math.round(newScroll), behavior: "smooth"});
    }

    if (type == "prev") {
        let newScroll = slide.scrollLeft - item;
        slide.scrollTo({left: Math.round(newScroll), behavior: "smooth"});
    }
}

// Carousel in Layanan Section.
const layananSlide = document.querySelector('.layanan .scroll-hidden');
const layananItem = document.querySelector('.layanan .scroll-hidden .card').getBoundingClientRect().width + 25;
document.querySelector('.layanan #prev').addEventListener('click', updateSlide.bind(null, 'prev', layananSlide, layananItem));
document.querySelector('.layanan #next').addEventListener('click', updateSlide.bind(null, 'next', layananSlide, layananItem));

// Carousel in Feedback Section.
const feedSlide = document.querySelector('.feed .scroll-hidden');
const feedItem = document.querySelector('.feed .scroll-hidden .card').getBoundingClientRect().width + 25;
document.querySelector('.feed #prev').addEventListener('click', updateSlide.bind(null, 'prev', feedSlide, feedItem));
document.querySelector('.feed #next').addEventListener('click', updateSlide.bind(null, 'next', feedSlide, feedItem));

// AOS
if (window.innerWidth >= 768) {
    const elements = document.querySelectorAll('[data-aos]');
    const navbar = document.querySelector('.nav').getBoundingClientRect().height + 30;
    const option = {
        threshold: 0,
        rootMargin: `${navbar}px 0px ${navbar}px 0px`
    }

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            let value = entry.target.getAttribute('data-aos');
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add(value);
                }, 200);
            } else {
                entry.target.classList.remove(value);
            }
        });
    };

    elements.forEach(elem => {
        elem.classList.add('aos');
        new IntersectionObserver(observerCallback, option).observe(elem);
    })
}