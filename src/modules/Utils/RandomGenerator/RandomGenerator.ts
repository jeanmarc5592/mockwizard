import { RandomValue, List } from "./types";

export class RandomGenerator {
  /**
   * Generates a random value from a given list.
   *
   * @protected
   * @param {List} list - The list of strings to choose from.
   * @returns {RandomValue} A randomly selected string from the given list.
   * @throws {Error} If the `list` parameter is missing or empty.
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
   * Generates a random binary integer 0 or 1.
   *
   * @protected
   * @returns {number} A randomly generated binary integer.
   */
  static generateBinary(): number {
    return Math.floor(Math.random() * 2);
  }
}
