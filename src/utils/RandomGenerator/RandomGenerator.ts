import { RandomValue, List, MultipleValuesOptions } from "./types";

export class RandomGenerator {
  /**
   * Generates a random value from a given list.
   *
   * @static
   * @param {List} list - The list of strings to choose from.
   * @returns {RandomValue} A randomly selected string from the given list.
   * @throws {Error} If the `list` parameter is missing or not an Array.
   */
  static generateValue(list: List): RandomValue {
    if (!list) {
      throw new Error("Parameter 'list' is missing.");
    }

    if (!Array.isArray(list)) {
      throw new Error("Parameter 'list' must be an Array.");
    }

    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }

  /**
   * Generates an array of random values from a given list.
   *
   * @static
   * @param {List} list - The list to generate random values from.
   * @param {MultipleValuesOptions} [options={}] - An optional object containing additional options.
   * @param {number} [options.amount] - The number of random values to generate. Is required.
   * @returns {RandomValue[]} An array of random values.
   * @throws {Error} If the 'list' parameter is missing or not an Array.
   * @throws {Error} If the 'amount' option is greater than the length of the 'list' parameter.
   * @throws {Error} If the 'amount' option is less than or equal to 0.
   */
  static generateMultipleValues(list: List, options: MultipleValuesOptions): RandomValue[] {
    if (!list) {
      throw new Error("Parameter 'list' is missing.");
    }

    if (!Array.isArray(list)) {
      throw new Error("Parameter 'list' must be an Array.");
    }

    if (options.amount > list.length) {
      throw new Error("Option 'amount' can't be larger than parameter 'list'.");
    }

    if (options.amount <= 0) {
      throw new Error("Option 'amount' must be greater than 0.");
    }

    const values: RandomValue[] = [];

    let counter = 1;
    while (counter <= options.amount) {
      const randomValue = this.generateValue(list);
      values.push(randomValue);
      counter += 1;
    }

    return values;
  }

  /**
   * Generates a random binary integer 0 or 1.
   *
   * @static
   * @returns {number} A randomly generated binary integer.
   */
  static generateBinary(): number {
    return Math.floor(Math.random() * 2);
  }

  /**
   * Generates a random number between the specified minimum and maximum values (inclusive).
   *
   * @static
   * @param {number} min - The minimum value to generate.
   * @param {number} max - The maximum value to generate.
   * @returns {number} The generated random number.
   * @throws {Error} Throws an error if `min` or `max` is missing or not a number.
   * @throws {Error} Throws an error if `min` or `max` is less than or equal to 0.
   * @throws {Error} Throws an error if `min` is greater than or equal to `max`.
   * @throws {Error} Throws an error if `max` is less than or equal to `min`.
   */
  static generateNumberBetween(min: number, max: number): number {
    if (!min || !max) {
      throw new Error("Parameter 'min' or 'max' is missing.");
    }

    if (typeof min !== "number" || typeof max !== "number") {
      throw new Error("Parameter 'min' and 'max' has to be a number.");
    }

    if (min < 0 || max < 0) {
      throw new Error("Parameter 'min' and 'max' has to be greater than 0.");
    }

    if (min >= max) {
      throw new Error("Parameter 'min' has to be smaller than 'max'.");
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * Generates a random hexadecimal string of the given length.
   *
   * @static
   * @param {number} length - The length of the hexadecimal string to be generated.
   * @returns {string} - A random hexadecimal string.
   * @throws {Error} - If the length parameter is missing, not a number, or less than or equal to 0.
   */
  static generateHex(length: number): string {
    if (!length) {
      throw new Error("Parameter 'length' is missing.");
    }

    if (typeof length !== "number") {
      throw new Error("Parameter 'length' has to be a number.");
    }

    if (length < 0) {
      throw new Error("Parameter 'length' has to be greater than 0.");
    }

    let result = "";
    const hexChars = "123456789ABCDEFG";

    let counter = 1;
    while (counter <= length) {
      result += hexChars[Math.floor(Math.random() * hexChars.length)];
      counter += 1;
    }

    return result;
  }
}
