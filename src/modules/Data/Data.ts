import { RandomGenerator } from "../../utils";
import { DigitOptions, IntegerOptions } from "./types";

export class Data {
  /**
   * Generates a random digit between 0 and 9.
   *
   * @public
   * @param {DigitOptions} [options] - Optional configuration for generating the random digit.
   * @param {boolean} [options.notNull] - If true, the generated digit will not be 0.
   * @returns {number} - The generated random digit.
   */
  public digit(options: DigitOptions = {}): number {
    const start = options.notNull ? 1 : 0;
    const end = 9;

    return RandomGenerator.generateNumberBetween(start, end);
  }

  /**
   * Generates a random integer.
   *
   * @public
   * @param {IntegerOptions} [options] - Optional configuration for generating the random digit.
   * @param {number} [options.digitsCount] - The amount of digits the integer should contain (1-10 digits are allowd). If not specified, it defaults to 3.
   * @returns {number} - The generated random integer.
   */
  public integer(options: IntegerOptions = {}): number {
    const digitsCount = options.digitsCount || RandomGenerator.generateNumberBetween(1, 10);

    if (typeof digitsCount !== "number") {
      throw new Error("Option 'digitsCount' has to be a number.");
    }

    if (digitsCount < 1 || digitsCount > 10) {
      throw new Error("Option 'digitsCount' has to be greater than 0 and less than or equal to 10.");
    }

    let integerAsString = "";
    let counter = 0;

    while (counter < digitsCount) {
      // Don't produce a 0 as the first digit
      integerAsString += this.digit({ notNull: counter === 0 });
      counter += 1;
    }

    return parseInt(integerAsString, 10);
  }
}
