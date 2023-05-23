import { AbstractLocation } from "./AbstractLocation";
import { Location as LocationEnUs } from "./locales/en-US/Location";
import { Locale } from "../../types";

export class Factory {
  /**
   * Creates an instance of AbstractLocation based on a given locale.
   *
   * @static
   * @param {Locale} locale - The locale for which to create a location instance. Defaults to "en-US"
   * @returns {AbstractPerson} An instance of the AbstractLocation class.
   * @throws {Error} If the locale parameter is missing or not implemented.
   */
  static create(locale: Locale): AbstractLocation {
    if (!locale) {
      throw new Error("Parameter 'locale' is missing.");
    }

    switch (locale) {
      case "en-US":
        return new LocationEnUs();
      default:
        throw new Error(`Person with locale '${locale}' is not implemented.`);
    }
  }
}