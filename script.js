// for form validation
function validateForm() {
    const message = document.getElementById("message").value;
    if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}


