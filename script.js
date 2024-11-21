document.addEventListener('DOMContentLoaded', (event) => {
    // Show main content after loading animation
    setTimeout(() => {
        document.querySelector('main').style.display = 'block';
    }, 6000); // 6000ms = 5s for animation + 1s for fade out

    // Create star animations
    const starAnimations = document.querySelectorAll('.star-animation');

    starAnimations.forEach(container => {
        const speed = container.classList.contains('slow') ? 50 :
                      container.classList.contains('medium') ? 30 : 15;

        createStars(container, 100, speed);
    });
});

function createStars(container, count, speed) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        const duration = (Math.random() * 3 + 2) * speed;
        star.style.animationDuration = `${duration}s`;

        star.style.animationDelay = `${Math.random() * duration}s`;

        container.appendChild(star);
    }
// Remove loading screen when the page is fully loaded
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 50) {
            element.classList.add('show');
        }
    });
};

// Throttle function to limit the rate at which a function can fire
const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Apply throttling to the scroll event
window.addEventListener('scroll', throttle(animateOnScroll, 100));

// Initial animation check on page load
window.addEventListener('load', animateOnScroll);

// Typing effect for the header
const typeWriter = (text, element, speed = 100) => {
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
};

// Apply typing effect to the header
window.addEventListener('load', () => {
    const headerTitle = document.querySelector('header h1');
    const headerSubtitle = document.querySelector('header p');

    if (headerTitle && headerSubtitle) {
        headerTitle.innerHTML = '';
        headerSubtitle.innerHTML = '';
        setTimeout(() => typeWriter(headerTitle.getAttribute('data-text'), headerTitle), 500);
        setTimeout(() => typeWriter(headerSubtitle.getAttribute('data-text'), headerSubtitle), 2000);
    }
});

// Form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value === '' || email.value === '' || message.value === '') {
            alert('Please fill in all fields');
        } else {
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        }
    });
}

// Add parallax effect to the header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.pageYOffset;
    header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

}