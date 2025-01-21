// wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            document.getElementByID(targetID).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementByID('name').value.trim();
        const email = document.getElementByID('email').value.trim();

        // Simple form validation
        if (name === '' || email === '') {
            alert('Please fill in all fields');
            return;
        }

        // Simulate form submission and reset
        alert('Thank you, ${name}! We will contact you at ${email}.');
        form.reset();
    });

    // Add a simple dyynamic content change example
    const aboutSection = document.getElementbyID('about');
    aboutSection.addEventListener('mouseover', () => {
        aboutSection.style.backgroundColor = '#e3f2fd';
    });

    aboutSection.addEventListener('mouseleave', () => {
        aboutSection.style.backgroundColor = '';
    });

    
});
