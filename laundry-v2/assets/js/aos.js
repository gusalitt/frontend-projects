if (window.innerWidth >= 768) {
	const elements = document.querySelectorAll("[data-aos]");

	const options = {
		threshold: 0.1,
	};

	const observerCallback = (entries) => {
		entries.forEach((entry) => {
			const animClass = entry.target.getAttribute("data-aos");
			if (entry.isIntersecting) {
				entry.target.classList.add(animClass);
			}  else {
				entry.target.classList.remove(animClass);
			}
		});
	};

	elements.forEach((element) => {
		element.classList.add("box");
		new IntersectionObserver(observerCallback, options).observe(element);
	});
}
