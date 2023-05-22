import { ArrayHelpers, GenericData, RandomGenerator } from "../../utils";
import { ArrayElementsOptions, DigitOptions, FloatOptions, IntegerOptions, LetterOptions, NumberBetweenOptions, ObjectElementOptions, ObjectElementsOptions } from "./types";

export class Data {
  constructor() {
    this.lowercaseLetters = GenericData.lowerCaseLetters;
    this.uppercaseLetters = GenericData.upperCaseLetters;
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
    let number = min;

    if (options.asFloat) {
      number = RandomGenerator.generateFloatBetween(min, max, { decimalsCount: 2 });
    } else {
      number = RandomGenerator.generateNumberBetween(min, max);
    }

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
      letter = RandomGenerator.generateValueFromArray(this.lowercaseLetters) as string;
    } else if (options.onlyUppercase) {
      letter = RandomGenerator.generateValueFromArray(this.uppercaseLetters) as string;
    } else {
      const allLetters = this.uppercaseLetters.concat(this.lowercaseLetters);
      const shuffledLetters = ArrayHelpers.shuffle(allLetters);
      letter = RandomGenerator.generateValueFromArray(shuffledLetters) as string;
    }

    return letter;
  }

  /**
   * Generates a random element from a given array.
   *
   * @public
   * @param {any[]} array - The array to choose the element from.
   * @returns {any} - The generated random element.
   */
  public arrayElement(array: any[]): any {
    return RandomGenerator.generateValueFromArray(array);
  }

  /**
   * Generates unique elements from a given array.
   *
   * @public
   * @param {any[]} array - The array to choose the elements from.
   * @param {ArrayElementsOptions} [options] - Optional configuration for generating the random elements.
   * @param {number} [options.elementsCount] - The amount of unique elements it should generate.
   * (If it's higher than the actual possible amount of unique values, it'll generate the highest possible amount of unique values.)
   * @throws {Error} - If 'elementsCount' option is not a number or less than 1.
   * @returns {any[]} - The generated random elements.
   */
  public arrayElements(array: any[], options: ArrayElementsOptions = {}): any[] {
    let elementsCount = options.elementsCount ?? 1;
    const arrayWithUniqueElements = ArrayHelpers.removeNonUniqueValues(array);

    if (typeof elementsCount !== "number") {
      throw new Error("Option 'elementsCount' has to be a number.");
    }

    if (elementsCount < 1) {
      throw new Error("Option 'elementsCount' has to be greater than 1.");
    }

    // For the case if 'elementsCount' is greater than the actual amount of unique values in the array
    // --> 'elementsCount' should be equal to the highest possible amount of unique values
    if (elementsCount > arrayWithUniqueElements.length) {
      elementsCount = arrayWithUniqueElements.length;
    }

    const elements: any[] = [];

    for (let i = 0; i < elementsCount; i += 1) {
      const randomElement = RandomGenerator.generateValueFromArray(arrayWithUniqueElements);

      // Remove the generated element from the result array to prevent having duplicate elements in the result array
      const elementIndex = arrayWithUniqueElements.indexOf(randomElement);
      ArrayHelpers.removeValueByIndex(arrayWithUniqueElements, elementIndex);

      elements.push(randomElement);
    }

    return elements;
  }

  /**
   * Generates a random value or key from a given object.
   *
   * @public
   * @param {{}} object - The object to choose the element from.
   * @param {ObjectElementOptions} [options] - Optional configuration for generating the random element.
   * @param {number} [options.returnKey] - If true, it returns a random key. If not specified, it returns a random value.
   * @returns {any} - The generated random element.
   */
  public objectElement(object: {}, options: ObjectElementOptions = {}): any {
    const element = RandomGenerator.generateElementFromObject(object);
    const elementKey = Object.keys(element)[0];
    const elementValue = element[elementKey];

    return options.returnKey ? elementKey : elementValue;
  }

  /**
   * Generates unique random values or keys from a given object.
   *
   * @public
   * @param {{}} object - The object to choose the elements from.
   * @param {ObjectElementsOptions} [options] - Optional configuration for generating the random elements.
   * @param {number} [options.elementsCount] - The amount of unique elements it should generate.
   * @param {number} [options.returnKey] - If true, it returns random keys. If not specified, it returns a random values.
   * @throws {Error} - If 'elementsCount' option is not a number or less than 1.
   * @returns {any[]} - The generated random elements.
   */
  public objectElements(object: {}, options: ObjectElementsOptions = {}): any[] {
    const elementsCount = options.elementsCount ?? 1;

    if (typeof elementsCount !== "number") {
      throw new Error("Option 'elementsCount' has to be a number.");
    }

    if (elementsCount < 1) {
      throw new Error("Option 'elementsCount' has to be greater than 1.");
    }

    let result = [];

    if (options.returnKey) {
      const objectKeys = Object.keys(object);
      result = this.arrayElements(objectKeys, { elementsCount });
    } else {
      const objectValues = Object.values(object);
      result = this.arrayElements(objectValues, { elementsCount });
    }

    return result;
  }

  /**
   * An array of only lowercase letters.
   *
   * @private
   * @readonly
   * @type {string[]}
   */
  private lowercaseLetters: string[];

  /**
   * An array of only uppercase letters.
   *
   * @private
   * @readonly
   * @type {string[]}
   */
  private uppercaseLetters: string[];
}
