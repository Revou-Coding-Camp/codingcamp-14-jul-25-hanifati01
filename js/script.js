// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function validateForm() {
    const nameInput = document.getElementById('name-input');

    if (nameInput.value === '') {
        alert('Please enter your name.');
    } else {
        document.getElementById('message-output').innerHTML = `Thank you, ${nameInput.value}, for your message!`;
        nameInput.value = ''; // Clear the input field after submission
    }
}