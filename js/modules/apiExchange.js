/**
 * API Exchange Module
 * Handles currency conversion functionality with real-time exchange rates
 * @module apiExchange
 */

/**
 * Exchange rates configuration
 * @constant {Object}
 * @property {number} NAD - Base currency (Namibian Dollar)
 * @property {number} USD - US Dollar rate
 * @property {number} EUR - Euro rate
 * @property {number} GBP - British Pound rate
 */
const EXCHANGE_RATES = {
  NAD: 1,
  USD: 0.054,
  EUR: 0.049,
  GBP: 0.042,
};

/**
 * Currency display configuration
 * @constant {Object}
 */
const CURRENCY_CONFIG = {
  NAD: { symbol: "N$", decimals: 2 },
  USD: { symbol: "$", decimals: 2 },
  EUR: { symbol: "€", decimals: 2 },
  GBP: { symbol: "£", decimals: 2 },
};

/**
 * Initializes currency toggle functionality
 * @exports initializeCurrencyToggle
 * @throws {Error} If currency inputs are not found
 */
export const initializeCurrencyToggle = () => {
  const currencyInputs = document.querySelectorAll(
    'input[name="currency-group"]'
  );

  if (!currencyInputs.length) {
    console.warn("No currency inputs found");
    return;
  }

  currencyInputs.forEach((input) => {
    input.addEventListener("change", handleCurrencyChange);
  });
};

/**
 * Handles currency change events
 * @param {Event} e - Change event
 * @private
 */
function handleCurrencyChange(e) {
  const newCurrency = e.target.value;
  updateCurrencyDisplay(newCurrency);
}

/**
 * Updates all price displays with the new currency
 * @param {string} newCurrency - The currency code to convert to
 * @exports updateCurrencyDisplay
 * @throws {Error} If currency is invalid
 */
export const updateCurrencyDisplay = (newCurrency) => {
  try {
    validateCurrency(newCurrency);
    updatePriceElements(newCurrency);
    updateCurrencySymbols(newCurrency);
  } catch (error) {
    console.error("Error updating currency:", error);
    // Optionally show user-friendly error message
    showErrorMessage(`Failed to update currency: ${error.message}`);
  }
};

/**
 * Shows error message to user
 * @param {string} message - Error message to display
 * @private
 */
function showErrorMessage(message) {
  const errorAlert = document.querySelector(".error-alert-bg");
  if (errorAlert) {
    errorAlert.querySelector(".error-alert-text").textContent = message;
    errorAlert.classList.remove("is-hidden");
    setTimeout(() => errorAlert.classList.add("is-hidden"), 5000);
  }
}

/**
 * Validates the currency code
 * @param {string} currency - The currency code to validate
 * @throws {Error} If currency is invalid
 */
function validateCurrency(currency) {
  const rate = EXCHANGE_RATES[currency];
  if (!rate) {
    throw new Error(`Invalid currency: ${currency}`);
  }
}

/**
 * Updates all price elements with converted values
 * @param {string} currency - The currency to convert to
 */
function updatePriceElements(currency) {
  const rate = EXCHANGE_RATES[currency];
  const priceElements = document.querySelectorAll('[id^="v-calc-"]');

  priceElements.forEach((element) => {
    const originalPrice = parseFloat(
      element.getAttribute("data-original-price") || element.textContent
    );

    if (!isNaN(originalPrice)) {
      if (!element.hasAttribute("data-original-price")) {
        element.setAttribute("data-original-price", originalPrice);
      }
      element.textContent = (originalPrice * rate).toFixed(2);
    }
  });
}

/**
 * Updates all currency symbols in the UI
 * @param {string} currency - The new currency symbol to display
 */
function updateCurrencySymbols(currency) {
  document.querySelectorAll(".currency-symbol").forEach((element) => {
    element.textContent = currency;
  });
}
