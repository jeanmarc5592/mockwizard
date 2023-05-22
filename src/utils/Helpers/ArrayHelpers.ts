export class ArrayHelpers {
  /**
   * Shuffles an array in place using the Fisher-Yates Shuffle Algorithm.
   *
   * @static
   * @param {any[]} array - The array to shuffle.
   * @returns {any[]} - A new shuffled array.
   * @throws {Error} If the `array` parameter is missing or not an Array.
   */
  static shuffle(array: any[]): any[] {
    if (!(array instanceof Array)) {
      throw new Error("Parameter 'array' has to be an Array.");
    }

    const rawArray = [...array];

    // Fisher-Yates Shuffle Algorithm
    // See: https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
    for (let i = rawArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [rawArray[i], rawArray[j]] = [rawArray[j], rawArray[i]];
    }

    return rawArray;
  }

  /**
   * Removes non-unique values from an array.
   *
   * @static
   * @param {any[]} array - The array from which non-unique values should be removed.
   * @returns {any[]} - A new array containing only the unique values from the input array.
   * @throws {Error} - If the 'array' parameter is not an Array.
   */
  static removeNonUniqueValues(array: any[]): any[] {
    if (!(array instanceof Array)) {
      throw new Error("Parameter 'array' has to be an Array.");
    }

    const uniqueValues = new Set(array);

    return Array.from(uniqueValues);
  }

  /**
   * Removes an element from an array by its index.
   *
   * @static
   * @param {any[]} array - The array from which the element should be removed.
   * @param {number} index - The index of the element to remove.
   * @returns {any[]} - An array containing the removed element.
   * @throws {Error} - If the 'array' parameter is not an Array.
   * @throws {Error} - If the 'index' parameter is not a number, or if the 'index' parameter is less than 0.
   */
  static removeValueByIndex(array: any[], index: number): any[] {
    if (!(array instanceof Array)) {
      throw new Error("Parameter 'array' has to be an Array.");
    }

    if (typeof index !== "number") {
      throw new Error("Parameter 'index' has to be a number.");
    }

    if (index < 0) {
      throw new Error("Parameter 'index' has to be greater than 0.");
    }

    array.splice(index, 1);

    return array;
  }
}
