function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an API call
    setTimeout(() => {
      const data = { message: 'API response data' };
      resolve(data);
    }, 2000); // Assuming a 2-second delay for the API call
  });
}

export default getResponseFromAPI;
