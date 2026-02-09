
document.addEventListener('DOMContentLoaded', () => {

    // Effet de texte tapé
    const typedText = document.querySelector('.typed-text');
    if (typedText) {
        const text = "Étudiant en BTS SIO SLAM"; // The text was hardcoded in HTML but rewritten by JS. 
        // Actually, the original code read the text content then cleared it. 
        // Let's keep the original logic to be safe, but improve it.
        // Original: const text = typedText.textContent; typedText.textContent = '';

        const textContent = typedText.textContent;
        typedText.textContent = '';
        let i = 0;
        function type() {
            if (i < textContent.length) {
                typedText.textContent += textContent.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        setTimeout(type, 500);
    }

    // Animation au scroll
    function revealElements() {
        const elements = document.querySelectorAll('.option-card, .timeline-item, .skill-card');
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', revealElements);
    revealElements(); // Run once on load

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Swiper compétences
    // Encapsulate in a try-catch or check if Swiper is defined to prevent errors if library fails to load
    if (typeof Swiper !== 'undefined') {
        const skillsSwiper = new Swiper('.mySkillsSwiper', {
            loop: true,
            navigation: {
                nextEl: '.mySkillsSwiper .swiper-button-next',
                prevEl: '.mySkillsSwiper .swiper-button-prev',
            },
            slidesPerView: 1,
            centeredSlides: true,
            // Add breakpoints for responsiveness if needed, but original code didn't have them. 
            // Keeping it simple as per instructions "sans modifier quoique ce soit (visually)".
        });
    } else {
        console.warn('Swiper library not loaded.');
    }
});
