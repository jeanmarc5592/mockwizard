import { GenericData, RandomGenerator, ArrayHelpers } from "../../utils";
import { AbstractPerson } from "../Person";
import { InternetData } from "./data";
import { DomainOptions, EmailOptions, IpOptions, PasswordOptions, SlugOptions, UrlOptions, UserNameOptions } from "./types";

export class Internet {
  constructor(person: AbstractPerson) {
    this.lowercaseLetters = GenericData.lowerCaseLetters;
    this.uppercaseLetters = GenericData.upperCaseLetters;
    this.symbols = GenericData.symbols;
    this.numbers = GenericData.numbers;
    this.words = GenericData.words;
    this.anonymousNames = InternetData.anonymousNames;
    this.person = person;
  }

  /**
   * Generates a random password using a combination of lowercase letters, uppercase letters, symbols, and numbers.
   *
   * @public
   * @param {PasswordOptions} options - An optional object that contains additional options.
   * @param {number} options.length - The length of the password (between 6 and 120 characters). If not specified, it defaults to 10.
   * @param {boolean} options.includeLowercase - If true, the password will include lowercase letters.
   * @param {boolean} options.includeUppercase - If true, the password will include uppercase letters.
   * @param {boolean} options.includeSymbols - If true, the password will include symbols.
   * @param {boolean} options.includeNumbers - If true, the password will include numbers.
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
    // Example: "56:a8:e4:8f:43:88"
    const macAddress: string[] = [];

    for (let i = 1; i <= 6; i += 1) {
      const hex = RandomGenerator.generateHex(2);
      macAddress.push(hex);
    }

    return macAddress.join(":");
  }

  /**
   * Generates a random IPv4 address.
   *
   * @public
   * @param {IpOptions} options - An optional object that can contains additional options.
   * @param {boolean} options.isLocal - A boolean indicating whether the IP address should be local (starts with 192.168.xxx.xxx or 10.xxx.xxx.xxx).
   * @returns {string} A string representing the IPv4 address.
   */
  public ipv4(options: IpOptions = {}): string {
    // Example "168.221.255.212"
    const ipv4: number[] = [];

    for (let i = 1; i <= 4; i += 1) {
      const number = RandomGenerator.generateNumberBetween(0, 255);
      ipv4.push(number);
    }

    if (options.isLocal) {
      // Local ipv4 addresses are either 192.186.xxx.xxx or 10.xxx.xxx.xxx
      const firstNumber = RandomGenerator.generateBinary() === 0 ? 192 : 10;
      const secondNumber = firstNumber === 192 ? 168 : ipv4[1];

      ipv4[0] = firstNumber;
      ipv4[1] = secondNumber;
    }

    return ipv4.join(".");
  }

  /**
   * Generates a random IPv6 address.
   *
   * @public
   * @param {IpOptions} options - An optional object that can contains additional options.
   * @param {boolean} options.isLocal - A boolean indicating whether the IP address should be local (starts with fe80).
   * @returns {string} A string representing the IPv6 address.
   */
  public ipv6(options: IpOptions = {}): string {
    // Example "fe80:0e35:0693:5696:7675:9225:a0ca:1572"
    const ipv6: string[] = [];

    for (let i = 1; i <= 8; i += 1) {
      const number = RandomGenerator.generateHex(4);
      ipv6.push(number);
    }

    if (options.isLocal) {
      // Local ipv6 addresses start with fe80
      ipv6[0] = "fe80";
    }

    return ipv6.join(":");
  }

  /**
   * Generates a random slug.
   *
   * @public
   * @param {SlugOptions} options - An optional object that can contains additional options.
   * @param {number} options.length - The number of slug parts in the slug. If not specified, it defaults to 3.
   * @returns {string} A string representing the slug.
   */
  public slug(options: SlugOptions = {}): string {
    const slugLength = options.length ?? 3;

    if (typeof slugLength !== "number") {
      throw new Error("Option 'length' has to be a number.");
    }

    if (slugLength < 1 || slugLength > 10) {
      throw new Error("Option 'length' has to be greater than or equal to 1 and less than or equal to 10.");
    }

    const slug = RandomGenerator.generateMultipleValues(this.words, { amount: slugLength }) as string[];

    return slug.join("-");
  }

  /**
   * Generates a random domain.
   *
   * @public
   * @param {DomainOptions} options - An optional object that can contains additional options.
   * @param {string} options.tld - The Top Level Domain that should be included. If not specified, it defaults to "com".
   * @returns {string} A string representing the domain.
   */
  public domain(options: DomainOptions = {}): string {
    const tld = options.tld || "com";
    const domainName = RandomGenerator.generateValue(this.words) as string;

    if (typeof tld !== "string") {
      throw new Error("Option 'tld' has to be a string.");
    }

    return `${domainName}.${tld}`;
  }

  /**
   * Generates a random url
   *
   * @public
   * @param {UrlOptions} options - An optional object that can contains additional options.
   * @param {string} options.tld - The Top Level Domain that should be included. If not specified, it defaults to "com".
   * @param {boolean} options.includeSSL - If true the domain includes "https://" at the beginning.
   * @param {boolean} options.includeSlug - If true the domain includes a three part slug at the end.
   * @returns {string} A string representing the url.
   */
  public url(options: UrlOptions = {}): string {
    const subDomain = "www";
    const domainName = this.domain({ tld: options.tld });

    let url = `${subDomain}.${domainName}`;

    if (options.includeSSL) {
      url = `https://${url}`;
    }

    if (options.includeSlug) {
      const slug = this.slug();
      url = `${url}/${slug}`;
    }

    return url;
  }

  /**
   * Generates a random username
   *
   * @public
   * @param {UserNameOptions} options - An optional object that can contains additional options.
   * @param {string} options.firstName - The first name that should be included. If not specified, it will be picked randomly.
   * @param {string} options.lastName - The last name that should be included. If not specified, it will be picked randomly.
   * @param {boolean} options.isAnonymous - If true the user name will be anonymous.
   * @returns {string} A string representing the user name.
   * @throws {Error} If the options 'fistName' and 'lastName' are not a string.
   */
  public userName(options: UserNameOptions = {}): string {
    const firstName = options.firstName || this.person.firstName();
    const lastName = options.lastName || this.person.lastName();
    const number = RandomGenerator.generateMultipleValues(this.numbers, { amount: 2 }) as string[];

    if (typeof firstName !== "string" || typeof lastName !== "string") {
      throw new Error("Parameter 'firstName' and 'lastName' has to be a string.");
    }

    let userName = `${firstName}_${lastName}_${number.join("")}`;

    if (options.isAnonymous) {
      userName = RandomGenerator.generateValue(this.anonymousNames) as string;
    }

    return userName;
  }

  /**
   * Generates a random email address
   *
   * @public
   * @param {EmailOptions} options - An optional object that can contains additional options.
   * @param {UserNameOptions} options.userName - Customizations of the username.
   * @param {string} options.provider - The email provider that should be included. If not specified, it defaults to "example.com".
   * @returns {string} A string representing the email address.
   * @throws {Error} If the option 'provider' is not a string.
   */
  public email(options: EmailOptions = {}): string {
    const userName = this.userName(options.userName);
    const provider = options.provider || "example.com";

    if (typeof provider !== "string") {
      throw new Error("Option 'provider' has to be a string.");
    }

    return `${userName}@${provider}`;
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

  /**
   * An array of random blindtext words.
   * @private
   * @readonly
   * @type {string[]}
   */
  private readonly words: string[];

  /**
   * An array of random anonymous names.
   * @private
   * @readonly
   * @type {string[]}
   */
  private readonly anonymousNames: string[];

  /**
   * The Person module.
   * @private
   * @readonly
   * @type {AbstractPerson}
   */
  private readonly person: AbstractPerson;
}
