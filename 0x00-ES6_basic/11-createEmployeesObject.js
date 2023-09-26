// Define a function named createEmployeesObject with two parameters: departmentName and employees
export default function createEmployeesObject(departmentName, employees) {
  // Create an object with a single property where the key is departmentName
  const employeesObject = {
    [departmentName]: employees,
  };

  // Return the employeesObject
  return employeesObject;
}
