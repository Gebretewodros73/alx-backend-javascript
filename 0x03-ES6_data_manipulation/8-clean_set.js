/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 *
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 *
 * @returns {String} - A hyphen-separated string of modified values.
 */
export default function cleanSet(set, startString) {
  const parts = []; // Initialize an array to store modified strings.

  // Check if set or startString are invalid, return empty string.
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  // Iterate over the values in the set.
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }

  // Join the modified strings with a dash and return the result.
  return parts.join('-');
}
