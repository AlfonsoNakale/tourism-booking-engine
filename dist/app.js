var $buIvO$flatpickr = require("flatpickr");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

/**
 * Updates the display elements with the selected dates and calculates duration
 * @param {string} pickupDateId - ID of the pickup date input element
 * @param {string} returnDateId - ID of the return date input element
 */ const $5459024e8c5aedc4$export$cc447508e49f31d3 = ()=>{
    // Get the date input elements
    const pickupDateInput = document.querySelector("#i-pickup-date");
    const returnDateInput = document.querySelector("#i-return-date");
    // Get the display elements
    const pickupDateDisplay = document.querySelector("#v-pickup-date");
    const returnDateDisplay = document.querySelector("#v-return-date");
    const durationDisplay = document.querySelector("#v-calc-duration");
    // Update the display elements with formatted dates
    if (pickupDateInput.value) {
        const pickupDate = new Date(pickupDateInput.value);
        pickupDateDisplay.textContent = $5459024e8c5aedc4$var$formatDateTime(pickupDate);
    }
    if (returnDateInput.value) {
        const returnDate = new Date(returnDateInput.value);
        returnDateDisplay.textContent = $5459024e8c5aedc4$var$formatDateTime(returnDate);
    }
    // Calculate and display duration if both dates are set
    if (pickupDateInput.value && returnDateInput.value) {
        const duration = $5459024e8c5aedc4$var$calculateDuration(new Date(pickupDateInput.value), new Date(returnDateInput.value));
        durationDisplay.textContent = duration;
    }
};
/**
 * Formats a date object to a readable string
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */ const $5459024e8c5aedc4$var$formatDateTime = (date)=>{
    return date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
};
/**
 * Calculates the duration in days between two dates
 * @param {Date} pickupDate - The pickup date
 * @param {Date} returnDate - The return date
 * @returns {number} Number of days between dates
 */ const $5459024e8c5aedc4$var$calculateDuration = (pickupDate, returnDate)=>{
    const diffTime = returnDate - pickupDate;
    const diffDays = Math.ceil(diffTime / 86400000);
    return diffDays;
};


// Add this function to handle pickup location visibility and values
function $3b8482e534b8b250$var$initializePickupLocation() {
    // Get DOM elements
    const pickupConfirmation = document.querySelector("#pickup-confirmation");
    const pickupLocation = document.querySelector("#i-pickup-location");
    const returnLocation = document.querySelector("#i-return-location");
    const deliveryFeeElement = document.querySelector("#v-delivery-fee");
    const vPickupLocation = document.querySelector("#v-pickup-location");
    const vReturnLocation = document.querySelector("#v-return-location");
    // Set initial state - hidden by default
    pickupLocation.closest(".input-dropdown").style.display = "none";
    returnLocation.closest(".input-dropdown").style.display = "none";
    // Add event listener to select fields to update display values
    pickupLocation.addEventListener("change", function() {
        // Only update if a real option is selected (not the placeholder)
        if (this.selectedIndex !== 0) vPickupLocation.textContent = this.options[this.selectedIndex].text;
    });
    returnLocation.addEventListener("change", function() {
        // Only update if a real option is selected (not the placeholder)
        if (this.selectedIndex !== 0) vReturnLocation.textContent = this.options[this.selectedIndex].text;
    });
    // Add event listener to checkbox
    pickupConfirmation.addEventListener("change", function() {
        // Toggle visibility based on checkbox state
        const displayStyle = this.checked ? "block" : "none";
        pickupLocation.closest(".input-dropdown").style.display = displayStyle;
        returnLocation.closest(".input-dropdown").style.display = displayStyle;
        // Set delivery fee based on checkbox state
        deliveryFeeElement.textContent = this.checked ? "250.00" : "0.00";
        if (!this.checked) {
            // Reset values when unchecked
            pickupLocation.selectedIndex = 0;
            returnLocation.selectedIndex = 0;
            vPickupLocation.textContent = "-";
            vReturnLocation.textContent = "-";
        }
    });
}
// Helper function to set select value based on text
function $3b8482e534b8b250$var$setSelectValue(selectElement, text) {
    for (let option of selectElement.options)if (option.text === text) {
        selectElement.value = option.value;
        break;
    }
}
function $3b8482e534b8b250$export$de01a5d2298a9bfb() {
    let pickupDateInstance;
    let returnDateInstance;
    // Pickup Date Configuration
    const pickupDateConfig = {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        time_24hr: true,
        minuteIncrement: 30,
        onChange: function(selectedDates, dateStr) {
            // Update return date min date when pickup date changes
            if (returnDateInstance) {
                returnDateInstance.set("minDate", dateStr);
                // If return date is earlier than new pickup date, clear it
                const returnDate = returnDateInstance.selectedDates[0];
                if (returnDate && returnDate < selectedDates[0]) {
                    returnDateInstance.clear();
                    $3b8482e534b8b250$var$showDateAlert("Return date cannot be earlier than pickup date. Please select a new return date.");
                }
            }
            (0, $5459024e8c5aedc4$export$cc447508e49f31d3)();
        }
    };
    // Return Date Configuration
    const returnDateConfig = {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        time_24hr: true,
        minuteIncrement: 30,
        onChange: function(selectedDates, dateStr) {
            const pickupDate = pickupDateInstance.selectedDates[0];
            // Validate return date is after pickup date
            if (pickupDate && selectedDates[0] < pickupDate) {
                returnDateInstance.clear();
                $3b8482e534b8b250$var$showDateAlert("Return date cannot be earlier than pickup date. Please select a valid date.");
                return;
            }
            (0, $5459024e8c5aedc4$export$cc447508e49f31d3)();
        }
    };
    // Initialize pickup and return date pickers
    pickupDateInstance = (0, ($parcel$interopDefault($buIvO$flatpickr)))("#i-pickup-date", pickupDateConfig);
    returnDateInstance = (0, ($parcel$interopDefault($buIvO$flatpickr)))("#i-return-date", returnDateConfig);
    // Date of Birth Configuration
    const dobConfig = {
        dateFormat: "Y-m-d",
        maxDate: new Date(),
        yearRange: [
            1900,
            new Date().getFullYear()
        ]
    };
    // Expiration Date Configuration
    const expirationConfig = {
        dateFormat: "Y-m-d",
        minDate: "today"
    };
    // Initialize other date pickers
    (0, ($parcel$interopDefault($buIvO$flatpickr)))("#i-date-of-birth", dobConfig);
    (0, ($parcel$interopDefault($buIvO$flatpickr)))("#i-expiration-date", expirationConfig);
    // Add this line at the end of the function
    $3b8482e534b8b250$var$initializePickupLocation();
}
// Function to show date validation alert
function $3b8482e534b8b250$var$showDateAlert(message) {
    // Find the return date error alert element
    const errorAlert = document.querySelector("#i-return-date").closest(".f-field-wrapper").querySelector(".error-alert-bg");
    // Update error message
    errorAlert.querySelector(".error-alert-text").textContent = message;
    // Show the error
    errorAlert.classList.remove("is-hidden");
    // Hide the error after 5 seconds
    setTimeout(()=>{
        errorAlert.classList.add("is-hidden");
    }, 5000);
}



// Optimized EXTRAS array with proper mapping
const $4022becebb3b2c38$var$EXTRAS = [
    {
        id: 1,
        name: "NAD-45-000.00-Excess-Waiver",
        baseFee: 45000,
        perDay: false,
        displayName: "NAD 45,000.00 Excess Waiver"
    },
    {
        id: 2,
        name: "Tyre-Glass-Waiver",
        baseFee: 165,
        perDay: true,
        displayName: "Tyre & Glass Waiver @ 165.00 p.d"
    },
    {
        id: 3,
        name: "Cross-Border-Charge",
        baseFee: 100,
        perDay: false,
        displayName: "Cross Border Charge @ 100.00"
    },
    {
        id: 4,
        name: "Satellite-Phone-N-6000-Excess",
        baseFee: 140,
        perDay: true,
        displayName: "Satellite Phone (N$6000 Excess) @ 140.00 p.d"
    },
    {
        id: 5,
        name: "Satellite-Phone-Zero-Excess",
        baseFee: 170,
        perDay: true,
        displayName: "Satellite Phone (Zero Excess) @ 170.00 p.d"
    },
    {
        id: 6,
        name: "Camping-Equipment---Double-Cab",
        baseFee: 170,
        perDay: true,
        displayName: "Camping Equipment - Double Cab @ NAD 170.00 p.d"
    },
    {
        id: 7,
        name: "Roof-Tents-Required",
        baseFee: 60,
        perDay: true,
        displayName: "Roof Tents Required @ NAD 60.00 p.d"
    },
    {
        id: 8,
        name: "Engel-40L-Fridge-Freezer",
        baseFee: 90,
        perDay: true,
        displayName: "Engel 40L Fridge/Freezer @ 90.00 p.d"
    },
    {
        id: 9,
        name: "Bedding-incl.-1x-sleeping-bag-1x-pillow",
        baseFee: 20,
        perDay: true,
        displayName: "Bedding (incl. 1x sleeping bag + 1x pillow) @ 20.00 p.d"
    },
    {
        id: 10,
        name: "GPS-System",
        baseFee: 75,
        perDay: true,
        displayName: "GPS System @ 75.00 p.d"
    },
    {
        id: 11,
        name: "SAT-Phone-Minutes",
        baseFee: 825,
        perDay: false,
        displayName: "SAT Phone Minutes @ 825.00 once.off"
    },
    {
        id: 12,
        name: "Kitchen-wash-up-kit-small-dish-wash-liquid-2x-drying-cloth-2x-sponge-2x-cleaning-cloth-extras",
        baseFee: 150,
        perDay: false,
        displayName: "Kitchen wash up kit @ 150.00 once.off"
    },
    {
        id: 13,
        name: "Ground-Tent",
        baseFee: 0,
        perDay: false,
        displayName: "Free Ground Tent"
    },
    {
        id: 14,
        name: "Jerry-Can",
        baseFee: 10,
        perDay: true,
        displayName: "Jerry Can @ 10.00 p.d"
    },
    {
        id: 15,
        name: "Baby-Seat",
        baseFee: 0,
        perDay: false,
        displayName: "Free Baby Seat"
    }
].map((extra)=>({
        ...extra,
        key: `extra-${extra.id}`,
        inputId: `i-extra-${extra.id}`,
        countId: `i-count-extra-${extra.id}`,
        displayId: `v-calc-extra-${extra.id}`,
        // Add validation helpers
        getElements () {
            return {
                checkbox: document.querySelector(`#${this.inputId}`),
                quantity: document.querySelector(`#${this.countId}`),
                display: document.querySelector(`#${this.displayId}`)
            };
        },
        isValid () {
            const elements = this.getElements();
            return elements.checkbox && elements.quantity && elements.display;
        }
    }));
const $4022becebb3b2c38$var$updateExtraCalculation = (extraId)=>{
    const extra = $4022becebb3b2c38$var$EXTRAS.find((e)=>e.id === extraId);
    if (!extra || !extra.isValid()) return;
    const elements = extra.getElements();
    const quantity = parseInt(elements.quantity.value) || 0;
    const duration = parseInt(document.querySelector("#v-calc-duration")?.textContent) || 0;
    const cost = extra.perDay ? extra.baseFee * quantity * duration : extra.baseFee * quantity;
    elements.display.textContent = cost.toFixed(2);
    // Update total extras after individual calculation
    $4022becebb3b2c38$var$updateExtrasTotal();
};
// New function to update extras total display
const $4022becebb3b2c38$var$updateExtrasTotal = ()=>{
    const totalElement = document.querySelector("#v-calc-total-extra");
    if (!totalElement) return;
    const total = $4022becebb3b2c38$var$EXTRAS.reduce((sum, extra)=>{
        if (!extra.isValid()) return sum;
        const elements = extra.getElements();
        if (!elements.checkbox.checked || elements.display.textContent === "-") return sum;
        return sum + parseFloat(elements.display.textContent || "0");
    }, 0);
    totalElement.textContent = total.toFixed(2);
};
const $4022becebb3b2c38$export$59c6c80ce1ce5175 = ()=>{
    const total = $4022becebb3b2c38$var$EXTRAS.reduce((sum, extra)=>{
        if (!extra.isValid()) return sum;
        const elements = extra.getElements();
        if (!elements.checkbox.checked || elements.display.textContent === "-") return sum;
        return sum + parseFloat(elements.display.textContent || "0");
    }, 0);
    // Update the display element
    const totalElement = document.querySelector("#v-calc-total-extra");
    if (totalElement) totalElement.textContent = total.toFixed(2);
    return total;
};
const $4022becebb3b2c38$export$891ee78cbb4591cc = ()=>{
    $4022becebb3b2c38$var$EXTRAS.forEach((extra)=>{
        if (!extra.isValid()) {
            console.warn(`Invalid extra configuration for ${extra.name}`);
            return;
        }
        const elements = extra.getElements();
        // Initialize checkbox handler
        elements.checkbox.addEventListener("change", ()=>{
            if (elements.checkbox.checked) {
                elements.quantity.value = elements.quantity.value || "1";
                $4022becebb3b2c38$var$updateExtraCalculation(extra.id);
            } else {
                elements.quantity.value = "";
                elements.display.textContent = "-";
                $4022becebb3b2c38$var$updateExtrasTotal(); // Update total when unchecking
            }
            (0, $cda92668d1726448$export$866c2f476e8577f3)();
        });
        // Initialize quantity handler
        elements.quantity.addEventListener("change", ()=>{
            if (elements.checkbox.checked) {
                $4022becebb3b2c38$var$updateExtraCalculation(extra.id);
                (0, $cda92668d1726448$export$866c2f476e8577f3)();
            }
        });
    });
    // Initialize total display
    $4022becebb3b2c38$var$updateExtrasTotal();
};
const $4022becebb3b2c38$export$9be100641a4625a5 = (extraName)=>{
    const extra = $4022becebb3b2c38$var$EXTRAS.find((e)=>e.name === extraName);
    return extra ? extra.baseFee : 0;
};


// Constants
const $cda92668d1726448$var$TAX_RATE = 0.15;
const $cda92668d1726448$var$SELECTORS = {
    vehiclePrice: "#v-calc-vehicle-price",
    duration: "#v-calc-duration",
    deliveryFee: "#v-delivery-fee",
    totalExtra: "#v-calc-total-extra",
    tax: "#v-calc-tax",
    subtotal: "#v-calc-subtotal",
    total: "#v-calc-total"
};
// Helper function to safely get numeric values from elements
const $cda92668d1726448$var$getNumericValue = (selector, defaultValue = 0, parseFunc = parseFloat)=>{
    try {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Element not found: ${selector}`);
            return defaultValue;
        }
        const value = parseFunc(element?.textContent || defaultValue);
        return isNaN(value) ? defaultValue : value;
    } catch (error) {
        console.error(`Error getting value from ${selector}:`, error);
        return defaultValue;
    }
};
// Helper function to safely update element text
const $cda92668d1726448$var$updateElement = (selector, value)=>{
    try {
        const element = document.querySelector(selector);
        if (element) {
            const formattedValue = value.toFixed(2);
            element.textContent = formattedValue;
            console.log(`Updated ${selector}:`, formattedValue);
        } else console.warn(`Element not found: ${selector}`);
    } catch (error) {
        console.error(`Error updating ${selector}:`, error);
    }
};
const $cda92668d1726448$export$866c2f476e8577f3 = ()=>{
    try {
        // Get base values
        const baseValues = {
            vehiclePrice: $cda92668d1726448$var$getNumericValue($cda92668d1726448$var$SELECTORS.vehiclePrice),
            duration: $cda92668d1726448$var$getNumericValue($cda92668d1726448$var$SELECTORS.duration, 0, parseInt),
            deliveryFee: $cda92668d1726448$var$getNumericValue($cda92668d1726448$var$SELECTORS.deliveryFee)
        };
        console.log("Base Values:", baseValues);
        // Calculate components
        const calculations = {
            extrasTotal: (0, $4022becebb3b2c38$export$59c6c80ce1ce5175)(),
            vehicleCost: baseValues.vehiclePrice * baseValues.duration
        };
        console.log("Initial Calculations:", calculations);
        // Calculate totals
        const subtotal = calculations.vehicleCost + calculations.extrasTotal + baseValues.deliveryFee;
        const tax = subtotal * $cda92668d1726448$var$TAX_RATE;
        const total = subtotal + tax;
        console.log("Final Calculations:", {
            subtotal: subtotal,
            tax: tax,
            total: total,
            breakdown: {
                vehicleCost: calculations.vehicleCost,
                extrasTotal: calculations.extrasTotal,
                deliveryFee: baseValues.deliveryFee
            }
        });
        // Update all displays
        const updates = {
            [$cda92668d1726448$var$SELECTORS.totalExtra]: calculations.extrasTotal,
            [$cda92668d1726448$var$SELECTORS.tax]: tax,
            [$cda92668d1726448$var$SELECTORS.subtotal]: subtotal,
            [$cda92668d1726448$var$SELECTORS.total]: total
        };
        // Batch update DOM elements
        Object.entries(updates).forEach(([selector, value])=>{
            $cda92668d1726448$var$updateElement(selector, value);
        });
        return {
            subtotal: subtotal,
            tax: tax,
            total: total
        };
    } catch (error) {
        console.error("Error in calculateTotals:", {
            message: error.message,
            stack: error.stack,
            error: error
        });
        return {
            subtotal: 0,
            tax: 0,
            total: 0
        };
    }
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
            (0, $cda92668d1726448$export$866c2f476e8577f3)();
        });
    });
};



const $5cb9d44ada4acc97$var$EXCHANGE_RATES = {
    NAD: 1,
    USD: 0.054,
    EUR: 0.049,
    GBP: 0.042
};
const $5cb9d44ada4acc97$export$76cfc673cb977291 = ()=>{
    const currencyInputs = document.querySelectorAll('input[name="currency-group"]');
    currencyInputs.forEach((input)=>{
        input.addEventListener("change", (e)=>{
            const newCurrency = e.target.value;
            $5cb9d44ada4acc97$export$61b148a19198971a(newCurrency);
        });
    });
};
const $5cb9d44ada4acc97$export$61b148a19198971a = (newCurrency)=>{
    try {
        const rate = $5cb9d44ada4acc97$var$EXCHANGE_RATES[newCurrency];
        if (!rate) throw new Error(`Invalid currency: ${newCurrency}`);
        // Update all price displays
        const priceElements = document.querySelectorAll('[id^="v-calc-"]');
        priceElements.forEach((element)=>{
            const originalPrice = parseFloat(element.getAttribute("data-original-price") || element.textContent);
            if (!isNaN(originalPrice)) {
                // Store original price if not already stored
                if (!element.hasAttribute("data-original-price")) element.setAttribute("data-original-price", originalPrice);
                element.textContent = (originalPrice * rate).toFixed(2);
            }
        });
        // Update currency symbol displays
        document.querySelectorAll(".currency-symbol").forEach((element)=>{
            element.textContent = newCurrency;
        });
    } catch (error) {
        console.error("Error updating currency:", error);
    }
};



"use strict";
window.Webflow ||= [];
window.Webflow.push(()=>{
    const initializeBookingForm = async ()=>{
        try {
            const form = document.querySelector("#booking_form");
            if (!form) throw new Error("Booking form not found");
            // Show loading state
            form.classList.add("loading");
            // Initialize all modules
            await Promise.all([
                (0, $3b8482e534b8b250$export$de01a5d2298a9bfb)(),
                (0, $45022f0b9d10005e$export$387ed394e6a15885)(),
                (0, $4022becebb3b2c38$export$891ee78cbb4591cc)(),
                (0, $5cb9d44ada4acc97$export$76cfc673cb977291)()
            ]);
            // Add form submission handler
            handleFormSubmission();
            // Initial calculation
            (0, $cda92668d1726448$export$866c2f476e8577f3)();
            // Remove loading state
            form.classList.remove("loading");
        } catch (error) {
            console.error("Error initializing booking form:", error);
            showError("There was an error loading the booking form. Please refresh the page.");
        }
    };
    const handleFormSubmission = ()=>{
        const form = document.querySelector("#wf-form-Booking-form");
        if (!form) return;
        form.addEventListener("submit", async (e)=>{
            e.preventDefault();
            try {
                form.classList.add("submitting");
                // Validate form
                if (!validateForm(form)) throw new Error("Please fill in all required fields");
                // Get form data
                const formData = new FormData(form);
                // Add your form submission logic here
                // await submitForm(formData);
                showSuccess("Booking submitted successfully!");
            } catch (error) {
                console.error("Form submission error:", error);
                showError(error.message);
            } finally{
                form.classList.remove("submitting");
            }
        });
    };
    const validateForm = (form)=>{
        // Add your validation logic here
        return true;
    };
    const showError = (message)=>{
        const errorAlert = document.querySelector(".error-alert-bg");
        if (errorAlert) {
            errorAlert.querySelector(".error-alert-text").textContent = message;
            errorAlert.classList.remove("is-hidden");
            setTimeout(()=>errorAlert.classList.add("is-hidden"), 5000);
        }
    };
    const showSuccess = (message)=>{
        const successAlert = document.querySelector(".success-alert-bg");
        if (successAlert) {
            successAlert.querySelector(".success-alert-text").textContent = message;
            successAlert.classList.remove("is-hidden");
            setTimeout(()=>successAlert.classList.add("is-hidden"), 5000);
        }
    };
    // Call initialization
    initializeBookingForm();
});


//# sourceMappingURL=app.js.map
