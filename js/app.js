"use strict";

import { initializeDatePickers } from "./modules/datePickers";
import { initializeVehicleSelection } from "./modules/vehicleSelection";
import { initializeExtras } from "./modules/extras";
import { initializeCurrencyToggle } from "./modules/currency";
import { calculateTotals } from "./modules/calculations";

window.Webflow ||= [];
window.Webflow.push(() => {
  // Initialize form handling
  const initializeBookingForm = () => {
    const form = document.querySelector("#booking_form");
    if (!form) return;

    // Initialize all modules
    initializeDatePickers();
    initializeVehicleSelection();
    initializeExtras();
    initializeCurrencyToggle();

    // Add form submission handler
    handleFormSubmission();
  };

  // Handle form submission
  const handleFormSubmission = () => {
    const form = document.querySelector("#wf-form-Booking-form");

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add your form submission logic here
    });
  };

  // Call initialization
  initializeBookingForm();
});
