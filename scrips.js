document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Formulier is ingediend!');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Bedankt! Je bericht is verzonden.');
        this.reset();
    } else {
        alert('Vul alle velden in.');
    }
});
