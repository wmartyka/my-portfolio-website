document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded and DOM fully loaded");

    const form = document.getElementById('contactForm');

    if (!form) {
        console.error("Form element not found.");
        return;
    }

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        // Get input values
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (!nameInput || !emailInput || !messageInput) {
            console.error("One or more form elements not found.");
            return;
        }

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Basic form validation
        if (!name || !email || !message) {
            alert('All fields are required.');
            return;
        }

        console.log("Submitting form with data:", { name, email, message });

        try {
            const response = await fetch('https://my-portfolio-backend-kia5.onrender.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }

            const result = await response.json();
            alert(result.message);
            form.reset();  // Clear form after successful submission

        } catch (error) {
            console.error("Error during form submission:", error);
            alert(error.message || 'Error submitting form. Please try again later.');
        }
    });
});
