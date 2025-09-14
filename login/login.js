document.querySelector('.login').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    /// call backend API to authenticate user
    fetch('https://www.vanhnguyenx8.com/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).catch(err => {
        console.error('Error during fetch:', err);
        alert('An error occurred. Please try again later.');
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    }).then(data => {
        console.log('Login successful:', data);

        if (data['status_code'] === 200) {

            // Store token in localStorage
            localStorage.setItem('token', data.data.token);
            // Redirect to dashboard or another page
            window.location.href = './login_success.html';
        } else {
            alert('Login failed: ' + data.message);
        }
    }).catch(error => {
        console.error('There was a problem with the login request:', error);
        alert('An error occurred. Please try again later.');
    });
})();

