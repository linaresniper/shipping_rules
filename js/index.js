function shippingRules() {
    let weight = Number(document.getElementById("weight").value);
    let isInternational = document.getElementById("isInternational").value === "true";
    let isUrgent = document.getElementById("isUrgent").value === "true";

    let extraCost = false;
    let shippingType = "standard";

    if (weight > 10) {
        extraCost = true;
    }

    if (isInternational) {
        shippingType = "international";
    }

    if (isUrgent) {
        shippingType = "priority";
    }

    document.getElementById("result").textContent =
        "Shipping type: " + shippingType + " | Extra cost: " + extraCost;
}