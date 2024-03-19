document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    displayNotification('Successfully logged in');
});

function displayNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.classList.add('notification');
    document.body.appendChild(notification);
    setTimeout(function() {
        document.body.removeChild(notification);
    }, 3000);
}
