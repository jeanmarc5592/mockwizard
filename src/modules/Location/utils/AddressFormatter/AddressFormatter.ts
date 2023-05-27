import { Locale } from "../../../../types";
import { FullAddress } from "./types";

export class AddressFormatter {
  /**
   * Formats an address based on the specified locale.
   *
   * @static
   * @param {Locale} locale - The locale to determine the address format.
   * @param {FullAddress} address - The full address object to be formatted.
   * @returns {string} - The formatted address as a string.
   */
  static format(locale: Locale, address: FullAddress): string {
    if (!locale) {
      throw new Error("Parameter 'locale' is missing.");
    }

    if (!address) {
      throw new Error("Parameter 'address' is missing.");
    }

    switch (locale) {
      case "en-US":
        return this.formatForUS(address);
      default:
        console.log("Used the default address formatter...");
        return this.formatForUS(address);
    }
  }

  /**
   * Formats a full address in the United States.
   *
   * @static
   * @param {FullAddress} address - The full address object to be formatted.
   * @returns {string} - The formatted address as a string.
   */
  static formatForUS(address: FullAddress): string {
    if (!address) {
      throw new Error("Parameter 'address' is missing.");
    }

    const { streetName, streetNumber, zipCode, city, state } = address;

    return `${streetNumber} ${streetName}, ${city}, ${state} ${zipCode}`;
  }
}
