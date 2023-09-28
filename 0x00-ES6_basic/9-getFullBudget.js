// Import the function getBudgetObject from the file './7-getBudgetObject.js'
import getBudgetObject from './7-getBudgetObject';

// Define a function named getFullBudgetObject with three parameters: income, gdp, and capita
export default function getFullBudgetObject(income, gdp, capita) {
  // Call the function getBudgetObject to create the budget object
  const budget = getBudgetObject(income, gdp, capita);

  // Use ES6 method properties to define methods directly within the object literal
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  // Return the fullBudget object
  return fullBudget;
}
