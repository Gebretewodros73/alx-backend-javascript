/**
 * Creates a Map of groceries with name and quantity.
 *
 * @returns {Map} - A Map object containing groceries and their quantities.
 */
export default function groceriesList() {
  const groceries = new Map(); // Initialize a new Map object.

  // Add groceries and their quantities to the map.
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries; // Return the populated Map.
}
