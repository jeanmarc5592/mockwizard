import { RandomGenerator } from "../../utils";
import { LocationData } from "./data";
import { City, Country, CountryOptions, State, StateOptions } from "./types";

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
   * @param {CountryOptions} [options={}] - Options for generating the country.
   * @param {Continent} [options.continent] - If specified, it will only return a country name for that continent.
   * Valid continents: "Africa", "Asia", "Europe", "North America", "Oceania", "South America"
   * @returns {string} - The generated country name.
   */
  public country(options: CountryOptions = {}): string {
    const continent = options.continent || "";

    if (typeof continent !== "string") {
      throw new Error("Option 'continent' has to be a string.");
    }

    if (continent) {
      const countriesListByContinent = this.countriesList.filter((country) => country.continent === continent);
      const randomCountry = RandomGenerator.generateValueFromArray(countriesListByContinent) as Country;
      return randomCountry.name;
    }

    const randomCountry = RandomGenerator.generateValueFromArray(this.countriesList) as Country;
    return randomCountry.name;
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
