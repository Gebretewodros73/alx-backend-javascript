/**
 * Represents a Holberton Class.
 */
export default class HolbertonClass {
  /**
   * Creates a new HolbertonClass.
   * @param {Number} size - The size of the class.
   * @param {String} location - The location of the class.
   */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
   * Gets the size of this class.
   */
  get size() {
    return this._size;
  }

  /**
   * Sets the size of this class.
   */
  set size(value) {
    this._size = value;
  }

  /**
   * Gets the location of this class.
   */
  get location() {
    return this._location;
  }

  /**
   * Sets the location of this class.
   */
  set location(value) {
    this._location = value;
  }

  /**
   * Returns the size when cast to a Number.
   * @returns {Number} The size of the class.
   */
  valueOf() {
    return this.size;
  }

  /**
   * Returns the location when cast to a String.
   * @returns {String} The location of the class.
   */
  toString() {
    return this.location;
  }
}
