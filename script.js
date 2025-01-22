document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and script running...");

    // Update footer year dynamically
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
        console.log("Year updated successfully.");
    } else {
        console.error("Year element not found in the DOM.");
    }

    // Form submission handling
    const form = document.getElementById('contactForm');

    if (!form) {
        console.error("Form element not found.");
        return;
    }

    form.addEventListener('submit', async function(event) {
        event.preventDefault();  // Prevent page reload
        console.log("Form submission event detected.");

        // Get input values
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (!name || !email || !message) {
            console.error("One or more form elements not found.");
            return;
        }

        const formData = {
            name: name.value.trim(),
            email: email.value.trim(),
            message: message.value.trim()
        };

        // Basic form validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('All fields are required.');
            console.warn("Validation failed: Missing fields.");
            return;
        }

        console.log("Sending form data:", formData);

        try {
            const response = await fetch('https://my-portfolio-backend-kia5.onrender.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            console.log("Request sent, awaiting response...");

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }

            const result = await response.json();
            alert(result.message);
            console.log("Form submitted successfully:", result);
            form.reset();  // Clear form fields after successful submission

        } catch (error) {
            console.error("Error during form submission:", error);
            alert(error.message || 'Error submitting form. Please try again later.');
        }
    });

    console.log("Form event listener attached successfully.");
});
