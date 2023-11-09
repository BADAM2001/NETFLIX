document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const emailPhoneInput = document.getElementById("email-phone");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submit-button");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        const inputValue = emailPhoneInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Basic email and phone number validation using regular expressions
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phonePattern = /^\d{10}$/; // Example: 10-digit phone number

        if (inputValue === '' || (!emailPattern.test(inputValue) && !phonePattern.test(inputValue))) {
            alert('Please enter a valid email address or phone number.');
            emailPhoneInput.focus();
            return;
        }

        if (passwordValue === '' || passwordValue.length < 6) {
            alert('Please enter a valid password (at least 6 characters).');
            passwordInput.focus();
            return;
        }

        // If the form passes validation, you can submit it to the server here
        // Example: form.submit();
    });
});