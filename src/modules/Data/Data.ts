import { ArrayHelpers, GenericData, RandomGenerator } from "../../utils";
import { DigitOptions, FloatOptions, IntegerOptions, LetterOptions, NumberBetweenOptions } from "./types";

export class Data {
  constructor() {
    this.lowerCaseLetters = GenericData.lowerCaseLetters;
    this.upperCaseLetters = GenericData.upperCaseLetters;
  }

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
   * @param {IntegerOptions} [options] - Optional configuration for generating the random integer.
   * @param {number} [options.digitsCount] - The amount of digits the integer should contain (Only 1 - 10). If not speciefied, it varies between 1 and 10.
   * @throws {Error} If the digitsCount option is not a number or is less than 1 or greater than 10.
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

  /**
   * Generates a random float.
   *
   * @public
   * @param {FloatOptions} [options] - Optional configuration for generating the random float.
   * @param {number} [options.integersCount] - The amount of integers the float should contain (Only 1 - 10). If not specified, it varies between 1 and 10.
   * @param {number} [options.decimalsCount] - The amount of decimals the float should contain (Only 1 - 5). If not specified, it varies between 1 and 5.
   * @throws {Error} - If the decimalsCount option is not a number or is less than 1 or greater than 10.
   * @returns {number} - The generated random float.
   */
  public float(options: FloatOptions = {}): number {
    const decimalsCount = options.decimalsCount ?? RandomGenerator.generateNumberBetween(1, 5);

    if (typeof decimalsCount !== "number") {
      throw new Error("Option 'decimalsCount' has to be a number.");
    }

    if (decimalsCount < 1 || decimalsCount > 5) {
      throw new Error("Option 'decimalsCount' has to be greater than 0 and less than or equal to 5.");
    }

    const integerPart = this.integer({ digitsCount: options.integersCount });

    let decimalPartAsString = "";
    let counter = 0;

    while (counter < decimalsCount) {
      const digit = this.digit({ notNull: true }).toString();
      decimalPartAsString += digit;
      counter += 1;
    }

    const floatAsString = `${integerPart}.${decimalPartAsString}`;

    return parseFloat(floatAsString);
  }

  /**
   * Generates a random number between the min and the max value.
   *
   * @public
   * @param {number} min - The minimum value to generate.
   * @param {number} max - The maximum value to generate.
   * @param {NumberBetweenOptions} [options] - Optional configuration for generating the random float.
   * @param {"int" | "float"} [options.type] - The type of the generated number. If not specified, it defaults to "int" (Integer).
   * @returns {number} - The generated random number between the min and max value.
   */
  public numberBetween(min: number, max: number, options: NumberBetweenOptions = {}): number {
    const type = options.type ?? "int";

    const number = type === "int" ? RandomGenerator.generateNumberBetween(min, max) : RandomGenerator.generateFloatBetween(min, max, { decimalsCount: 2 });

    return number;
  }

  /**
   * Generates a random letter.
   *
   * @public
   * @param {LetterOptions} [options] - Optional configuration for generating the random letter.
   * @param {boolean} [options.onlyLowercase] - If true, it returns a letter that is only lowercase.
   * @param {boolean} [options.onlyUppercase] - If true, it returns a letter that is only uppercase.
   * @returns {string} - The generated random letter.
   */
  public letter(options: LetterOptions = {}): string {
    let letter = "";

    if (options.onlyLowercase) {
      letter = RandomGenerator.generateValue(this.lowerCaseLetters) as string;
    } else if (options.onlyUppercase) {
      letter = RandomGenerator.generateValue(this.upperCaseLetters) as string;
    } else {
      const allLetters = this.upperCaseLetters.concat(this.lowerCaseLetters);
      const shuffledLetters = ArrayHelpers.shuffle(allLetters);
      letter = RandomGenerator.generateValue(shuffledLetters) as string;
    }

    return letter;
  }

  /**
   * An array of only lowercase letters.
   *
   * @private
   * @readonly
   * @type {string[]}
   */
  private lowerCaseLetters: string[];

  /**
   * An array of only uppercase letters.
   *
   * @private
   * @readonly
   * @type {string[]}
   */
  private upperCaseLetters: string[];
}
