// wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            document.getElementById(targetID).scrollIntoView({
                behavior: 'smooth'
        });
    });

    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            // Get form values
            const nameElement = document.getElementById('name');
            const name = nameElement ? nameElement.value.trim() : '';
            const emailElement = document.getElementById('email');
            const email = emailElement ? emailElement.value.trim() : '';

            // Simple form validation
            if (name === '' || email === '') {
                alert('Please fill in all fields');
                return;
            }

            // Simulate form submission and reset
            alert(`Thank you, ${name}! We will contact you at ${email}.`);
            form.reset();
        });
    }

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.addEventListener('mouseover', () => {
            aboutSection.style.backgroundColor = '#e3f2fd';
        });

        aboutSection.addEventListener('mouseleave', () => {
            aboutSection.style.backgroundColor = '';
        });
    }
    });

    // Set the current year in the footer
    document.querySelector('footer p').textContent = `© ${new Date().getFullYear()} My Portfolio`;

    document.querySelector('form').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
    
        const response = await fetch('https://my-portfolio-backend-kia5.onrender.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, email: email })
        });
    
        const result = await response.json();
        alert(result.message);
    });
    


    
});
