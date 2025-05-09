//1. You are building a feature rollout system for a startup where a FeatureToggle constructor 
// function has properties: featureName(string), isEnabled(boolean), and userGroupAccess(array of 
// strings like "betaTesters", "admins"), and you must use a prototype method canAccess(userRole) to return true or false, a
//  method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.



function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
}


FeatureToggle.prototype.canAccess = function (userRole) {
    return this.isEnabled && this.userGroupAccess.includes(userRole);
};

FeatureToggle.prototype.toggleFeature = function (flag) {
    this.isEnabled = flag;
};

const feature = new FeatureToggle("signup", true, ["betaTesters", "admins"]);
const userRole = "betaTesters";


switch (userRole) {
    case "betaTesters":
        if (feature.canAccess("betaTesters")) {
            console.log("Access granted for betaTesters");
        } else {
            console.log("Access denied for betaTesters");
        }
        break;
    case "admins":
        if (feature.canAccess("admins")) {
            console.log("Access granted for admins");
        } else {
            console.log("Access denied for admins");
        }
        break;
    default:
        console.log("Unknown user role");
};


//2. In a freelancer time-tracking platform, create a TimeLog constructor function with properties: 
// freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), 
// then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
}

TimeLog.prototype.calculateTotalEarnings = function () {
    let totalEarnings = 0;
    this.logs.forEach(log => {
        totalEarnings += log.hoursWorked * this.projectDetails.hourlyRate;
    });
    return totalEarnings;
};

TimeLog.prototype.filterLogsByDateRange = function (startDate, endDate) {
    return this.logs.filter(log => log.date >= startDate && log.date <= endDate);
};

TimeLog.prototype.checkWeeklyHoursExceed40 = function () {
    let totalHours = 0;
    this.logs.forEach(log => {
        totalHours += log.hoursWorked;
    });
    if (totalHours > 40) {
        return true;
    } else {
        return false;
    }
};

const nhatty = new TimeLog("Nhatty",
    { name: "Web Dev", hourlyRate: 100 },
    [{ date: "2025-04-01", hoursWorked: 40 },
    { date: "2025-09-27", hoursWorked: 7 },
    { date: "2025-05-20", hoursWorked: 10 }]
)


const john = new TimeLog("Jhon",
    { name: "Web Dev", hourlyRate: 100 },
    [{ date: "2025-07-01", hoursWorked: 30 },
    { date: "2025-09-27", hoursWorked: 7 },
    { date: "2025-05-20", hoursWorked: 10 }]
)

console.log(nhatty.calculateTotalEarnings());
console.log(nhatty.filterLogsByDateRange("2025-05-01", "2025-07-02"));
console.log(nhatty.checkWeeklyHoursExceed40());

console.log(john.calculateTotalEarnings());
console.log(john.filterLogsByDateRange("2025-05-01", "2025-09-02"));
console.log(john.checkWeeklyHoursExceed40());



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


//4. In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), 
// performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), 
// then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.

function Employee(name, id, performanceMetrics, feedback) {
    this.name = name;
    this.id = id;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
}

Employee.prototype.calculateAverageScore = function () {
    let totalScore = 0;
    let metricCount = 0;
    for (let metric in this.performanceMetrics) {
        totalScore += this.performanceMetrics[metric];
        metricCount++;
    }
    return totalScore / metricCount;
};

Employee.prototype.classifyPerformance = function () {
    let averageScore = this.calculateAverageScore();
    if (averageScore >= 8) {
        return "High performer";
    } else if (averageScore >= 6) {
        return "Average performer";
    } else {
        return "Low performer";
    }
};

Employee.prototype.addFeedback = function (newFeedback) {
    if (newFeedback.length > 0) {
        this.feedback.push(newFeedback);
    } else {
        
        console.log("Feedback cannot be empty");
    }
};

const abemelek = new Employee("Abemelek Tamru", 190,
    { communication: 8, efficiency: 8, reliability: 6 },
    ["good job", "well done", "excellent"]);
const abraham= new Employee("Abraham", 190,
    { communication: 9, efficiency: 8, reliability: 10 },
    ["good job", "well done", "excellent"]);
const mary= new Employee("Mary ", 190,
    { communication: 5, efficiency: 6, reliability: 10 },
    ["good job", "well done", "excellent"]);


console.log(abemelek.calculateAverageScore());
console.log(abemelek.classifyPerformance());
console.log(abemelek.addFeedback());

console.log(abraham.calculateAverageScore());
console.log(abraham.classifyPerformance());
console.log(abraham.addFeedback());

console.log(mary.calculateAverageScore());
console.log(mary.classifyPerformance());
console.log(mary.addFeedback());



//Build a simple e-learning system where a Course class has properties: title (string), 
// instructor (object with name and expertise), and students (array of objects with name and completionStatus), 
// then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, 
// and use control flow to output different messages for instructors with more or less than 5 students.



class Course {
    constructor(title, instructor, students = []) {
        this.title = title;
        this, instructor = instructor;
        this.students = students;
    }
}
Course.prototype.getCompletedStudents = function () {
    completedStudents = [];

    for (let student of this.students) {
        if (student.completionStatus) {
            completedStudents.push(student.name);
        }
    }
}
Course.prototype.countStudentsByExpertise = function () {
    return this.students.length
}
Course.prototype.instructorStudentMessage = function () {
    switch (true) {
        case this.students.length < 5:
            return `${this.instructor} needs more students.`
        case this.students.length >= 5:
            return `${this.instructor} has enooughh students.`
        default:
            return "Count unavailable."
    }
}
const course = new Course("Professor", { name: "Alex", expertise: "Mobile Development" },
    [{ name: "Bale", completionStatus: "Constitution" }, { name: "Beki", completionStatus: "Geology" }]);

console.log(course.getCompletedStudents());
console.log(course.countStudentsByExpertise());
console.log(course.instructorStudentMessage());





