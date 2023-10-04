function cleanSet(set, startString) {
  let result = '';

  // Iterate through the elements of the Set
  for (const element of set) {
    // Check if the element starts with startString
    if (element.startsWith(startString)) {
      // Append the rest of the string to the result
      result += `${element.slice(startString.length)}-`;
    }
  }

  // Remove the trailing '-' if it exists
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}

export default cleanSet;
