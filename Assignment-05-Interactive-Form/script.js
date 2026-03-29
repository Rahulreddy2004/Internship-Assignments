document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from submitting

    // Get Values
    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value.trim();

    // Reset Errors
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = "");
    document.getElementById('successMsg').innerText = "";

    let isValid = true;

    // 1. Name Validation
    if (name === "") {
        document.getElementById('nameError').innerText = "Name is required";
        isValid = false;
    }

    // 2. Email Validation (Regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Enter a valid email address";
        isValid = false;
    }

    // 3. Password Validation
    if (pass.length < 8) {
        document.getElementById('passError').innerText = "Password must be at least 8 characters";
        isValid = false;
    }

    // Success Message
    if (isValid) {
        document.getElementById('successMsg').innerText = "✅ Form Submitted Successfully!";
        this.reset(); // Clear the form
    }
});