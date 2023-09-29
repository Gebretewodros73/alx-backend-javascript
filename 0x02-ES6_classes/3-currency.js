/**
 * Represents a Currency.
 */
export default class Currency {
  /**
   * Creates a new Currency.
   * @param {String} code - The currency code.
   * @param {String} name - The currency name.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Gets the currency code.
   * @returns {String} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code.
   * @param {String} value - The currency code.
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Currency code must be a string');
    }
    this._code = value;
  }

  /**
   * Gets the currency name.
   * @returns {String} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name.
   * @param {String} value - The currency name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Currency name must be a string');
    }
    this._name = value;
  }

  /**
   * Returns the full currency information.
   * @returns {String} The formatted string representing the currency.
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
