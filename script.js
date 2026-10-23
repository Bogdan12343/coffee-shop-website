document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    const statCards = document.querySelectorAll('.stat-card h2');
    let animated = false;

    function animateCounters() {
        statCards.forEach(card => {
            const rawText = card.innerText;
            const targetNumber = parseInt(rawText.replace(/\D/g, ''));
            const suffix = rawText.replace(/[0-9]/g, ''); 

            if (isNaN(targetNumber)) return;

            let current = 0;
            const increment = Math.ceil(targetNumber / 40);
            const timer = setInterval(() => {
                current += increment;
                if (current >= targetNumber) {
                    card.innerText = targetNumber + suffix;
                    clearInterval(timer);
                } else {
                    card.innerText = current + suffix;
                }
            }, 30);
        });
    }

    setTimeout(animateCounters, 300);
});