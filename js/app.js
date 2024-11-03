"use strict";

import { initializeDatePickers } from "./modules/datePickers";
import { initializeVehicleSelection } from "./modules/vehicleSelection";
import { initializeExtras } from "./modules/extras";
import { initializeCurrencyToggle } from "./modules/currency";
import { calculateTotals } from "./modules/calculations";
import { populateCountrySelect } from "./modules/apiChoice";

window.Webflow ||= [];
window.Webflow.push(() => {
  const initializeBookingForm = async () => {
    try {
      const form = document.querySelector("#booking_form");
      if (!form) throw new Error("Booking form not found");

      // Show loading state
      form.classList.add("loading");

      // Initialize country select first
      await populateCountrySelect();

      // Initialize all other modules
      await Promise.all([
        initializeDatePickers(),
        initializeVehicleSelection(),
        initializeExtras(),
        initializeCurrencyToggle(),
      ]);

      // Add form submission handler
      handleFormSubmission();

      // Initial calculation
      calculateTotals();

      // Remove loading state
      form.classList.remove("loading");
    } catch (error) {
      console.error("Error initializing booking form:", error);
      showError(
        "There was an error loading the booking form. Please refresh the page."
      );
    }
  };

  const handleFormSubmission = () => {
    const form = document.querySelector("#wf-form-Booking-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
        form.classList.add("submitting");

        // Validate form
        if (!validateForm(form)) {
          throw new Error("Please fill in all required fields");
        }

        // Get form data
        const formData = new FormData(form);

        // Add your form submission logic here
        // await submitForm(formData);

        showSuccess("Booking submitted successfully!");
      } catch (error) {
        console.error("Form submission error:", error);
        showError(error.message);
      } finally {
        form.classList.remove("submitting");
      }
    });
  };

  const validateForm = (form) => {
    // Add your validation logic here
    return true;
  };

  const showError = (message) => {
    const errorAlert = document.querySelector(".error-alert-bg");
    if (errorAlert) {
      errorAlert.querySelector(".error-alert-text").textContent = message;
      errorAlert.classList.remove("is-hidden");
      setTimeout(() => errorAlert.classList.add("is-hidden"), 5000);
    }
  };

  const showSuccess = (message) => {
    const successAlert = document.querySelector(".success-alert-bg");
    if (successAlert) {
      successAlert.querySelector(".success-alert-text").textContent = message;
      successAlert.classList.remove("is-hidden");
      setTimeout(() => successAlert.classList.add("is-hidden"), 5000);
    }
  };

  // Call initialization
  initializeBookingForm();
});
