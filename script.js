document.addEventListener('DOMContentLoaded', () => {
    const typedText = document.querySelector('.typed-text');
    const text = typedText.textContent;
    typedText.textContent = '';

    function typeText(text, element, speed = 100) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    typeText(text, typedText);
});
