export const calculateTotals = () => {
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
