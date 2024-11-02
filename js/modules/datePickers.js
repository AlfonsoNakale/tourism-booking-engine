export const initializeDatePickers = () => {
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

// Update dates display
export const updateDates = () => {
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
export const calculateDuration = (pickup, return_) => {
  const start = new Date(pickup);
  const end = new Date(return_);
  const diffTime = Math.abs(end - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
