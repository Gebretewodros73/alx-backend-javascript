// Define a function named getBudgetForCurrentYear with three parameters: income, gdp, and capita
export default function getBudgetForCurrentYear(income, gdp, capita) {
  // Define a function named getCurrentYear to get the current year
  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  // Use computed property names to dynamically create properties based on the current year
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  // Return the budget object
  return budget;
}
