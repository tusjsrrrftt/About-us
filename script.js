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
}