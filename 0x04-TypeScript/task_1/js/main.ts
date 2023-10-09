// Task 1: Teacher Interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional attributes
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York"
};

const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "Los Angeles",
  contract: true // Additional attribute
};

console.log(teacher1);
console.log(teacher2);

// Task 2: Extending Teacher Interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
  numberOfReports: 10,
};

const director2: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'Los Angeles',
  numberOfReports: 7,
};

console.log(director1);
console.log(director2);

// Task 3: Printing teachers
function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
}

const teacherName1 = printTeacher(teacher1.firstName, teacher1.lastName);
const teacherName2 = printTeacher(teacher2.firstName, teacher2.lastName);

console.log(teacherName1); // Output: J. Doe
console.log(teacherName2); // Output: J. Smith
