import { RandomGenerator } from "../../utils";
import { State, StateOptions } from "./types";

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
   * An array of states.
   * @protected
   * @abstract
   * @readonly
   * @type {string[]}
   */
  protected abstract readonly statesList: State[];
}
