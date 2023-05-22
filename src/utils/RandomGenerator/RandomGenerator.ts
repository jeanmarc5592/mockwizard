import { RandomValue, List, MultipleValuesOptions, FloatBetweenOptions, RandomObject } from "./types";

export class RandomGenerator {
  /**
   * Generates a random value from a given list.
   *
   * @static
   * @param {List} list - The list of values to choose from.
   * @returns {RandomValue} A randomly selected value from the given list.
   * @throws {Error} If the `list` parameter is missing or not an Array.
   */
  static generateValueFromArray(list: List): RandomValue {
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
  static generateMultipleValuesFromArray(list: List, options: MultipleValuesOptions): RandomValue[] {
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
      const randomValue = this.generateValueFromArray(list);
      values.push(randomValue);
      counter += 1;
    }

    return values;
  }

  /**
   * Generates a random key value pair from a given object.
   *
   * @static
   * @param {RandomObject} object - The object to choose from.
   * @returns {RandomObject} A randomly selected key value pair from the given object.
   * @throws {Error} If the `object` parameter is falsy.
   */
  static generateElementFromObject(object: RandomObject): RandomObject {
    if (!object) {
      throw new Error("Parameter 'object' is missing.");
    }

    if (Object.keys(object).length === 0) {
      return {};
    }

    const resultKey = this.generateValueFromArray(Object.keys(object)) as string;
    const resultValue = object[resultKey];

    return { [resultKey]: resultValue };
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
   * Generates a random number as an integer between the specified minimum and maximum values (inclusive).
   *
   * @static
   * @param {number} min - The minimum value to generate.
   * @param {number} max - The maximum value to generate.
   * @returns {number} The generated random number.
   * @throws {Error} Throws an error if `min` or `max` is missing or not a number.
   * @throws {Error} Throws an error if `min` or `max` is less than 0.
   * @throws {Error} Throws an error if `min` is greater than or equal to `max`.
   * @throws {Error} Throws an error if `max` is less than or equal to `min`.
   */
  static generateNumberBetween(min: number, max: number): number {
    if (min === undefined || max === undefined) {
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
   * Generates a random float between the specified minimum and maximum values (maximum value excluded).
   *
   * @static
   * @param {number} min - The minimum value to generate.
   * @param {number} max - The maximum value to generate.
   * @param {FloatBetweenOptions} [options={}] - An optional object containing additional options.
   * @param {number} [options.decimalsCount] - The amount of decimals the float should contain (Only 1 - 5). If not specified, it defaults to 2.
   * @returns {number} The generated random float.
   * @throws {Error} Throws an error if `min` or `max` is not a number.
   * @throws {Error} Throws an error if `min` or `max` is less than 0.
   * @throws {Error} Throws an error if `min` is greater than or equal to `max`.
   * @throws {Error} Throws an error if `max` is less than or equal to `min`.
   * @throws {Error} Throws an error if `decimalsCount` is not a number.
   * @throws {Error} Throws an error if `decimalsCount` is less than 1 and greater than 5.
   */
  static generateFloatBetween(min: number, max: number, options: FloatBetweenOptions = {}): number {
    if (min === undefined || max === undefined) {
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

    const decimals = options.decimalsCount ?? 2;

    if (typeof decimals !== "number") {
      throw new Error("Option 'decimalsCount' has to be a number.");
    }

    if (decimals < 1 || decimals > 5) {
      throw new Error("Option 'decimalsCount' has to be greater than or equal to 1 and less than or equal to 5.");
    }

    let randomFloat = 0;

    // if the random float is something like 8, try again to ensure that always a float gets created here
    while (Number.isInteger(randomFloat)) {
      randomFloat = Math.random() * (max - min) + min;
    }

    return parseFloat(randomFloat.toFixed(decimals));
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
    if (length === undefined) {
      throw new Error("Parameter 'length' is missing.");
    }

    if (typeof length !== "number") {
      throw new Error("Parameter 'length' has to be a number.");
    }

    if (length < 0) {
      throw new Error("Parameter 'length' has to be greater than 0.");
    }

    let result = "";
    const hexChars = "0123456789abcdef";

    let counter = 1;
    while (counter <= length) {
      result += hexChars[Math.floor(Math.random() * hexChars.length)];
      counter += 1;
    }

    return result;
  }
}
