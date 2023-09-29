import Currency from './3-currency';

/**
 * Represents a Pricing.
 */
export default class Pricing {
  /**
   * Creates a new Pricing.
   * @param {Number} amount - The amount.
   * @param {Currency} currency - The currency.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Gets the amount.
   * @returns {Number} The amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount.
   * @param {Number} value - The amount.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Gets the currency.
   * @returns {Currency} The currency.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency.
   * @param {Currency} value - The currency.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class');
    }
    this._currency = value;
  }

  /**
   * Returns the formatted price.
   * @returns {String} The formatted price.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts the price based on a conversion rate.
   * @param {Number} conversionRate - The conversion rate.
   * @returns {Number} The converted price.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
