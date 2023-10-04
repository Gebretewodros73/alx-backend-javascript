function getStudentsByLocation(students, city) {
  // Use the filter function to create a new array with students in the specified city
  return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;
