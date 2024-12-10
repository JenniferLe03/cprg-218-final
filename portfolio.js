document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const error = document.getElementById('error');
    const form = document.getElementById('contact_form');

    messageInput.addEventListener('input', () => {
        const currentLength = messageInput.value.length;
        charCount.textContent = `${currentLength}/300`;
    
        if (currentLength > 250) {
            charCount.style.color = 'red';
        } else {
            charCount.style.color = '#666';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            error.style.display = 'block'; 
            emailInput.focus();
        } else {
            error.style.display = 'none'; 
            alert("Submission complete - we'll take it from here!"); 
            form.reset();
            charCount.textContent = '0/300'; 
            charCount.style.color = '#666'; 
        }
    });
});