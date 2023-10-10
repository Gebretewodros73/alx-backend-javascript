interface Director {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  numberOfReports: number;
}

interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

function isDirector(employee: Director | Teacher): employee is Director {
  return 'numberOfReports' in employee;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example Usage

const employee1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
  workTeacherTasks: () => 'Getting to work'
};

const employee2: Director = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'Los Angeles',
  numberOfReports: 10,
  workDirectorTasks: () => 'Getting to director tasks'
};

console.log(executeWork(employee1)); // Output: Getting to work
console.log(executeWork(employee2)); // Output: Getting to director tasks
