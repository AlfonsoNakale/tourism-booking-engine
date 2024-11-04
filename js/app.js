"use strict";

// Add to the top of app.js
const debugModule = (moduleName, element) => {
  if (!element) {
    console.warn(`${moduleName}: Required DOM elements not found`);
    return false;
  }
  console.log(`${moduleName} initialized successfully`);
  return true;
};

// Import all required modules
import { populateCountrySelect } from "./modules/apiChoice.js";
import { initializeVehicleSelection } from "./modules/vehicleSelection.js";
import { initializeExtras } from "./modules/extras.js";
import { initializeDatePickers } from "./modules/datePickers.js";
import { initializeCurrencyToggle } from "./modules/apiExchange.js";

// Wait for Webflow to initialize
window.Webflow || [];
window.Webflow.push(function () {
  console.log("Webflow initialized, starting application...");

  // Initialize modules after a short delay to ensure DOM is ready
  setTimeout(() => {
    initializeApplication();
  }, 100);
});

function initializeApplication() {
  try {
    // Debug initialization of each component
    console.log("Initializing components...");

    // Initialize date pickers
    const dateInputs = document.querySelectorAll('input[type="date"]');
    if (dateInputs.length > 0) {
      initializeDatePickers();
      console.log("Date pickers initialized");
    }

    // Initialize vehicle selection
    const vehicleInputs = document.querySelectorAll('input[name="vehicle"]');
    if (vehicleInputs.length > 0) {
      initializeVehicleSelection();
      console.log("Vehicle selection initialized");
    }

    // Initialize extras
    const extrasContainer = document.querySelector(".extras-container");
    if (extrasContainer) {
      initializeExtras();
      console.log("Extras initialized");
    }

    // Initialize country select
    const countrySelect = document.querySelector("#i-country");
    if (countrySelect) {
      populateCountrySelect();
      console.log("Country select initialized");
    }

    // Initialize currency toggle
    const currencyToggle = document.querySelector('[name="currency-group"]');
    if (currencyToggle) {
      initializeCurrencyToggle();
      console.log("Currency toggle initialized");
    }

    console.log("Application initialization complete");
  } catch (error) {
    console.error("Error during application initialization:", error);
  }
}
