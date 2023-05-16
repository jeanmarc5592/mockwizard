import { RandomGenerator } from "../../utils";
import { DigitOptions } from "./types";

export class Data {
  /**
   * Generates a random digit between 0 and 9.
   *
   * @param {DigitOptions} [options] - Optional configuration for generating the random digit.
   * @param {boolean} [options.notNull] - If true, the generated digit will not be 0.
   * @returns {number} - The generated random digit.
   */
  digit(options: DigitOptions = {}): number {
    const start = options.notNull ? 1 : 0;
    const end = 9;

    return RandomGenerator.generateNumberBetween(start, end);
  }
}
