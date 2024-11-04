"use strict";

// Import dependencies using ESM syntax
import { initializeDatePickers } from "./modules/datePickers.js";
import { initializeVehicleSelection } from "./modules/vehicleSelection.js";
import { initializeExtras } from "./modules/extras.js";
import { initializeCurrencyToggle } from "./modules/apiExchange.js";
import { calculateTotals } from "./modules/calculations.js";
import { populateCountrySelect } from "./modules/apiChoice.js";

// Initialize Webflow
window.Webflow ||= [];
window.Webflow.push(() => {
  const initializeBookingForm = async () => {
    try {
      const form = document.querySelector("#booking_form");
      if (!form) throw new Error("Booking form not found");

      form.classList.add("loading");

      await populateCountrySelect();

      await Promise.all([
        initializeDatePickers(),
        initializeVehicleSelection(),
        initializeExtras(),
        initializeCurrencyToggle(),
      ]);

      handleFormSubmission();
      calculateTotals();
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

        if (!validateForm(form)) {
          throw new Error("Please fill in all required fields");
        }

        const formData = new FormData(form);
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

  initializeBookingForm();
});
