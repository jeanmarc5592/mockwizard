import { Factory } from "./Factory";
import { AbstractLocation } from "./AbstractLocation";

describe("Factory", () => {
  describe("create", () => {
    it("should throw Error when 'locale' is falsy", () => {
      const locale = null;
      
      // @ts-ignore
      expect(() => Factory.create(locale)).toThrowError("Parameter 'locale' is missing.");
    });

    it("should throw Error when 'locale' is not valid", () => {
      const locale = "xy-XY";

      //@ts-ignore
      expect(() => Factory.create(locale)).toThrowError(`Location with locale '${locale}' is not implemented.`)
    });

    it("should return AbstractLocation when 'locale' is valid", () => {
      const localeOne = "en-US";
      const localeTwo = "de-DE";

      expect(Factory.create(localeOne)).toBeInstanceOf(AbstractLocation);
      expect(Factory.create(localeTwo)).toBeInstanceOf(AbstractLocation);
    });
  });
});
