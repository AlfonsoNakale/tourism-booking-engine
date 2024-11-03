const EXCHANGE_RATES = {
  NAD: 1,
  USD: 0.054, // Example rate
  EUR: 0.049, // Example rate
  GBP: 0.042, // Example rate
};

export const initializeCurrencyToggle = () => {
  const currencyInputs = document.querySelectorAll(
    'input[name="currency-group"]'
  );

  currencyInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      const newCurrency = e.target.value;
      updateCurrencyDisplay(newCurrency);
    });
  });
};

export const updateCurrencyDisplay = (newCurrency) => {
  try {
    const rate = EXCHANGE_RATES[newCurrency];
    if (!rate) throw new Error(`Invalid currency: ${newCurrency}`);

    // Update all price displays
    const priceElements = document.querySelectorAll('[id^="v-calc-"]');
    priceElements.forEach((element) => {
      const originalPrice = parseFloat(
        element.getAttribute("data-original-price") || element.textContent
      );
      if (!isNaN(originalPrice)) {
        // Store original price if not already stored
        if (!element.hasAttribute("data-original-price")) {
          element.setAttribute("data-original-price", originalPrice);
        }
        element.textContent = (originalPrice * rate).toFixed(2);
      }
    });

    // Update currency symbol displays
    document.querySelectorAll(".currency-symbol").forEach((element) => {
      element.textContent = newCurrency;
    });
  } catch (error) {
    console.error("Error updating currency:", error);
  }
};
