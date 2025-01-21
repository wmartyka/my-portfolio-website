document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required.');
        return;
    }

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
    } catch (error) {
        alert(error.message || 'Error submitting form. Please try again.');
    }
});
