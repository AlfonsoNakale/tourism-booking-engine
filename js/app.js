"use strict";

// Import all required modules
import { populateCountrySelect } from "./modules/apiChoice.js";
import { initializeVehicleSelection } from "./modules/vehicleSelection.js";
import { initializeExtras } from "./modules/extras.js";
import { initializeDatePickers } from "./modules/datePickers.js";
import { initializeCurrencyToggle } from "./modules/apiExchange.js";

// Debug helper function
const debugModule = (moduleName, element) => {
  if (!element) {
    console.warn(`${moduleName}: Required DOM elements not found`);
    return false;
  }
  console.log(`${moduleName} initialized successfully`);
  return true;
};

// Main initialization function
function initializeApplication() {
  console.log("Starting application initialization...");

  // Wrap in try-catch for better error handling
  try {
    // Initialize date pickers
    const dateInputs = document.querySelectorAll('input[type="date"]');
    debugModule("Date Pickers", dateInputs.length > 0) &&
      initializeDatePickers();

    // Initialize vehicle selection
    const vehicleInputs = document.querySelectorAll('input[name="vehicle"]');
    debugModule("Vehicle Selection", vehicleInputs.length > 0) &&
      initializeVehicleSelection();

    // Initialize extras
    const extrasContainer = document.querySelector(".extras-container");
    debugModule("Extras", extrasContainer) && initializeExtras();

    // Initialize country select
    const countrySelect = document.querySelector("#i-country");
    debugModule("Country Select", countrySelect) && populateCountrySelect();

    // Initialize currency toggle
    const currencyToggle = document.querySelector('[name="currency-group"]');
    debugModule("Currency Toggle", currencyToggle) &&
      initializeCurrencyToggle();

    console.log("Application initialization complete");
  } catch (error) {
    console.error("Error during application initialization:", error.message);
  }
}

// Ensure the DOM is fully loaded before initializing
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
  initializeApplication();
});

// Also handle Webflow initialization if needed
window.Webflow?.push(() => {
  console.log("Webflow initialized");
  initializeApplication();
});
