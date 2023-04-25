import { v4 as uuidv4 } from "uuid";

export class UUID {
  /**
   * Generates a random UUID using the v4 algorithm.
   *
   * @returns {string} A string representing a random UUID.
   */
  public generate(): string {
    return uuidv4();
  }
}
