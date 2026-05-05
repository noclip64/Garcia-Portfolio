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

form.onsubmit = function() {
    alert("Message sent! Thank you for the feedback.");
};