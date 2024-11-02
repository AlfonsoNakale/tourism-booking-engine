"use strict";

window.Webflow ||= [];
window.Webflow.push(() => {
  // Initialize form handling
  const initializeBookingForm = () => {
    const form = document.querySelector("#booking_form");
    if (!form) return;

    // Initialize date inputs
    initializeDatePickers();

    // Initialize vehicle selection
    initializeVehicleSelection();

    // Initialize extras handling
    initializeExtras();

    // Initialize currency toggle
    initializeCurrencyToggle();

    // Add form submission handler
    handleFormSubmission();
  };

  // Initialize date pickers and handle date-related calculations
  const initializeDatePickers = () => {
    const pickupDate = document.querySelector("#i-pickup-date");
    const returnDate = document.querySelector("#i-return-date");

    // Add date change listeners
    [pickupDate, returnDate].forEach((dateInput) => {
      dateInput?.addEventListener("change", () => {
        updateDates();
        calculateTotals();
      });
    });
  };

  // Handle vehicle selection
  const initializeVehicleSelection = () => {
    const vehicleInputs = document.querySelectorAll('input[name="vehicle"]');

    vehicleInputs.forEach((input) => {
      input.addEventListener("change", (e) => {
        const vehicleName = e.target
          .closest(".f-radio-field")
          .querySelector(".vehicle-name").textContent;
        const vehiclePrice = parseFloat(e.target.value);

        // Update vehicle display
        document.querySelector("#v-vehicle-name").textContent = vehicleName;
        document.querySelector("#v-calc-vehicle-price").textContent =
          vehiclePrice.toFixed(2);

        calculateTotals();
      });
    });
  };

  // Handle extras selection and quantity
  const initializeExtras = () => {
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

  // Handle currency toggle
  const initializeCurrencyToggle = () => {
    const currencyInputs = document.querySelectorAll(
      'input[name="currency-group"]'
    );

    currencyInputs.forEach((input) => {
      input.addEventListener("change", (e) => {
        const currency = e.target.value;
        updateCurrencyDisplay(currency);
        calculateTotals();
      });
    });
  };

  // Update dates display
  const updateDates = () => {
    const pickupDate = document.querySelector("#i-pickup-date").value;
    const returnDate = document.querySelector("#i-return-date").value;

    document.querySelector("#v-pickup-date").textContent = pickupDate || "-";
    document.querySelector("#v-return-date").textContent = returnDate || "-";

    // Calculate and display duration
    if (pickupDate && returnDate) {
      const duration = calculateDuration(pickupDate, returnDate);
      document.querySelector("#v-calc-duration").textContent = duration;
    }
  };

  // Calculate duration between dates
  const calculateDuration = (pickup, return_) => {
    const start = new Date(pickup);
    const end = new Date(return_);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Calculate all totals
  const calculateTotals = () => {
    // Get base values
    const vehiclePrice =
      parseFloat(document.querySelector("#v-calc-vehicle-price").textContent) ||
      0;
    const duration =
      parseInt(document.querySelector("#v-calc-duration").textContent) || 0;

    // Calculate extras total
    const extrasTotal = calculateExtrasTotal();

    // Calculate subtotal
    const subtotal = vehiclePrice * duration + extrasTotal;

    // Calculate tax
    const tax = subtotal * 0.15;

    // Update displays
    document.querySelector("#v-calc-total-extra").textContent =
      extrasTotal.toFixed(2);
    document.querySelector("#v-calc-tax").textContent = tax.toFixed(2);
    document.querySelector("#v-calc-total").textContent = (
      subtotal + tax
    ).toFixed(2);
  };

  // Calculate extras total
  const calculateExtrasTotal = () => {
    let total = 0;
    const extraCheckboxes = document.querySelectorAll('[id^="i-extra-"]');

    extraCheckboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const quantity =
          parseInt(
            document.querySelector(`#i-count-extra-${index + 1}`).value
          ) || 0;
        const price = getExtraPrice(checkbox.name);
        total += price * quantity;
      }
    });

    return total;
  };

  // Get price for extra item (you'll need to define these prices)
  const getExtraPrice = (extraName) => {
    // Define prices for extras
    const prices = {
      "NAD-45-000.00-Excess-Waiver": 45000,
      "Tyre-Glass-Waiver": 165,
      "Cross-Border-Charge": 100,
      // Add other extras prices here
    };

    return prices[extraName] || 0;
  };

  // Handle form submission
  const handleFormSubmission = () => {
    const form = document.querySelector("#wf-form-Booking-form");

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add your form submission logic here
    });
  };

  // Call initialization
  initializeBookingForm();
});
