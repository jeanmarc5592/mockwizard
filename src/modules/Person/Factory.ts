import { AbstractPerson } from "./AbstractPerson";
import { Person as PersonEnUs } from "./locales/en-US/Person";
import { Person as PersonDeDe } from "./locales/de-DE/Person";
import { Locale } from "./types";

export class Factory {
  /**
   * Creates an instance of AbstractPerson based on a given locale.
   *
   * @static
   * @param {Locale} locale - The locale for which to create a person instance. Defaults to "en-US"
   * @returns {AbstractPerson} An instance of the AbstractPerson class.
   * @throws {Error} If the locale parameter is missing or not implemented.
   */
  static create(locale: Locale): AbstractPerson {
    if (!locale) {
      throw new Error("Parameter 'locale' is missing.");
    }

    switch (locale) {
      case "en-US":
        return new PersonEnUs();
      case "de-DE":
        return new PersonDeDe();
      default:
        throw new Error(`Person with locale '${locale}' is not implemented.`);
    }
  }
}
