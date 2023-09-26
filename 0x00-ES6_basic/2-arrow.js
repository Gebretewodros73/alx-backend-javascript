// Using arrow function syntax to define the addNeighborhood method
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Using arrow function to define addNeighborhood
  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    // Using self to access the outer this context
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
