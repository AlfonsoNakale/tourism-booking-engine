import flatpickr from "flatpickr";
import { updateDateDisplay } from "./displayCalculations";

export function initializeDatePickers() {
  // Pickup and Return Date Configuration
  const pickupDateConfig = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today",
    time_24hr: true,
    minuteIncrement: 30,
    onChange: updateDateDisplay,
  };

  // Initialize pickup and return date pickers
  flatpickr("#i-pickup-date", pickupDateConfig);
  flatpickr("#i-return-date", pickupDateConfig);

  // Date of Birth Configuration
  const dobConfig = {
    dateFormat: "Y-m-d",
    maxDate: new Date(),
    yearRange: [1900, new Date().getFullYear()],
  };

  // Initialize date of birth picker
  flatpickr("#i-date-of-birth", dobConfig);

  // Expiration Date Configuration
  const expirationConfig = {
    dateFormat: "Y-m-d",
    minDate: "today",
  };

  // Initialize expiration date picker
  flatpickr("#i-expiration-date", expirationConfig);
}
