import { BaseModule } from "../Base";
import { PersonOptions } from "./types";

export abstract class AbstractPerson extends BaseModule {
  /**
   * Generates a random first name based on the given options.
   *
   * @public
   * @param {PersonOptions} [options={}] - The options to use when generating the name.
   * @param {string} [options.gender] - The gender of the name to generate. Can be "male" or "female". If not specified, it will be picked randomly.
   * @returns {string} The randomly generated first name.
   */
  public firstName(options: PersonOptions = {}): string {
    let list: string[];

    if (options.gender === this.GENDER_FEMALE) {
      list = this.femaleFirstNames;
    } else if (options.gender === this.GENDER_MALE) {
      list = this.maleFirstNames;
    } else {
      list = this.generateRandomBinary() === 0 ? this.maleFirstNames : this.femaleFirstNames;
    }

    return this.generateRandomValue(list) as string;
  }

  /**
   * Generates a random last name.
   *
   * @public
   * @returns {string} The randomly generated last name.
   */
  public lastName(): string {
    return this.generateRandomValue(this.lastNames) as string;
  }

  /**
   * Generates a random full name based on the given options.
   *
   * @public
   * @param {PersonOptions} [options={}] - The options to use when generating the first name.
   * @param {string} [options.gender] - The gender of the first name to generate. Can be "male" or "female". If not specified, it will be picked randomly.
   * @returns {string} The randomly generated full name.
   */
  public fullName(options: PersonOptions = {}): string {
    const firstName = this.firstName(options);
    const lastName = this.lastName();

    let fullName = `${firstName} ${lastName}`;

    if (options.includeSalutation) {
      const salutation = this.salutation(options);
      fullName = `${salutation} ${fullName}`;
    }

    if (options.includeSuffix) {
      const suffix = this.suffix();
      fullName = `${fullName} ${suffix}`;
    }

    return fullName;
  }

  /**
   * Generates a random suffix.
   *
   * @public
   * @returns {string} The randomly generated suffix.
   */
  public suffix(): string {
    return this.generateRandomValue(this.suffixes) as string;
  }

  /**
   * Generates a random salutation.
   *
   * @public
   * @returns {string} The randomly generated salutation.
   */
  public salutation(options: Pick<PersonOptions, "gender"> = {}): string {
    let list: string[];

    if (options.gender === this.GENDER_MALE) {
      list = this.maleSalutations;
    } else if (options.gender === this.GENDER_FEMALE) {
      list = this.femaleSalutations;
    } else {
      list = this.commonSalutations;
    }

    return this.generateRandomValue(list) as string;
  }

  /**
   * An array of male first names.
   * @protected
   * @abstract
   * @type {string[]}
   */
  protected abstract maleFirstNames: string[];

  /**
   * An array of female first names.
   * @protected
   * @abstract
   * @type {string[]}
   */
  protected abstract femaleFirstNames: string[];

  /**
   * An array of last names.
   * @protected
   * @abstract
   * @type {string[]}
   */
  protected abstract lastNames: string[];

  /**
   * An array of suffixes.
   * @protected
   * @abstract
   * @type {string[]}
   */
  protected abstract suffixes: string[];

  /**
   * An array of male salutations.
   * @protected
   * @abstract
   * @type {string[]}
   */
  protected abstract maleSalutations: string[];

  /**
   * An array of female salutations.
   * @protected
   * @abstract
   * @type {string[]}
   */
  protected abstract femaleSalutations: string[];

  /**
   * An array of common salutations.
   * @protected
   * @abstract
   * @type {string[]}
   */
  protected abstract commonSalutations: string[];

  /**
   * A constant string representing the male gender.
   * @protected
   * @type {string}
   * @constant
   */
  protected GENDER_MALE: string = "male";

  /**
   * A constant string representing the female gender.
   * @protected
   * @type {string}
   * @constant
   */
  protected GENDER_FEMALE: string = "female";
}
