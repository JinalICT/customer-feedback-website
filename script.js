document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', function(event) {
        let valid = true;

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === "") {
            valid = false;
            alert("Please enter a username.");
        }

        if (password === "") {
            valid = false;
            alert("Please enter a password.");
        }

        if (!valid) {
            event.preventDefault();
        } else {
            // Change button text and disable it to prevent multiple submissions
            submitBtn.value = "Logging in...";
            submitBtn.disabled = true;
        }
    });
});
