// CARROUSEL //


document.addEventListener('DOMContentLoaded', () => {

    const carousel = document.querySelector('.carrousel');
    const slides = document.querySelectorAll('.carrousel-slide');
    const prevBtn = document.querySelector('.carrousel-btn--prev');
    const nextBtn = document.querySelector('.carrousel-btn--next');

    // Vérification
    if (!carousel) {
        console.error("Le carrousel est introuvable.");
        return;
    }

    if (slides.length === 0) {
        console.error("Aucun slide trouvé.");
        return;
    }

    let current = 0;

    function getIndex(i) {
        return (i + slides.length) % slides.length;
    }

    function updateCarousel() {

        slides.forEach(slide => {
            slide.classList.remove(
                'active',
                'prev',
                'next'
            );
        });

        slides[getIndex(current)].classList.add('active');
        slides[getIndex(current - 1)].classList.add('prev');
        slides[getIndex(current + 1)].classList.add('next');

        // La quatrième image
        slides[getIndex(current + 2)].classList.add('hidden');
    }

    function nextSlide() {
        current = getIndex(current + 1);
        updateCarousel();
    }

    function prevSlide() {
        current = getIndex(current - 1);
        updateCarousel();
    }

    let interval = setInterval(nextSlide, 2500);

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 2500);
    }

    // Bouton suivant
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
    }

    // Bouton précédent
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }

    updateCarousel();
});


// Caroussel 2 //

document.addEventListener('DOMContentLoaded', () => {

    const carousel = document.querySelector('.carrousel2');
    const slides = document.querySelectorAll('.carrousel-slide2');
    const prevBtn = document.querySelector('.carrousel-btn--prev2');
    const nextBtn = document.querySelector('.carrousel-btn--next2');

    // Vérification
    if (!carousel) {
        console.error("Le carrousel est introuvable.");
        return;
    }

    if (slides.length === 0) {
        console.error("Aucun slide trouvé.");
        return;
    }

    let current = 0;

    function getIndex(i) {
        return (i + slides.length) % slides.length;
    }

    function updateCarousel() {

        slides.forEach(slide => {
            slide.classList.remove(
                'active',
                'prev',
                'next'
            );
        });

        slides[getIndex(current)].classList.add('active');
        slides[getIndex(current - 1)].classList.add('prev');
        slides[getIndex(current + 1)].classList.add('next');

        // La quatrième image
        slides[getIndex(current + 2)].classList.add('hidden');
    }

    function nextSlide() {
        current = getIndex(current + 1);
        updateCarousel();
    }

    function prevSlide() {
        current = getIndex(current - 1);
        updateCarousel();
    }

    let interval = setInterval(nextSlide, 2500);

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 2500);
    }

    // Bouton suivant
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
    }

    // Bouton précédent
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }

    updateCarousel();
});
