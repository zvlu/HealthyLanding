document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });

    // Add interactive scroll effect for hero
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            hero.style.backgroundPositionY = `-${scrollPosition / 2}px`;
        } else {
            hero.style.backgroundPositionY = 'center';
        }
    });

    // Animate gallery items when they come into view
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0 });
});