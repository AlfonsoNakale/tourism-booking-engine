export function initializeExtras() {
  // Initialize any additional features or components

  // Example: Add input validation
  const inputFields = document.querySelectorAll('input[id^="i-"]');
  inputFields.forEach((field) => {
    field.addEventListener("input", validateInput);
  });
}

function validateInput(event) {
  const input = event.target;
  const value = input.value;

  // Add custom validation logic based on input type
  switch (input.type) {
    case "email":
      validateEmail(input, value);
      break;
    case "tel":
      validatePhone(input, value);
      break;
    // Add more validation cases as needed
  }
}

function validateEmail(input, value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    input.setCustomValidity("Please enter a valid email address");
  } else {
    input.setCustomValidity("");
  }
}

function validatePhone(input, value) {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  if (!phoneRegex.test(value)) {
    input.setCustomValidity("Please enter a valid phone number");
  } else {
    input.setCustomValidity("");
  }
}
