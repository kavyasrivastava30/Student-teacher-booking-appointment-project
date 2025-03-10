document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Mock validation (in a real-world application, you would verify credentials against a database)
    if (username && password) {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.appointment-container').style.display = 'block';
        document.getElementById('roleName').textContent = role.charAt(0).toUpperCase() + role.slice(1);

        if (role === 'student') {
            document.getElementById('studentContent').style.display = 'block';
            document.getElementById('teacherContent').style.display = 'none';
        } else {
            document.getElementById('studentContent').style.display = 'none';
            document.getElementById('teacherContent').style.display = 'block';
        }
    } else {
        alert('Please enter a valid username and password');
    }
});

function bookAppointment() {
    const teacher = document.getElementById('teacherSelect').value;
    alert('You have booked an appointment');
}
