function isDirector(employee) {
    return 'numberOfReports' in employee;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Example Usage
var employee1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: 'New York',
    workTeacherTasks: function () { return 'Getting to work'; }
};
var employee2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: false,
    location: 'Los Angeles',
    numberOfReports: 10,
    workDirectorTasks: function () { return 'Getting to director tasks'; }
};
console.log(executeWork(employee1)); // Output: Getting to work
console.log(executeWork(employee2)); // Output: Getting to director tasks
