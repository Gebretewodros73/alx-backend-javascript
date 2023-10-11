# 0x04-TypeScript

This repository contains solutions for the ALX Backend JavaScript tasks.

## Task 0: Creating an interface for a student

- Directory: [task_0](./task_0)
- Files: [main.ts](./task_0/js/main.ts), [package.json](./task_0/package.json), [.eslintrc.js](./task_0/.eslintrc.js), [tsconfig.json](./task_0/tsconfig.json), [webpack.config.js](./task_0/webpack.config.js)

```bash
cd task_0
sudo npm run start-dev
```

### Solution

- An interface named `Student` was created with elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`.
- Two students were created and stored in an array named `studentsList`.
- Vanilla JavaScript was used to render a table with rows for each student containing their first name and location.

## Task 1: Let's build a Teacher interface

- Directory: [task_1](./task_1)
- Files: [main.ts](./task_1/js/main.ts), [package.json](./taks_1/package.json), [tsconfig.json](./task_1/tsconfig.json), [webpack.config.js](./task_1/webpack.config.js)

```bash
cd task_1
sudo tsc js/main.ts
sudo node js/main.js
```

### Solution

- An interface named `Teacher` was created with attributes: `firstName(string)`, `lastName(string)`, `fullTimeEmployee(boolean)`, `yearsOfExperience(number)`, and `location(string)`.
- `firstName` and `lastName` are modifiable only when a `Teacher` is first initialized.
- `fullTimeEmployee` is always defined.
- `yearsOfExperience` is optional.
- `location` is always defined.
- The possibility to add any attribute like `contract(boolean)` without specifying the name of the attribute was implemented.

## Task 2: Extending the Teacher class

- Directory: [task_1](./task_1)
- File: [main.ts](./task_1/js/main.ts)

```bash
cd task_1
sudo tsc js/main.ts
sudo node js/main.js
```

### Solution

- An interface named `Directors` was created, extending `Teacher`, requiring an attribute named `numberOfReports(number)`.

## Task 3: Printing teachers

- Directory: [task_1](./task_1)
- File: [main.ts](./task_1/js/main.ts)

```bash
cd task_1
sudo tsc js/main.ts
sudo node js/main.js
```

### Solution

- A function `printTeacher` was created that accepts `firstName` and `lastName` and returns the first letter of the `firstName` and the full `lastName`.
- An interface for the function named `printTeacherFunction` was implemented.

## Task 4: Writing a class

- Directory: [task_1](./task_1)
- File: [main.ts](./task_1/js/main.ts)

```bash
cd task_1
sudo tsc js/main.ts
sudo node js/main.js
```

### Solution

- A class named `StudentClass` was created with a constructor accepting `firstName(string)` and `lastName(string)` arguments.
- The class has a method named `workOnHomework` that returns the string "Currently working".
- The class has a method named `displayName` that returns the `firstName` of the student.

## Task 5: Advanced types Part 1

- Directory: [task_2](./task_2)
- Files: [main.ts](./task_2/js/main.ts), [webpack.config.js](./task_2/webpack.config.js), [tsconfig.json](./task_2/tsconfig.json), [package.json](task_2/package.json)

```bash
cd task_2
sudo tsc js/main.ts
sudo node js/main.js
```

### Solution

- Interfaces `DirectorInterface` and `TeacherInterface` with expected methods were created.
- Classes `Director` and `Teacher` were implemented to match their respective interfaces.
- A function `createEmployee` was created to return either a `Director` or a `Teacher` instance based on salary.

## Task 6: Creating functions specific to employees

- Directory: [task_2](./task_2)
- File: [main.ts](./task_2/js/main.ts)

```bash
cd task_2
sudo tsc js/main.ts
sudo node js/main.js
```

### Solution

- A function `isDirector` was created that accepts an employee and checks if the employee is a director.
- A function `executeWork` was created that accepts an employee and calls the appropriate work method based on the type of employee.

## Task 7: String literal types

- Directory: [task_2](./task_2)
- File: [main.ts](./task_2/js/main.ts)

```bash
cd task_2
sudo tsc js/main.ts
sudo node js/main.js
```

### Solution

- A String literal type named `Subjects` was created allowing a variable to have the value "Math" or "History" only.
- A function `teachClass` was implemented that returns a string based on the value of `todayClass`.

## Task 8: Ambient Namespaces

- Directory: [task_3](./task_3)
- Files: [main.ts](./task_3/js/main.ts), [interface.ts](./task_3/js/interface.js), [crud.d.ts](./task_3/js/crud.d.ts)

```bash
cd task_3
sudo npm run start-dev
```

### Solution

- An interface `RowElement` and a type `RowID` were built.
- An ambient file `crud.d.ts` was created with type declarations for each crud function.

## Task 9: Namespace & Declaration merging

- Directory: [task_4](./task_4)
- Files: [package.json](./task_4/package.json), [tsconfig.json](./task_4/tsconfig.json), [Teacher.ts](./task_4/js/subjects/Teacher.ts), [Subject.ts](./task_4/js/subjects/Subject.ts), [Cpp.ts](./task_4/js/subjects/Cpp.ts), [Java.ts](./task_4/js/subjects/Java.ts), [React.ts](./task_4/js/subjects/Teacher.ts)

### Solution

- Interfaces and classes were defined in a namespace named `Subjects` with specific attributes and methods.

## Task 10: Update task_4/js/main.ts

- Directory: [task_4](./task_4)
- File: [main.ts](./task_4/js/main.ts)

### Solution

- Constants `cpp` for Cpp Subjects, `java` for Java Subjects, and `react` for React Subjects were created and exported.
- A Teacher object `cTeacher` with `experienceTeachingC = 10` was created and exported.
- Information about subjects and teachers was printed to the console.

## Task 11: Brand convention & Nominal typing

- Directory: [task_5](./task_5)
- Files: [main.ts](./task_5/js/main.ts), [package.json](./task_5/package.json), [tsconfig.json](./task_5/tsconfig.json), [webpack.config.js](./task_5/webpack.config.js)

### Solution

- Interfaces `MajorCredits` and `MinorCredits` with a `credits` property, each with a unique brand property, were created.
- Functions `sumMajorCredits` and `sumMinorCredits` were implemented to operate on the respective credit types.


## Usage

- clone the repository `https://github.com/Gebretewodros73/alx-backend-javascript.git`
- go to the directory `alx-backend-javascript/0x04-TypeScript/task_#`
- and run as is described in each task
