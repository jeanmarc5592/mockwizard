import "reflect-metadata";
import { AbstractLocation } from "./AbstractLocation";
import { State } from "./types";

class LocationMock extends AbstractLocation {
  protected statesList: State[];

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
      const statesList = Reflect.get(locationMock, "statesList");
      const stateNames = statesList.map((state: State) => state.name);

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
});
