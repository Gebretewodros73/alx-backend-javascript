function hasValuesFromArray(set, arr) {
  // Iterate through the elements of the array
  for (const element of arr) {
    // Check if the Set contains the element
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}

export default hasValuesFromArray;
