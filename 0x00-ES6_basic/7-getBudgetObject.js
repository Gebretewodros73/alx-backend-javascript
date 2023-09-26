// Define a function named getBudgetObject with three parameters: income, gdp, and capita
export default function getBudgetObject(income, gdp, capita) {
  // Use object property value shorthand syntax to create a budget object
  const budget = {
    income,
    gdp,
    capita,
  };

  // Return the budget object
  return budget;
}
