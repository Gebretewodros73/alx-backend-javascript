function updateStudentGradeByCity(students, city, newGrades) {
  // Use map and filter functions to update grades
  return students.map((student) => {
    // Find the corresponding grade in newGrades array, or set it to 'N/A' if not found
    const grade = newGrades.find((grade) => grade.studentId === student.id) || { grade: 'N/A' };

    // Return a new object with updated grade
    return { ...student, grade: grade.grade };
  }).filter((student) => student.location === city);
}

export default updateStudentGradeByCity;
