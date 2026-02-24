
document.addEventListener('DOMContentLoaded', () => {

    // Effet de texte tapé
    const typedText = document.querySelector('.typed-text');
    if (typedText) {
        const textContent = "Étudiant en BTS SIO SLAM"; // Use fixed text to be safe
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

    // Menu Burger Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('is-active');
            });
        });
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
    if (typeof Swiper !== 'undefined') {
        const skillsSwiper = new Swiper('.mySkillsSwiper', {
            loop: true,
            navigation: {
                nextEl: '.mySkillsSwiper .swiper-button-next',
                prevEl: '.mySkillsSwiper .swiper-button-prev',
            },
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
        });
    } else {
        console.warn('Swiper library not loaded.');
    }
});
