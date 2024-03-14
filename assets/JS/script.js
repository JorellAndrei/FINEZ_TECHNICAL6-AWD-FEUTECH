document.getElementById('validateButton').addEventListener('click', function() {
    var confirmPasswordField = document.getElementById('confirmPassword');
    var passwordField = document.getElementById('password');
    var notification = document.getElementById('notification');

    if (confirmPasswordField.value !== passwordField.value) {
        notification.textContent = 'Passwords do not match!';
        notification.style.display = 'block';
        confirmPasswordField.focus();
    } else {
        notification.style.display = 'none';
        // Proceed with form submission or further processing
        alert('Form submitted successfully!');
    }
});

$(document).ready(function() {
    $('#signupForm').submit(function(event) {
        event.preventDefault();

        var confirmPasswordField = $('#confirmPassword').val();
        var passwordField = $('#password').val();

        if (confirmPasswordField !== passwordField) {
            alert('Passwords do not match!');
            return; // Stop further execution
        }

        var formData = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            confirmPassword: $('#confirmPassword').val(),
            agree: $('#agree').prop('checked')
        };

        window.location.href = 'account.html?' + $.param(formData);
    });
});



document.getElementById('showPasswordButton').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Hide Password';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Show Password';
    }
});

document.getElementById('showPasswordButton').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    var passwordField2 = document.getElementById('confirmPassword');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Hide Password';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Show Password';
    }

    if (passwordField.type === 'password') {
        passwordField2.type = 'text';
        this.textContent = 'Hide Password';
    } else {
        passwordField2.type = 'password';
        this.textContent = 'Show Password';
    }
});