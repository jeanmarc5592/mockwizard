import { RandomGenerator, GenericData } from "../../utils";
import { WordsOptions, SentenceOptions, SentencesOptions, ParagraphOptions } from "./types";

export class Text {
  constructor() {
    this.data = GenericData.words;
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
   * @param {WordsOptions} [options={}] - An optional object containing additional options.
   * @param {number} [options.words] - The number of random words to generate. If not specified, it defaults to 3.
   * @param {boolean} [options.asString] - If true, the generated words will be returned as a single string.
   * @returns {(string|string[])} An array of random words, or a single string if 'asString' option is true.
   */
  public words(options: WordsOptions = {}): string | string[] {
    const wordsCount = options.words ?? 3;

    if (typeof wordsCount !== "number") {
      throw new Error("Option 'words' must be a number.");
    }

    if (wordsCount <= 0) {
      throw new Error("Option 'words' must be greater than 0.");
    }

    const words = RandomGenerator.generateMultipleValues(this.data, { amount: wordsCount }) as string[];

    if (options.asString) {
      return words.join(" ");
    }

    return words;
  }

  /**
   * Generates a random sentence based on the specified options.
   *
   * @public
   * @param {SentenceOptions} [options={}] - The options to customize the generated sentence.
   * @param {number} [options.words] - The number of words to include in the sentence. If not specified, it defaults between 3 and 15.
   * @param {boolean} [options.asString] - If true, the generated sentence will be returned as a single string.
   * @returns {string|string[]} - The generated sentence as an array of strings, or a single string if 'asString' option is true.
   */
  public sentence(options: SentenceOptions = {}): string | string[] {
    const wordsCount = options.words ?? RandomGenerator.generateNumberBetween(3, 15);

    let sentence = RandomGenerator.generateMultipleValues(this.data, { amount: wordsCount }) as string[];
    sentence = sentence.map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }

      if (index === sentence.length - 1) {
        return `${word}.`;
      }

      return word;
    });

    if (options.asString) {
      return sentence.join(" ");
    }

    return sentence;
  }

  /**
   * Generates a specified number of random sentences based on the specified options.
   *
   * @public
   * @param {SentencesOptions} [options={}] - The options to customize the generated sentences.
   * @param {number} [options.sentences] - The number of sentences to include in the output. If not specied, it defaults to 3.
   * @param {number} [options.words] - The number of words to include in each sentence. If not specified, it defaults between 3 and 15.
   * @param {boolean} [options.asString] - Whether to return the sentences as a string or an array of strings.
   * @returns {string|string[]} - The generated sentences, either as a string or an array of strings.
   * @throws {Error} - If the option 'sentences' is not a number or is less than or equal to 0.
   */
  public sentences(options: SentencesOptions = {}): string | string[] {
    const sentencesCount = options.sentences ?? 3;

    if (typeof sentencesCount !== "number") {
      throw new Error("Option 'sentences' must be a number.");
    }

    if (sentencesCount <= 0) {
      throw new Error("Option 'sentences' must be greater than 0.");
    }

    const sentences: string[] = [];

    let counter = 0;
    while (counter < sentencesCount) {
      const sentence = this.sentence({ asString: true, words: options.words }) as string;
      sentences.push(sentence);
      counter += 1;
    }

    if (options.asString) {
      return sentences.join(" ");
    }

    return sentences;
  }

  /**
   * Generates a specified number of random paragraphs based on the specified options.
   *
   * @public
   * @param {ParagraphOptions} [options={}] - The options to customize the generated paragraphs.
   * @param {number} [options.paragraphs] - The number of paragraphs to include in the output. If not specied, it defaults to 3.
   * @param {number} [options.sentences] - The number of sentences to include in the output. If not specified, it defaults between 3 and 8.
   * @param {number} [options.words] - The number of words to include in each sentence. If not specified, it defaults between 3 and 15.
   * @param {boolean} [options.asString] - Whether to return the paragraph as a string or an array of strings.
   * @returns {string|string[]} - The generated paragraphs, either as a string or an array of strings.
   * @throws {Error} - If the option 'paragraphs' is not a number or is less than or equal to 0.
   */
  public paragraphs(options: ParagraphOptions = {}): string | string[] {
    const sentencesCount = options.sentences ?? RandomGenerator.generateNumberBetween(3, 8);
    const paragraphsCount = options.paragraphs ?? 3;

    if (typeof paragraphsCount !== "number") {
      throw new Error("Option 'paragraphs' must be a number.");
    }

    if (paragraphsCount <= 0) {
      throw new Error("Option 'paragraphs' must be greater than 0.");
    }

    const paragraphs: string[] = [];

    let counter = 0;
    while (counter < paragraphsCount) {
      const paragraph = this.sentences({ asString: true, words: options.words, sentences: sentencesCount }) as string;
      paragraphs.push(paragraph);
      counter += 1;
    }

    if (options.asString) {
      return paragraphs.join("\n \n");
    }

    return paragraphs;
  }

  /**
   * An array of random blindtext words.
   *
   * @private
   * @readonly
   * @type {string[]}
   */
  private readonly data: string[];
}
