function checkPassword() {
    const password = document.getElementById('password').value;
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        number: /\d/.test(password),
        special: /[!@#$%^&*]/.test(password)
    };

    // Update requirement indicators
    Object.keys(requirements).forEach(key => {
        document.getElementById(key).className = requirements[key] ? 'valid' : 'invalid';
    });

    // Check if all requirements are met
    const valid = Object.values(requirements).every(v => v);
    document.getElementById('result').textContent = valid 
        ? 'Password is valid!' 
        : 'Password does not meet requirements';
}
