import { AddressFormatter } from "./AddressFormatter";
import { FullAddress } from "./types";

const mockFullAddress: FullAddress = {
  streetName: "Street",
  streetNumber: 100,
  zipCode: "12345",
  city: "City",
  state: "State",
};

describe("AddressFormatter", () => {
  describe("format", () => {
    it("should throw an Error if 'locale' parameter is missing", () => {
      const error = "Parameter 'locale' is missing.";

      // @ts-ignore
      expect(() => AddressFormatter.format(undefined, mockFullAddress)).toThrowError(error);
    });

    it("should throw an Error if 'address' parameter is missing", () => {
      const error = "Parameter 'address' is missing.";

      // @ts-ignore
      expect(() => AddressFormatter.format("en-US", undefined)).toThrowError(error);
    });

    it("should return a formatted address based on the given locale", () => {
      const formatForUSSpy = jest.spyOn(AddressFormatter, 'formatForUS');
      const formatForDESpy = jest.spyOn(AddressFormatter, "formatForDE");
      
      AddressFormatter.format("en-US", mockFullAddress);
      AddressFormatter.format("de-DE", mockFullAddress);

      expect(formatForUSSpy).toHaveBeenCalledWith(mockFullAddress);
      expect(formatForUSSpy).toBeCalledTimes(1);

      expect(formatForDESpy).toHaveBeenCalledWith(mockFullAddress);
      expect(formatForDESpy).toBeCalledTimes(1);

      jest.restoreAllMocks();
    });

    it("should call 'formatForUS' by default when the given 'locale' is unknown", () => {
      const formatForUSSpy = jest.spyOn(AddressFormatter, 'formatForUS');
      
      // @ts-ignore
      AddressFormatter.format("xx-YY", mockFullAddress);

      expect(formatForUSSpy).toHaveBeenCalledWith(mockFullAddress);
      expect(formatForUSSpy).toBeCalledTimes(1);

      jest.restoreAllMocks();
    });
  });

  describe("formatForUS", () => {
    it("should return a formatted address for the USA", () => {
      const formattedAddress = AddressFormatter.formatForUS(mockFullAddress);
      const splittedFormattedAddress = formattedAddress.replace(/,/g, "").split(" ");

      const [streetNumber, streetName, city, state, zipCode] = splittedFormattedAddress;

      expect(typeof formattedAddress).toBe("string");

      expect(streetNumber).toBe(mockFullAddress.streetNumber.toString());
      expect(streetName).toBe(mockFullAddress.streetName);
      expect(city).toBe(mockFullAddress.city);
      expect(state).toBe(mockFullAddress.state);
      expect(zipCode).toBe(mockFullAddress.zipCode);
    });
  });

  describe("formatForDE", () => {
    it("should return a formatted address for Germany", () => {
      const formattedAddress = AddressFormatter.formatForDE(mockFullAddress);
      const splittedFormattedAddress = formattedAddress.replace(/,/g, "").split(" ");

      const [streetName, streetNumber, zipCode, city, state] = splittedFormattedAddress;

      expect(typeof formattedAddress).toBe("string");

      expect(streetName).toBe(mockFullAddress.streetName);
      expect(streetNumber).toBe(mockFullAddress.streetNumber.toString());
      expect(zipCode).toBe(mockFullAddress.zipCode);
      expect(city).toBe(mockFullAddress.city);
      expect(state).toBe(mockFullAddress.state);
    });
  });
});