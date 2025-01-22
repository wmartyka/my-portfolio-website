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
        event.preventDefault();
        console.log("Form submission event detected.");

        // Get input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!name || !email) {
            alert('All fields are required.');
            console.warn("Validation failed: Missing fields.");
            return;
        }

        console.log("Submitting form data:", { name, email });

        try {
            const response = await fetch('https://my-portfolio-backend-kia5.onrender.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }

            const result = await response.json();
            alert(result.message);
            console.log("Form submitted successfully:", result);
            form.reset();

        } catch (error) {
            console.error("Error during form submission:", error);
            alert(error.message || 'Error submitting form. Please try again later.');
        }
    });

    console.log("Form event listener attached.");
});
