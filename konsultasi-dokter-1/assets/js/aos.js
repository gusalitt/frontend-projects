if (window.innerWidth >= 768) {
    const elements = document.querySelectorAll('[data-aos]');
    const navbarHeight = document.querySelector('nav.navbar').getBoundingClientRect().height;
    const options = {
        threshold: 0,
        rootMargin: `${navbarHeight}px 0px ${navbarHeight}px 0px`,
    }

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const valueAttr = entry.target.getAttribute('data-aos');
            if (entry.isIntersecting) {
                entry.target.classList.add(valueAttr);
            } else {
                entry.target.classList.remove(valueAttr);
            }
        })
    }

    elements.forEach(element => {
        element.classList.add('aos');
        new IntersectionObserver(observerCallback, options).observe(element);
    })
}