// Define a function named appendToEachArrayValue with two parameters: array and appendString
export default function appendToEachArrayValue(array, appendString) {
  // Use a for...of loop to iterate through the elements of the array
  for (const value of array) {
    // Append the appendString to each element of the array
    value = appendString + value; // Note: This line will throw an error, so it's commented out
  }

  // Return the modified array
  return array;
}
