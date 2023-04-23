import { RandomValue, List } from "./types";

export abstract class BaseModule {
  /**
   * Generates a random value from a given list.
   *
   * @protected
   * @param {List} list - The list of strings to choose from.
   * @returns {RandomValue} A randomly selected string from the given list.
   * @throws {Error} If the `list` parameter is missing or empty.
   */
  protected generateRandomValue(list: List): RandomValue {
    if (!list) {
      throw new Error("Parameter 'list' is missing.");
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
  protected generateRandomBinary(): number {
    return Math.floor(Math.random() * 2);
  }
}
