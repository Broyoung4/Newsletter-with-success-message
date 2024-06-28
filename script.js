const emailInput = document.querySelector('input[type="email"]'); // Select the email input field
const errorText = document.querySelector('#error-message'); // Select the error text element
emailInput.addEventListener('blur', validateEmail); // Add blur event listener
const emailAddress = document.querySelector('#email-address'); // show the email address element
const successMessage = document.querySelector('#success-message'); // select the success message element
const closeBtn = document.querySelector('#close-message'); // select the close button

function validateEmail() {
  const email = emailInput.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

  if (regex.test(email)) {
    emailInput.style.borderColor = 'green'; // Valid email
    emailAddress.innerHTML = email; // Show the email address
    successMessage.style.display = 'flex'; // Show the success message
  } else {
    emailInput.style.borderColor = 'red'; // Invalid email
    emailInput.style.backgroundColor = 'hsl(4, 100%, 67%)';
    errorText.style.display = 'block'; // Show the error text
    // Invalid email
  }
}

closeBtn.addEventListener('click', () => {
  successMessage.style.display = 'none'; // Hide the success message';
})
