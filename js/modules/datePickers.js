import flatpickr from "flatpickr";
import { updateDateDisplay } from "./displayCalculations";

// Add this function to handle pickup location visibility and values
function initializePickupLocation() {
  // Get DOM elements
  const pickupConfirmation = document.querySelector("#pickup-confirmation");
  const pickupLocation = document.querySelector("#i-pickup-location");
  const returnLocation = document.querySelector("#i-return-location");
  const deliveryFeeElement = document.querySelector("#v-calc-delivery-fee");
  const vPickupLocation = document.querySelector("#v-pickup-location");
  const vReturnLocation = document.querySelector("#v-return-location");

  // Set initial state - hidden by default
  pickupLocation.closest(".input-dropdown").style.display = "none";
  returnLocation.closest(".input-dropdown").style.display = "none";

  // Add event listener to select fields to update display values
  pickupLocation.addEventListener("change", function () {
    // Only update if a real option is selected (not the placeholder)
    if (this.selectedIndex !== 0) {
      vPickupLocation.textContent = this.options[this.selectedIndex].text;
    }
  });

  returnLocation.addEventListener("change", function () {
    // Only update if a real option is selected (not the placeholder)
    if (this.selectedIndex !== 0) {
      vReturnLocation.textContent = this.options[this.selectedIndex].text;
    }
  });

  // Add event listener to checkbox
  pickupConfirmation.addEventListener("change", function () {
    // Toggle visibility based on checkbox state
    const displayStyle = this.checked ? "block" : "none";
    pickupLocation.closest(".input-dropdown").style.display = displayStyle;
    returnLocation.closest(".input-dropdown").style.display = displayStyle;

    // Set delivery fee based on checkbox state
    deliveryFeeElement.textContent = this.checked ? "250.00" : "0.00";

    if (!this.checked) {
      // Reset values when unchecked
      pickupLocation.selectedIndex = 0;
      returnLocation.selectedIndex = 0;
      vPickupLocation.textContent = "-";
      vReturnLocation.textContent = "-";
    }
  });
}

// Helper function to set select value based on text
function setSelectValue(selectElement, text) {
  for (let option of selectElement.options) {
    if (option.text === text) {
      selectElement.value = option.value;
      break;
    }
  }
}

export function initializeDatePickers() {
  let pickupDateInstance;
  let returnDateInstance;

  // Pickup Date Configuration
  const pickupDateConfig = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today",
    time_24hr: true,
    minuteIncrement: 30,
    onChange: function (selectedDates, dateStr) {
      // Update return date min date when pickup date changes
      if (returnDateInstance) {
        returnDateInstance.set("minDate", dateStr);

        // If return date is earlier than new pickup date, clear it
        const returnDate = returnDateInstance.selectedDates[0];
        if (returnDate && returnDate < selectedDates[0]) {
          returnDateInstance.clear();
          showDateAlert(
            "Return date cannot be earlier than pickup date. Please select a new return date."
          );
        }
      }
      updateDateDisplay();
    },
  };

  // Return Date Configuration
  const returnDateConfig = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today",
    time_24hr: true,
    minuteIncrement: 30,
    onChange: function (selectedDates, dateStr) {
      const pickupDate = pickupDateInstance.selectedDates[0];

      // Validate return date is after pickup date
      if (pickupDate && selectedDates[0] < pickupDate) {
        returnDateInstance.clear();
        showDateAlert(
          "Return date cannot be earlier than pickup date. Please select a valid date."
        );
        return;
      }
      updateDateDisplay();
    },
  };

  // Initialize pickup and return date pickers
  pickupDateInstance = flatpickr("#i-pickup-date", pickupDateConfig);
  returnDateInstance = flatpickr("#i-return-date", returnDateConfig);

  // Date of Birth Configuration
  const dobConfig = {
    dateFormat: "Y-m-d",
    maxDate: new Date(),
    yearRange: [1900, new Date().getFullYear()],
  };

  // Expiration Date Configuration
  const expirationConfig = {
    dateFormat: "Y-m-d",
    minDate: "today",
  };

  // Initialize other date pickers
  flatpickr("#i-date-of-birth", dobConfig);
  flatpickr("#i-expiration-date", expirationConfig);

  // Add this line at the end of the function
  initializePickupLocation();
}

// Function to show date validation alert
function showDateAlert(message) {
  // Find the return date error alert element
  const errorAlert = document
    .querySelector("#i-return-date")
    .closest(".f-field-wrapper")
    .querySelector(".error-alert-bg");

  // Update error message
  errorAlert.querySelector(".error-alert-text").textContent = message;

  // Show the error
  errorAlert.classList.remove("is-hidden");

  // Hide the error after 5 seconds
  setTimeout(() => {
    errorAlert.classList.add("is-hidden");
  }, 5000);
}
