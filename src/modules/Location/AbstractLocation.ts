import { RandomGenerator } from "../../utils";
import { City, State, StateOptions } from "./types";

export abstract class AbstractLocation {
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
}
