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
   * Generates an array of random values from a givenlist.
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
}