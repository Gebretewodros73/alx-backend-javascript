/**
 * Represents a Building.
 */
export default class Building {
  /**
   * Creates a new Building.
   * @param {Number} sqft - The square footage.
   */
  constructor(sqft) {
    this.sqft = sqft;
  }

  /**
   * Gets the square footage.
   * @returns {Number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square footage.
   * @param {Number} value - The square footage.
   */
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    this._sqft = value;
  }

  /**
   * Provides an evacuation warning message.
   * @throws {Error} Throws an error if not overridden by subclass.
   */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
