document.addEventListener('DOMContentLoaded', () => {
    // Advanced Loading Screen
    const loadingOverlay = document.getElementById('loading-overlay');
    
    window.addEventListener('load', () => {
        gsap.to(loadingOverlay, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                loadingOverlay.style.display = 'none';
            }
        });
    });

    // Additional interactive elements
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // 3D tilt effect
        });
    });
});
