import { GenericData, RandomGenerator, ArrayHelpers } from "../../utils";
import { PasswordOptions } from "./types";

export class Internet {
  constructor() {
    this.lowercaseLetters = GenericData.lowerCaseLetters;
    this.uppercaseLetters = GenericData.upperCaseLetters;
    this.symbols = GenericData.symbols;
    this.numbers = GenericData.numbers;
  }

  /**
   * Generates a random password using a combination of lowercase letters, uppercase letters, symbols, and numbers.
   *
   * @public
   * @param {PasswordOptions} [options={}] - An optional object that contains the following properties:
   * @param {number} [options.length] - The length of the password (between 6 and 120 characters). If not specified, it defaults to 10.
   * @throws {Error} If the length option is not a number or is less than 6 or greater than 120.
   * @returns {string} The generated password.
   */
  public password(options: PasswordOptions = {}): string {
    const length = options.length ?? 10;

    if (typeof length !== "number") {
      throw new Error("Option 'length' must be a number.");
    }

    if (length < 6) {
      throw new Error("Option 'length' must be greater than or equal to 6.");
    }

    if (length > 120) {
      throw new Error("Option 'length' must be less than or equal to 120.");
    }

    const passwordData = [...this.lowercaseLetters, ...this.uppercaseLetters, ...this.symbols, ...this.numbers];
    const shuffledData = ArrayHelpers.shuffle(passwordData);

    const password = RandomGenerator.generateMultipleValues(shuffledData, { amount: length }) as string[];

    return password.join("");
  }

  /**
   * An array of lowercase alphabetical letters.
   *
   * @private
   * @readonly
   * @type {string[]}
   */
  private readonly lowercaseLetters: string[];

  /**
   * An array of uppercase alphabetical letters.
   *
   * @private
   * @readonly
   * @type {string[]}
   */
  private readonly uppercaseLetters: string[];

  /**
   * An array of symbols.
   *
   * @private
   * @readonly
   * @type {string[]}
   */
  private readonly symbols: string[];

  /**
   * An array of numbers.
   *
   * @private
   * @readonly
   * @type {string[]}
   */
  private readonly numbers: string[];
}
