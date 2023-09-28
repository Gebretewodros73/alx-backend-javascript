// Define a function named appendToEachArrayValue with two parameters: array and appendString
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  // Use a for...of loop to iterate through the elements of the array
  for (const value of array) {
    // Append the appendString to each element of the array
    newArray.push(appendString + value);
  }

  // Return the modified array
  return newArray;
}
