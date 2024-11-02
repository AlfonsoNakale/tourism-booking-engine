// Import required dependencies
import { initializeExtras } from "./components/ExtrasComponent.js";

// Constants
const API_KEYS = {
  EXCHANGE_RATE: "f8eb8575dc0df45769f9bc6c",
};

// Initialize date pickers
function initializeDatePickers() {
  // Common date picker configuration
  const dateConfig = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minuteIncrement: 30,
  };

  // Initialize pickup and return date pickers
  flatpickr("#i-pickup-date", {
    ...dateConfig,
    onChange: function (selectedDates) {
      // Set minimum date for return picker
      returnPicker.set("minDate", selectedDates[0]);
      calculateTotalPrice();
    },
  });

  const returnPicker = flatpickr("#i-return-date", {
    ...dateConfig,
    onChange: function () {
      calculateTotalPrice();
    },
  });

  // Initialize personal document date pickers
  flatpickr("#i-date-of-birth", {
    dateFormat: "Y-m-d",
    maxDate: new Date(),
  });

  flatpickr("#i-expiration-date", {
    dateFormat: "Y-m-d",
    minDate: new Date(),
  });
}

// Initialize currency converter
async function initializeCurrencyConverter() {
  const nadRadio = document.getElementById("i-currency-nad");
  const usdRadio = document.getElementById("i-currency-usd");

  async function convertCurrency(amount, from, to) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEYS.EXCHANGE_RATE}/pair/${from}/${to}/${amount}`
      );
      const data = await response.json();
      return data.conversion_result;
    } catch (error) {
      console.error("Currency conversion error:", error);
      return amount;
    }
  }

  async function updatePrices(toCurrency) {
    const priceElements = document.querySelectorAll('[id^="v-"]');
    for (const element of priceElements) {
      if (element.dataset.basePrice) {
        const basePrice = parseFloat(element.dataset.basePrice);
        const convertedPrice = await convertCurrency(
          basePrice,
          toCurrency === "USD" ? "NAD" : "USD",
          toCurrency
        );
        element.textContent = `${toCurrency} ${convertedPrice.toFixed(2)}`;
      }
    }
  }

  nadRadio.addEventListener("change", () => updatePrices("NAD"));
  usdRadio.addEventListener("change", () => updatePrices("USD"));
}

// Initialize country selector
async function initializeCountrySelector() {
  const countrySelect = document.getElementById("i-country");

  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();

    // Sort countries by name
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

    // Clear existing options except the first one
    countrySelect.innerHTML =
      '<option value="Choose Option">Choose Option</option>';

    // Add countries to select
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.name.common;
      option.textContent = country.name.common;
      countrySelect.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

// Initialize file upload
function initializeFileUpload() {
  const fileInput = document.getElementById("i-file-upload");

  fileInput.addEventListener("change", async (event) => {
    const files = event.target.files;
    if (!files.length) return;

    const formData = new FormData();
    formData.append("file", files[0]);

    try {
      const response = await fetch("FASTGEN_API_ENDPOINT", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      // Handle the response as needed
      console.log("File uploaded successfully:", data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  });
}

// Calculate total price
function calculateTotalPrice() {
  // Implementation will depend on your pricing logic
  // This is a placeholder function
  console.log("Calculating total price...");
}

// Initialize all components
async function initializeApp() {
  initializeDatePickers();
  await initializeCurrencyConverter();
  await initializeCountrySelector();
  initializeFileUpload();
  initializeExtras();
}

// Start the application when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeApp);
