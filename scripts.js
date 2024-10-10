let currentSlide = [0, 0, 0, 0];  // Holds the current slide index for each slider (4 sections)

function toggleContent(id) {
    const content = document.getElementById(`content-${id}`);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeSlide(n, id) {
    const slides = document.querySelectorAll(`#slider-${id} .slide`);
    currentSlide[id - 1] += n;

    if (currentSlide[id - 1] >= slides.length) {
        currentSlide[id - 1] = 0;
    }
    if (currentSlide[id - 1] < 0) {
        currentSlide[id - 1] = slides.length - 1;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide[id - 1] * 100}%)`;
    });
}
