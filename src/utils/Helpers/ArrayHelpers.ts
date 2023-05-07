export class ArrayHelpers {
  /**
   * Shuffles an array in place using the Fisher-Yates Shuffle Algorithm.
   * @static
   * @param {any[]} array - The array to shuffle.
   * @returns {any[]} - A new shuffled array.
   */
  static shuffle(array: any[]): any[] {
    if (!(array instanceof Array)) {
      throw new Error("Parameter 'array' has to be an Array");
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
}
