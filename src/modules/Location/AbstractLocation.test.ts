import "reflect-metadata";
import { AbstractLocation } from "./AbstractLocation";
import { City, State } from "./types";

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
      { name: "Overland Park", state: "Kansas" },
      { name: "Providence", state: "Rhode Island" },
      { name: "Garden Grove", state: "California" },
      { name: "Chattanooga", state: "Tennessee" },
      { name: "Oceanside", state: "California" },
      { name: "Jackson", state: "Mississippi" },
      { name: "Fort Lauderdale", state: "Florida" },
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
      const cityNames = citiesList.map(city => city.name);

      expect(typeof city).toBe("string");
      expect(cityNames).toContain(city);
    });
  });
});
