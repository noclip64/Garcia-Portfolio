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

form.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    const formData = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {

            form.reset(); 
            alert('Message sent! Thank you for the feedback.');
        } else {
            const data = await response.json();
            if (Object.hasOwn(data, 'errors')) {
                alert(data["errors"].map(error => error["message"]).join(", "));
            } else {
                alert('Oops! There was a problem sending your message.');
            }
        }
    } catch (error) {
        alert('Could not connect to the server. Please check your internet.');
    }
});