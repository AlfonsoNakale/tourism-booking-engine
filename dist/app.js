const $3b8482e534b8b250$export$de01a5d2298a9bfb = ()=>{
    const pickupDate = document.querySelector("#i-pickup-date");
    const returnDate = document.querySelector("#i-return-date");
    // Add date change listeners
    [
        pickupDate,
        returnDate
    ].forEach((dateInput)=>{
        dateInput?.addEventListener("change", ()=>{
            $3b8482e534b8b250$export$8e0c40ed1c2bbc90();
            calculateTotals();
        });
    });
};
const $3b8482e534b8b250$export$8e0c40ed1c2bbc90 = ()=>{
    const pickupDate = document.querySelector("#i-pickup-date").value;
    const returnDate = document.querySelector("#i-return-date").value;
    document.querySelector("#v-pickup-date").textContent = pickupDate || "-";
    document.querySelector("#v-return-date").textContent = returnDate || "-";
    // Calculate and display duration
    if (pickupDate && returnDate) {
        const duration = $3b8482e534b8b250$export$45bd67057582fe67(pickupDate, returnDate);
        document.querySelector("#v-calc-duration").textContent = duration;
    }
};
const $3b8482e534b8b250$export$45bd67057582fe67 = (pickup, return_)=>{
    const start = new Date(pickup);
    const end = new Date(return_);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / 86400000);
};


const $45022f0b9d10005e$export$387ed394e6a15885 = ()=>{
    const vehicleInputs = document.querySelectorAll('input[name="vehicle"]');
    vehicleInputs.forEach((input)=>{
        input.addEventListener("change", (e)=>{
            const vehicleName = e.target.closest(".f-radio-field").querySelector(".vehicle-name").textContent;
            const vehiclePrice = parseFloat(e.target.value);
            // Update vehicle display
            document.querySelector("#v-vehicle-name").textContent = vehicleName;
            document.querySelector("#v-calc-vehicle-price").textContent = vehiclePrice.toFixed(2);
            calculateTotals();
        });
    });
};


const $4022becebb3b2c38$export$891ee78cbb4591cc = ()=>{
    const extraCheckboxes = document.querySelectorAll('[id^="i-extra-"]');
    const extraQuantities = document.querySelectorAll('[id^="i-count-extra-"]');
    // Add listeners to checkboxes and quantity inputs
    extraCheckboxes.forEach((checkbox, index)=>{
        checkbox.addEventListener("change", ()=>{
            const quantityInput = document.querySelector(`#i-count-extra-${index + 1}`);
            const quantityDisplay = document.querySelector(`#v-calc-extra-${index + 1}`);
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
    extraQuantities.forEach((input)=>{
        input.addEventListener("change", ()=>{
            calculateTotals();
        });
    });
};
const $4022becebb3b2c38$export$59c6c80ce1ce5175 = ()=>{
    let total = 0;
    const extraCheckboxes = document.querySelectorAll('[id^="i-extra-"]');
    extraCheckboxes.forEach((checkbox, index)=>{
        if (checkbox.checked) {
            const quantity = parseInt(document.querySelector(`#i-count-extra-${index + 1}`).value) || 0;
            const price = $4022becebb3b2c38$export$9be100641a4625a5(checkbox.name);
            total += price * quantity;
        }
    });
    return total;
};
const $4022becebb3b2c38$export$9be100641a4625a5 = (extraName)=>{
    // Define prices for extras
    const prices = {
        "NAD-45-000.00-Excess-Waiver": 45000,
        "Tyre-Glass-Waiver": 165,
        "Cross-Border-Charge": 100
    };
    return prices[extraName] || 0;
};


const $5cb9d44ada4acc97$export$76cfc673cb977291 = ()=>{
    const currencyInputs = document.querySelectorAll('input[name="currency-group"]');
    currencyInputs.forEach((input)=>{
        input.addEventListener("change", (e)=>{
            const currency = e.target.value;
            $5cb9d44ada4acc97$export$61b148a19198971a(currency);
            calculateTotals();
        });
    });
};
const $5cb9d44ada4acc97$export$61b148a19198971a = (currency)=>{
// Add currency display update logic here
};


const $cda92668d1726448$export$866c2f476e8577f3 = ()=>{
    // Get base values
    const vehiclePrice = parseFloat(document.querySelector("#v-calc-vehicle-price").textContent) || 0;
    const duration = parseInt(document.querySelector("#v-calc-duration").textContent) || 0;
    // Calculate extras total
    const extrasTotal = calculateExtrasTotal();
    // Calculate subtotal
    const subtotal = vehiclePrice * duration + extrasTotal;
    // Calculate tax
    const tax = subtotal * 0.15;
    // Update displays
    document.querySelector("#v-calc-total-extra").textContent = extrasTotal.toFixed(2);
    document.querySelector("#v-calc-tax").textContent = tax.toFixed(2);
    document.querySelector("#v-calc-total").textContent = (subtotal + tax).toFixed(2);
};


"use strict";
window.Webflow ||= [];
window.Webflow.push(()=>{
    // Initialize form handling
    const initializeBookingForm = ()=>{
        const form = document.querySelector("#booking_form");
        if (!form) return;
        // Initialize all modules
        (0, $3b8482e534b8b250$export$de01a5d2298a9bfb)();
        (0, $45022f0b9d10005e$export$387ed394e6a15885)();
        (0, $4022becebb3b2c38$export$891ee78cbb4591cc)();
        (0, $5cb9d44ada4acc97$export$76cfc673cb977291)();
        // Add form submission handler
        handleFormSubmission();
    };
    // Handle form submission
    const handleFormSubmission = ()=>{
        const form = document.querySelector("#wf-form-Booking-form");
        form?.addEventListener("submit", (e)=>{
            e.preventDefault();
        // Add your form submission logic here
        });
    };
    // Call initialization
    initializeBookingForm();
});


//# sourceMappingURL=app.js.map
