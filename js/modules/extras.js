export const initializeExtras = () => {
  const extraCheckboxes = document.querySelectorAll('[id^="i-extra-"]');
  const extraQuantities = document.querySelectorAll('[id^="i-count-extra-"]');

  // Add listeners to checkboxes and quantity inputs
  extraCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      const quantityInput = document.querySelector(
        `#i-count-extra-${index + 1}`
      );
      const quantityDisplay = document.querySelector(
        `#v-calc-extra-${index + 1}`
      );

      if (checkbox.checked) {
        quantityInput.value = quantityInput.value || "1";
        quantityDisplay.textContent = quantityInput.value;
      } else {
        quantityInput.value = "";
        quantityDisplay.textContent = "-";
      }

      calculateTotals();
    });
  });

  extraQuantities.forEach((input) => {
    input.addEventListener("change", () => {
      calculateTotals();
    });
  });
};

export const calculateExtrasTotal = () => {
  let total = 0;
  const extraCheckboxes = document.querySelectorAll('[id^="i-extra-"]');

  extraCheckboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      const quantity =
        parseInt(document.querySelector(`#i-count-extra-${index + 1}`).value) ||
        0;
      const price = getExtraPrice(checkbox.name);
      total += price * quantity;
    }
  });

  return total;
};

export const getExtraPrice = (extraName) => {
  // Define prices for extras
  const prices = {
    "NAD-45-000.00-Excess-Waiver": 45000,
    "Tyre-Glass-Waiver": 165,
    "Cross-Border-Charge": 100,
    // Add other extras prices here
  };

  return prices[extraName] || 0;
};
