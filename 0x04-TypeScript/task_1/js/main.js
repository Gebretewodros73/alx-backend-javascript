var teacher1 = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "New York"
};
var teacher2 = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: false,
    location: "Los Angeles",
    contract: true // Additional attribute
};
console.log(teacher1);
console.log(teacher2);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: 'New York',
    numberOfReports: 10,
};
var director2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: false,
    location: 'Los Angeles',
    numberOfReports: 7,
};
console.log(director1);
console.log(director2);
// Task 3: Printing teachers
function printTeacher(firstName, lastName) {
    var firstLetter = firstName.charAt(0);
    return "".concat(firstLetter, ". ").concat(lastName);
}
var teacherName1 = printTeacher(teacher1.firstName, teacher1.lastName);
var teacherName2 = printTeacher(teacher2.firstName, teacher2.lastName);
console.log(teacherName1); // Output: J. Doe
console.log(teacherName2); // Output: J. Smith
// Create the StudentClass
var StudentClass = /** @class */ (function () {
    function class_1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    class_1.prototype.workOnHomework = function () {
        return "Currently working";
    };
    class_1.prototype.displayName = function () {
        return this.firstName;
    };
    return class_1;
}());
// Example usage
var student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John
