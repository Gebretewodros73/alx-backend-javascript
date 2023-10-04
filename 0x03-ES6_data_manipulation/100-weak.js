/**
 * WeakMap to track the number of times queryAPI is called for each endpoint.
 * @type {WeakMap}
 */
const weakMap = new WeakMap();

/**
 * Updates the query count for a specific endpoint.
 * Throws an error if the count exceeds 5.
 * @param {Object} endpoint - The endpoint object { protocol: string, name: string }.
 * @throws {Error} - Throws an error if the endpoint load is high.
 */
function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count++;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count);
}

export { queryAPI, weakMap };
