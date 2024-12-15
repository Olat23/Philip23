document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('wish-form');
    const wishesList = document.querySelector('#wishes-list ul');

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && message) {
            const listItem = document.createElement('li');
            listItem.textContent = `${name}: ${message}`;
            wishesList.appendChild(listItem);

            // Reset form fields
            form.reset();
        } else {
            alert('Please fill out both fields.');
        }
    });

    // Add balloons to the hero section
    const heroSection = document.querySelector('.hero');
    for (let i = 0; i < 5; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloons');
        heroSection.appendChild(balloon);
    }
});
