document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const error = document.getElementById('error');
    const form = document.getElementById('contact_form');

    messageInput.addEventListener('input', () => {
        const currentLength = messageInput.value.length;
        charCount.textContent = `${currentLength}/300`;

        charCount.style.color = currentLength > 250 ? 'red' : '#666';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            error.style.display = 'block';
        } else {
            error.style.display = 'none';
            alert("Thanks for saying hello! I can't wait to chat with you soon.");
            form.reset();
            charCount.textContent = '0/300';
            charCount.style.color = '#666';
        }
    });
});
