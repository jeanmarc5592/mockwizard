import { RandomGenerator } from "../../utils";
import { LocationData } from "./data";
import { City, CoordinatesOptions, Country, State, StateOptions } from "./types";

export abstract class AbstractLocation {
  constructor() {
    this.countriesList = LocationData.countriesList;
  }

  /**
   * Generates a random state name or abbreviation.
   *
   * @public
   * @param {StateOptions} [options={}] - Options for generating the state.
   * @param {boolean} [options.abbreviated] - If true, it returns the official abbreviation of the state.
   * @returns {string} - The generated state name or abbreviation.
   */
  public state(options: StateOptions = {}): string {
    const randomState = RandomGenerator.generateValueFromArray(this.statesList) as State;

    if (options.abbreviated) {
      return randomState.abbreviation;
    }

    return randomState.name;
  }

  /**
   * Generates a random city name.
   *
   * @public
   * @returns {string} - The generated city name.
   */
  public city(): string {
    const randomCity = RandomGenerator.generateValueFromArray(this.citiesList);

    return randomCity.name;
  }

  /**
   * Generates a random country name.
   *
   * @public
   * @returns {string} - The generated country name.
   */
  public country(): string {
    const randomCountry = RandomGenerator.generateValueFromArray(this.countriesList) as Country;

    return randomCountry.name;
  }

  /**
   * Generates a random ISO 3166-1 countryCode.
   *
   * @public
   * @returns {string} - The generated countryCode.
   */
  public countryCode(): string {
    const randomCountry = RandomGenerator.generateValueFromArray(this.countriesList) as Country;

    return randomCountry.countryCode;
  }

  /**
   * Generates a random latitude.
   *
   * @public
   * @param {CoordinatesOptions} [options={}] - Options for generating the latitude.
   * @param {number} [options.min] - Specifies the lower border of the latitude. If not specified, it defaults to -90.
   * @param {number} [options.max] - Specifies the upper border of the latitude. If not specified, it defaults to 90.
   * @throws {Error} - If 'min' and 'max' are not a number.
   * @throws {Error} - If 'min' is less than -90 or 'max' is greater than 90.
   * @returns {number} - The generated latitude as float with 4 decimals.
   */
  public latitude(options: CoordinatesOptions = {}): number {
    const min = options.min === undefined ? -90 : options.min;
    const max = options.max === undefined ? 90 : options.max;

    if (typeof min !== "number" || typeof max !== "number") {
      throw new Error("Option 'min' and 'max' have to be a number.");
    }

    if (min < -90) {
      throw new Error("Option 'min' has to be greater than or equal to -90.");
    }

    if (max > 90) {
      throw new Error("Option 'max' has to be less than or equal to 90.");
    }

    return RandomGenerator.generateFloatBetween(min, max, { decimalsCount: 4 });
  }

  /**
   * An array of states.
   * @protected
   * @abstract
   * @readonly
   * @type {string[]}
   */
  protected abstract readonly statesList: State[];

  /**
   * An array of cities.
   * @protected
   * @abstract
   * @readonly
   * @type {string[]}
   */
  protected abstract readonly citiesList: City[];

  /**
   * An array of countries.
   * @protected
   * @abstract
   * @readonly
   * @type {string[]}
   */
  protected readonly countriesList: Country[];
}
