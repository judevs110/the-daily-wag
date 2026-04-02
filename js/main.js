// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        sideMenu.classList.remove('hidden-menu');
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sideMenu.classList.add('hidden-menu');
    });
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.add('hidden-menu');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('py-2');
        } else {
            nav.classList.remove('py-2');
        }
    }
});

// Highlight active nav link based on current page
(function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a[data-page]').forEach(link => {
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
})();

// Booking form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('booking-form');
    const message = document.getElementById('form-message');
    if (form && message) {
        form.style.display = 'none';
        message.style.display = 'block';
    }
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-btn');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (btn) {
        btn.addEventListener('click', () => {
            const isOpen = answer.classList.contains('open');
            // Close all
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
            document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('open'));
            // Open clicked if it was closed
            if (!isOpen) {
                answer.classList.add('open');
                icon.classList.add('open');
            }
        });
    }
});
