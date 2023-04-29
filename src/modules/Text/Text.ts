import { TextData } from "./data";
import { RandomGenerator } from "../../utils";
import { TextOptions } from "./types";

export class Text {
  private readonly data: string[];

  constructor() {
    this.data = TextData.words;
  }

  /**
   * Generates a random word.
   *
   * @public
   * @returns {string} A random word from the data provided.
   */
  public word(): string {
    return RandomGenerator.generateValue(this.data) as string;
  }

  /**
   * Generates an array of random words.
   *
   * @public
   * @param {TextOptions} [options={}] - An optional object containing additional options.
   * @param {number} [options.amount] - The number of random words to generate. If not specified, it defaults to 3.
   * @param {boolean} [options.asString] - If true, the generated words will be returned as a single string.
   * @returns {(string|string[])} An array of random words, or a single string if 'asString' option is true.
   */
  public words(options: TextOptions = {}): string | string[] {
    const amount = options.amount ?? 3;
    const words = RandomGenerator.generateMultipleValues(this.data, { amount }) as string[];

    if (options.asString) {
      return words.join(" ");
    }

    return words;
  }
}
