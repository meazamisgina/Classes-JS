




//3. You are developing a startup’s order management system where an Order constructor 
// function should contain customer (object with name and email), items (array of objects with 
// productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, 
// update order status based on payment, and categorize order urgency using switch and conditional statements.


function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
}

Order.prototype.computeTotalCost = function () {
    let totalCost = 0;
    this.items.forEach(item => {
        totalCost += item.quantity * item.unitPrice;
    });
    return totalCost;
};

Order.prototype.updateStatus = function (paymentMade) {
    if (paymentMade) {
        this.status = "Paid";
    } else {
        this.status = "Pending";
    }
};

Order.prototype.categorizeUrgency = function () {
    switch (this.status) {
        case "Pending":
            return "High";
            break;
        case "Paid":
            return "Low";
            break;
        default:
            return "Unknown";
    }
};

const phoneOrder = new Order(
    { name: "Jakob", email: "jacob@gmail.com" },
    [{ productName: "Phone", quantity: 2, unitPrice: 1000 }],
    "paid"
);
const clothOrder = new Order(
    { name: "Samri", email: "samri@gmail.com" },
    [{ productName: "Cloth", quantity: 5, unitPrice: 600 }],
    "pending"
);

console.log(phoneOrder.computeTotalCost());
phoneOrder.updateStatus(true);
console.log(phoneOrder.status);
console.log(phoneOrder.categorizeUrgency());


console.log(clothOrder.computeTotalCost());
clothOrder.updateStatus(false);
console.log(clothOrder.status);
console.log(clothOrder.categorizeUrgency());