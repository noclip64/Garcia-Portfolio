document.addEventListener("DOMContentLoaded", () => {
    const fills = document.querySelectorAll('.fill');
    fills.forEach(bar => {
        const targetWidth = bar.getAttribute('data-percent');

        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300);
    });
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stops the page from reloading

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(() => {
        alert("Message sent! Thank you for the feedback.");
        form.reset(); // Clears the form to blank
    });
});