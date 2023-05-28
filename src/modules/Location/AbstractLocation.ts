import { Locale } from "../../types";
import { RandomGenerator } from "../../utils";
import { LocationData } from "./data";
import { City, Coordinates, CoordinatesOptions, Country, State, StateOptions } from "./types";
import { AddressFormatter } from "./utils/AddressFormatter/AddressFormatter";

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
    const randomCity = RandomGenerator.generateValueFromArray(this.citiesList) as City;

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

    return RandomGenerator.generateFloatBetween(min, max, { decimalsCount: 4 }) as number;
  }

  /**
   * Generates a random longitude.
   *
   * @public
   * @param {CoordinatesOptions} [options={}] - Options for generating the longitude.
   * @param {number} [options.min] - Specifies the lower border of the longitude. If not specified, it defaults to -180.
   * @param {number} [options.max] - Specifies the upper border of the longitude. If not specified, it defaults to 180.
   * @throws {Error} - If 'min' and 'max' are not a number.
   * @throws {Error} - If 'min' is less than -180 or 'max' is greater than 180.
   * @returns {number} - The generated longitude as float with 4 decimals.
   */
  public longitude(options: CoordinatesOptions = {}): number {
    const min = options.min === undefined ? -180 : options.min;
    const max = options.max === undefined ? 180 : options.max;

    if (typeof min !== "number" || typeof max !== "number") {
      throw new Error("Option 'min' and 'max' have to be a number.");
    }

    if (min < -180) {
      throw new Error("Option 'min' has to be greater than or equal to -180.");
    }

    if (max > 180) {
      throw new Error("Option 'max' has to be less than or equal to 180.");
    }

    return RandomGenerator.generateFloatBetween(min, max, { decimalsCount: 4 }) as number;
  }

  /**
   * Generates a random coordinates object that contains a random lat and long property.
   *
   * @public
   * @returns {Coordinates} - The generated coordinates object.
   */
  public coordinates(): Coordinates {
    return {
      lat: this.latitude(),
      lng: this.longitude(),
    };
  }

  /**
   * Generates a random zip code.
   *
   * @public
   * @returns {string} - The generated zip code.
   */
  public zipCode(): string {
    const randomCity = RandomGenerator.generateValueFromArray(this.citiesList) as City;

    return randomCity.zipCode;
  }

  /**
   * Generates a random street name.
   *
   * @public
   * @returns {string} - The generated street name.
   */
  public streetName(): string {
    return RandomGenerator.generateValueFromArray(this.streetNamesList) as string;
  }

  /**
   * Generates a full address that is formatted based on the given locale (i.e. "en-US").
   *
   * @public
   * @returns {string} - The generated full address.
   */
  public fullAddress(): string {
    const randomCity = RandomGenerator.generateValueFromArray(this.citiesList) as City;

    const address = {
      streetName: this.streetName(),
      streetNumber: RandomGenerator.generateNumberBetween(1, 500),
      zipCode: randomCity.zipCode,
      city: randomCity.name,
      state: randomCity.state,
    };

    return AddressFormatter.format(this.LOCALE, address);
  }

  /**
   * An array of states.
   *
   * @protected
   * @abstract
   * @readonly
   * @type {State[]}
   */
  protected abstract readonly statesList: State[];

  /**
   * An array of cities.
   *
   * @protected
   * @abstract
   * @readonly
   * @type {City[]}
   */
  protected abstract readonly citiesList: City[];

  /**
   * An array of street names.
   *
   * @protected
   * @abstract
   * @readonly
   * @type {string[]}
   */
  protected abstract readonly streetNamesList: string[];

  /**
   * A string representing the current locale.
   *
   * @protected
   * @abstract
   * @readonly
   * @type {Locale}
   */
  protected abstract LOCALE: Locale;

  /**
   * An array of countries.
   *
   * @private
   * @readonly
   * @type {Country[]}
   */
  private readonly countriesList: Country[];
}
