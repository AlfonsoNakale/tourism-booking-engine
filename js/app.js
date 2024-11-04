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

// Initialize your application
document.addEventListener("DOMContentLoaded", () => {
  console.log("Application initializing...");

  try {
    // Debug each module initialization
    const countrySelect = document.querySelector("#i-country");
    if (debugModule("Country Select", countrySelect)) {
      populateCountrySelect();
    }

    const vehicleInputs = document.querySelectorAll('input[name="vehicle"]');
    if (debugModule("Vehicle Selection", vehicleInputs.length > 0)) {
      initializeVehicleSelection();
    }

    // ... similar debug checks for other modules

    console.log("Application initialized successfully");
  } catch (error) {
    console.error("Error initializing application:", error);
  }
});
