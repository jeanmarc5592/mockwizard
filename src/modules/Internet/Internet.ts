import { GenericData, RandomGenerator, ArrayHelpers } from "../../utils";
import { IpOptions, PasswordOptions } from "./types";

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
   * @param {PasswordOptions} [options={}] - An optional object that contains additional options.
   * @param {number} [options.length] - The length of the password (between 6 and 120 characters). If not specified, it defaults to 10.
   * @param {boolean} [options.includeLowercase] - If true, the password will include lowercase letters.
   * @param {boolean} [options.includeUppercase] - If true, the password will include uppercase letters.
   * @param {boolean} [options.includeSymbols] - If true, the password will include symbols.
   * @param {boolean} [options.includeNumbers] - If true, the password will include numbers.
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

    let passwordData: string[] = [];

    if (!options.includeLowercase && !options.includeUppercase && !options.includeSymbols && !options.includeNumbers) {
      passwordData = [...this.lowercaseLetters, ...this.uppercaseLetters, ...this.symbols, ...this.numbers];
    }

    if (options.includeLowercase) {
      passwordData = [...passwordData, ...this.lowercaseLetters];
    }

    if (options.includeUppercase) {
      passwordData = [...passwordData, ...this.uppercaseLetters];
    }

    if (options.includeSymbols) {
      passwordData = [...passwordData, ...this.symbols];
    }

    if (options.includeNumbers) {
      passwordData = [...passwordData, ...this.numbers];
    }

    const shuffledData = ArrayHelpers.shuffle(passwordData);

    const password = RandomGenerator.generateMultipleValues(shuffledData, { amount: length }) as string[];

    return password.join("");
  }

  /**
   * Generates a random MAC address string.
   *
   * @public
   * @returns {string} The generated MAC address string.
   */
  public macAddress(): string {
    // Example: "56:A8:E4:8F:43:88"
    const result: string[] = [];

    for (let i = 1; i <= 6; i += 1) {
      const hex = RandomGenerator.generateHex(2);
      result.push(hex);
    }

    return result.join(":");
  }

  /**
   * Generates a random IPv4 address.
   *
   * @public
   * @param {IpOptions} options - An optional object that can contains additional options.
   * @param {boolean} options.isLocal - A boolean indicating whether the IP address should be local (starts with 192.168.xxx.xxx or 10.xxx.xxx.xxx).
   * @returns {string} - A string representing the IPv4 address.
   */
  public ipv4(options: IpOptions = {}): string {
    // Example "168.221.255.212"
    const result: number[] = [];

    for (let i = 1; i <= 4; i += 1) {
      const number = RandomGenerator.generateNumberBetween(0, 255);
      result.push(number);
    }

    if (options.isLocal) {
      // Local ipv4 addresses are either 192.186.xxx.xxx or 10.xxx.xxx.xxx
      const firstNumber = RandomGenerator.generateBinary() === 0 ? 192 : 10;
      const secondNumber = firstNumber === 192 ? 168 : result[1];

      result[0] = firstNumber;
      result[1] = secondNumber;
    }

    return result.join(".");
  }

  /**
   * Generates a random IPv6 address.
   *
   * @public
   * @param {IpOptions} options - An optional object that can contains additional options.
   * @param {boolean} options.isLocal - A boolean indicating whether the IP address should be local (starts with FE80).
   * @returns {string} - A string representing the IPv6 address.
   */
  public ipv6(options: IpOptions = {}): string {
    // Example "FE80:0E35:0693:5696:7675:9225:A0CA:1572"
    const result: string[] = [];

    for (let i = 1; i <= 8; i += 1) {
      const number = RandomGenerator.generateHex(4);
      result.push(number);
    }

    if (options.isLocal) {
      // Local ipv6 addresses start with FE80
      result[0] = "FE80";
    }

    return result.join(":");
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
