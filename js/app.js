"use strict";

import flatpickr from "flatpickr";

// Initialize Webflow
window.Webflow ||= [];
window.Webflow.push(() => {
  const initializeDatePickers = () => {
    // Initialize pickup date
    flatpickr("#pickup-date", {
      minDate: "today",
      dateFormat: "Y-m-d",
      onChange: function (selectedDates) {
        // Set the minimum date of return picker to the selected pickup date
        returnPicker.set("minDate", selectedDates[0]);
      },
    });

    // Initialize return date
    const returnPicker = flatpickr("#return-date", {
      minDate: "today",
      dateFormat: "Y-m-d",
    });

    // Initialize birthday picker
    flatpickr("#birthday", {
      dateFormat: "Y-m-d",
      maxDate: new Date().fp_incr(-18 * 365), // Must be at least 18 years old
    });

    // Initialize passport expiration date
    flatpickr("#passport-expiry", {
      dateFormat: "Y-m-d",
      minDate: "today",
    });
  };

  const calculateTotals = () => {
    // Add your calculation logic here
    const rentalFee = document.querySelector("[data-rental-fee]");
    const totalExtras = document.querySelector("[data-total-extras]");
    const subTotal = document.querySelector("[data-subtotal]");
    const tax = document.querySelector("[data-tax]");
    const total = document.querySelector("[data-total]");

    // Your calculation logic here
  };

  // Initialize the form
  const initializeBookingForm = async () => {
    try {
      const form = document.querySelector("#booking_form");
      if (!form) throw new Error("Booking form not found");

      initializeDatePickers();

      // Add form submission handler
      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        try {
          // Your form submission logic here
          const formData = new FormData(form);
          // Process form data
        } catch (error) {
          console.error("Form submission error:", error);
          // Show error to user
        }
      });
    } catch (error) {
      console.error("Error initializing booking form:", error);
    }
  };

  // Start the initialization
  initializeBookingForm();
});
