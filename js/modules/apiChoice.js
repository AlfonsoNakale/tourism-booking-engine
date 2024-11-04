/**
 * API Choice Module
 * Handles country selection functionality using the REST Countries API
 * @module apiChoice
 */

// Cache for countries data to avoid unnecessary API calls
let countriesCache = null;
const CACHE_DURATION = 3600000; // 1 hour in milliseconds
let lastFetchTime = 0;

/**
 * Fetches country data from the REST Countries API
 * @async
 * @returns {Promise<Array>} Array of country objects, or empty array if fetch fails
 */
async function fetchCountries() {
  const now = Date.now();

  // Return cached data if valid
  if (countriesCache && now - lastFetchTime < CACHE_DURATION) {
    return countriesCache;
  }

  const API_URL = "https://restcountries.com/v3.1/all";

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(API_URL, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Update cache
    countriesCache = data;
    lastFetchTime = now;

    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    // Return cached data if available, empty array if not
    return countriesCache || [];
  }
}

/**
 * Populates the country select dropdown with data from the REST Countries API
 * @async
 * @exports populateCountrySelect
 */
export const populateCountrySelect = async () => {
  const countrySelect = document.querySelector("#i-country");
  if (!countrySelect) {
    console.warn("Country select element not found");
    return;
  }

  // Add loading state
  countrySelect.classList.add("is-loading");

  try {
    // Check if Choices.js is loaded
    if (typeof Choices === "undefined") {
      throw new Error("Choices.js library not loaded");
    }

    // Initialize Choices.js with improved configuration
    const choices = new Choices(countrySelect, {
      searchEnabled: true,
      searchPlaceholderValue: "Search for a country",
      placeholder: true,
      placeholderValue: "Select a country",
      removeItemButton: true,
      silent: true,
      renderChoiceLimit: 30, // Performance optimization
      searchResultLimit: 10,
      loadingText: "Loading countries...",
      noResultsText: "No countries found",
      noChoicesText: "No countries available",
      itemSelectText: "Press to select",
      classNames: {
        containerOuter: "choices country-select-container",
        loading: "is-loading",
      },
    });

    // Fetch and format country data
    const countries = await fetchCountries();
    if (!countries.length) {
      throw new Error("No country data available");
    }

    const formattedChoices = formatCountryChoices(countries);

    // Update the dropdown with formatted choices
    choices.setChoices(formattedChoices, "value", "label", true);

    // Add change event listener
    countrySelect.addEventListener("change", (event) => {
      const selectedCountry = event.detail.value;
      console.log("Selected country:", selectedCountry);
      // Update any dependent fields here
    });
  } catch (error) {
    console.error("Error in populateCountrySelect:", error);
    // Show error state to user
    countrySelect.classList.add("has-error");
    const errorMsg = document.createElement("div");
    errorMsg.className = "error-message";
    errorMsg.textContent = "Unable to load countries. Please try again later.";
    countrySelect.parentNode.appendChild(errorMsg);
  } finally {
    // Remove loading state
    countrySelect.classList.remove("is-loading");
  }
};

/**
 * Formats country data for the Choices.js dropdown
 * @param {Array} countries - Array of country objects from the API
 * @returns {Array} Formatted array of choice objects
 */
function formatCountryChoices(countries) {
  if (!Array.isArray(countries)) {
    console.error("Invalid countries data:", countries);
    return [];
  }

  try {
    return countries
      .filter(
        (country) =>
          country?.name?.common && // Ensure required properties exist
          country?.cca2
      )
      .sort((a, b) => a.name.common.localeCompare(b.name.common))
      .map((country) => ({
        value: country.cca2,
        label: country.name.common,
        // Add additional data that might be useful
        customProperties: {
          region: country.region,
          capital: country.capital?.[0],
          currency: Object.keys(country.currencies || {})[0],
        },
      }));
  } catch (error) {
    console.error("Error formatting country choices:", error);
    return [];
  }
}

// Add utility functions for error handling
const handleError = (error, element, message) => {
  console.error(error);
  element.classList.add("has-error");
  showErrorMessage(element, message);
};

const showErrorMessage = (element, message) => {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;
  element.parentNode.appendChild(errorDiv);

  // Remove error message after 5 seconds
  setTimeout(() => {
    errorDiv.remove();
    element.classList.remove("has-error");
  }, 5000);
};
