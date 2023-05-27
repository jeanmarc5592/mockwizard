import "reflect-metadata";
import { AbstractLocation } from "./AbstractLocation";
import { City, Continent, Country, State } from "./types";

class LocationMock extends AbstractLocation {
  protected statesList: State[];

  protected citiesList: City[];

  constructor() {
    super();
    this.statesList = [
      { name: "New York", abbreviation: "NY" },
      { name: "Tennessee", abbreviation: "TN" },
      { name: "Texas", abbreviation: "TX" },
      { name: "Utah", abbreviation: "UT" },
      { name: "Vermont", abbreviation: "VT" },
      { name: "Virginia", abbreviation: "VA" },
      { name: "Washington", abbreviation: "WA" },
    ];
    this.citiesList = [
      { name: "El Paso", state: "Texas", zipCode: "79901" },
      { name: "Memphis", state: "Tennessee", zipCode: "37501" },
      { name: "Seattle", state: "Washington", zipCode: "98101" },
      { name: "Denver", state: "Colorado", zipCode: "80201" },
      { name: "Washington, D.C.", state: "District of Columbia", zipCode: "20001" },
      { name: "Boston", state: "Massachusetts", zipCode: "02101" },
      { name: "Nashville", state: "Tennessee", zipCode: "37201" },
    ];
  }
}

describe("AbstractLocation", () => {
  let locationMock: AbstractLocation;

  beforeEach(() => {
    locationMock = new LocationMock();
  });

  describe("state", () => {
    it("should generate a random state name", () => {
      const state = locationMock.state();
      const statesList = Reflect.get(locationMock, "statesList") as State[];
      const stateNames = statesList.map((state) => state.name);

      expect(typeof state).toBe("string");
      expect(stateNames).toContain(state);
    });

    it("should generate a random abbreviated state name if 'abbreviated' option is specified", () => {
      const state = locationMock.state({ abbreviated: true });
      const statesList = Reflect.get(locationMock, "statesList");
      const stateAbbreviations = statesList.map((state: State) => state.abbreviation);

      expect(typeof state).toBe("string");
      expect(stateAbbreviations).toContain(state);
    });
  });

  describe("city", () => {
    it("should generate a random city name", () => {
      const city = locationMock.city();
      const citiesList = Reflect.get(locationMock, "citiesList") as City[];
      const cityNames = citiesList.map((city) => city.name);

      expect(typeof city).toBe("string");
      expect(cityNames).toContain(city);
    });
  });

  describe("country", () => {
    it("should generate a random country name", () => {
      const country = locationMock.country();
      const countriesList = Reflect.get(locationMock, "countriesList") as Country[];
      const countryNames = countriesList.map((country) => country.name);

      expect(typeof country).toBe("string");
      expect(countryNames).toContain(country);
    });
  });

  describe("countryCode", () => {
    it("should generate a random countryCode", () => {
      const countryCode = locationMock.countryCode();
      const countriesList = Reflect.get(locationMock, "countriesList") as Country[];
      const countryCodes = countriesList.map((country) => country.countryCode);

      expect(typeof countryCode).toBe("string");
      expect(countryCodes).toContain(countryCode);
    });
  });

  describe("latitude", () => {
    it("should generate a random latitude", () => {
      const latitude = locationMock.latitude();

      expect(typeof latitude).toBe("number");
      expect(Number.isInteger(latitude)).not.toBe(true);
      expect(latitude).toBeGreaterThanOrEqual(-90);
      expect(latitude).toBeLessThanOrEqual(90);
    });

    it("should generate a random latitude within the given bounds", () => {
      const min = 0;
      const max = 10;

      const latitude = locationMock.latitude({ min, max });

      expect(typeof latitude).toBe("number");
      expect(Number.isInteger(latitude)).not.toBe(true);
      expect(latitude).toBeGreaterThanOrEqual(min);
      expect(latitude).toBeLessThanOrEqual(max);
    });

    it("should throw an Error if 'min' or 'max' option are not a number", () => {
      const error = "Option 'min' and 'max' have to be a number.";

      // @ts-ignore
      expect(() => locationMock.latitude({ min: "-40" })).toThrowError(error);

      // @ts-ignore
      expect(() => locationMock.latitude({ max: "10" })).toThrowError(error);
    });

    it("should throw an Error if 'min' option is less than -90", () => {
      const error = "Option 'min' has to be greater than or equal to -90.";

      expect(() => locationMock.latitude({ min: -120 })).toThrowError(error);
    });

    it("should throw an Error if 'max' option is greater than 90", () => {
      const error = "Option 'max' has to be less than or equal to 90.";

      expect(() => locationMock.latitude({ max: 98 })).toThrowError(error);
    });
  });

  describe("longitude", () => {
    it("should generate a random longitude", () => {
      const longitude = locationMock.longitude();

      expect(typeof longitude).toBe("number");
      expect(Number.isInteger(longitude)).not.toBe(true);
      expect(longitude).toBeGreaterThanOrEqual(-180);
      expect(longitude).toBeLessThanOrEqual(180);
    });

    it("should generate a random longitude within the given bounds", () => {
      const min = -124;
      const max = 98.323;

      const longitude = locationMock.longitude({ min, max });

      expect(typeof longitude).toBe("number");
      expect(Number.isInteger(longitude)).not.toBe(true);
      expect(longitude).toBeGreaterThanOrEqual(min);
      expect(longitude).toBeLessThanOrEqual(max);
    });

    it("should throw an Error if 'min' or 'max' option are not a number", () => {
      const error = "Option 'min' and 'max' have to be a number.";

      // @ts-ignore
      expect(() => locationMock.longitude({ min: "-40" })).toThrowError(error);

      // @ts-ignore
      expect(() => locationMock.longitude({ max: "10" })).toThrowError(error);
    });

    it("should throw an Error if 'min' option is less than -180", () => {
      const error = "Option 'min' has to be greater than or equal to -180.";

      expect(() => locationMock.longitude({ min: -200 })).toThrowError(error);
    });

    it("should throw an Error if 'max' option is greater than 180", () => {
      const error = "Option 'max' has to be less than or equal to 180.";

      expect(() => locationMock.longitude({ max: 185.23 })).toThrowError(error);
    });
  });

  describe("coordinates", () => {
    it("should generate a random coordinates object", () => {
      const coordinates = locationMock.coordinates();

      expect(coordinates).toBeInstanceOf(Object);

      expect(coordinates).toHaveProperty("lat");
      expect(coordinates).toHaveProperty("lng");

      expect(typeof coordinates.lat).toBe("number");
      expect(typeof coordinates.lng).toBe("number");
    });
  });
});
