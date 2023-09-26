// Define a function named concatArrays that takes three parameters: array1, array2, and string
export default function concatArrays(array1, array2, string) {
  // Use the spread syntax (...) to concatenate array1 and array2 into a new array
  const concatenatedArray = [...array1, ...array2];

  // Convert the string into an array of characters using the spread syntax
  const stringArray = [...string];

  // Return the concatenated array and string array
  return concatenatedArray.concat(stringArray);
}
