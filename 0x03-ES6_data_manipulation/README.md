# 0x03. ES6 Data Manipulation

## Overview

This directory contains JavaScript tasks focused on ES6 data manipulation. Each task deals with different aspects of working with data structures, arrays, sets, and maps using modern JavaScript features.

## Tasks

1. [Basic List of Objects](./0-get_list_students.js)
   - Create a function `getListStudents` that returns an array of objects with specific attributes.
   - Example Usage: `console.log(getListStudents());`

2. [More Mapping](./1-get_list_student_ids.js)
   - Create a function `getListStudentIds` that extracts ids from a list of objects.
   - Example Usage: `console.log(getListStudentIds(getListStudents()));`

3. [Filter](./2-get_students_by_loc.js)
   - Create a function `getStudentsByLocation` that filters students by a specific city.
   - Example Usage: `console.log(getStudentsByLocation(students, 'San Francisco'));`

4. [Reduce](./3-get_ids_sum.js)
   - Create a function `getStudentIdsSum` that computes the sum of all student ids.
   - Example Usage: `console.log(getStudentIdsSum(students));`

5. [Combine](./4-update_grade_by_city.js)
   - Create a function `updateStudentGradeByCity` that updates grades for students in a specific city.
   - Example Usage: `console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [/*grades*/]));`

6. [Typed Arrays](./5-typed_arrays.js)
   - Create a function `createInt8TypedArray` that returns an ArrayBuffer with an Int8 value at a specific position.
   - Example Usage: `console.log(createInt8TypedArray(length, position, value));`

7. [Set Data Structure](./6-set.js)
   - Create a function `setFromArray` that converts an array to a Set.
   - Example Usage: `console.log(setFromArray([/*elements*/]));`

8. [More Set Data Structure](./7-has_array_values.js)
   - Create a function `hasValuesFromArray` that checks if all elements in an array exist in a Set.
   - Example Usage: `console.log(hasValuesFromArray(set, [/*array*/]));`

9. [Clean Set](./8-clean_set.js)
   - Create a function `cleanSet` that filters and concatenates set values starting with a specific string.
   - Example Usage: `console.log(cleanSet(set, 'startString'));`

10. [Map Data Structure](./9-groceries_list.js)
    - Create a function `groceriesList` that returns a map of groceries and their quantities.
    - Example Usage: `console.log(groceriesList());`

11. [More Map Data Structure](./10-update_uniq_items.js)
    - Create a function `updateUniqueItems` that updates quantities for unique items in a map.
    - Example Usage: `console.log(updateUniqueItems(map));`

## How to Use

To run each task, you can use the following command:

```bash
npm run dev <task-main-file.js>
```

Replace <task-main-file.js> with the appropriate JavaScript file for the task you want to run.

`Note`: Make sure to navigate to the correct directory before running the command.

## Repository Information:

* GitHub Repository: [alx-backend-javascript](./https://github.com/gebretewodros73/alx-backend-javascript)
* Directory: 0x03-ES6_data_manipulation
