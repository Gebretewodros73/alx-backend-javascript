/**
 * Updates the quantity of unique items in a Map.
 *
 * @param {Map} map - The Map containing groceries and their quantities.
 * @throws {Error} - Throws an error if the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  // Check if the argument is a Map.
  if (!(map instanceof Map)) {
    throw new Error('Cannot process. Argument must be a Map.');
  }

  // Iterate over the entries in the Map.
  for (const [key, value] of map.entries()) {
    // If quantity is 1, update it to 100.
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
