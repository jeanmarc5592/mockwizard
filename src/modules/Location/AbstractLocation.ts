import { RandomGenerator } from "../../utils";
import { LocationData } from "./data";
import { City, Country, State, StateOptions } from "./types";

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
   * Generates a random countryCode.
   *
   * @public
   * @returns {string} - The generated countryCode.
   */
  public countryCode(): string {
    const randomCountry = RandomGenerator.generateValueFromArray(this.countriesList) as Country;

    return randomCountry.countryCode;
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
