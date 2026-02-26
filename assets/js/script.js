// Swiper Carousel Init (for Home Hero)
const swiper = new Swiper('.swiper', {
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true,
    pagination: { el: '.swiper-pagination' },
});

// Scroll Trigger for Wireframe/Animations
const sections = document.querySelectorAll('.wireframe-trigger');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});
sections.forEach(section => observer.observe(section));

// Simple Parallax (for elements)
window.addEventListener('scroll', () => {
    document.querySelectorAll('.parallax').forEach(el => {
        const speed = 0.5;
        el.style.backgroundPositionY = (window.scrollY * speed) + 'px';
    });
});

// Form Submit (dummy, add real backend later)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Form Submitted!');
    });
});
