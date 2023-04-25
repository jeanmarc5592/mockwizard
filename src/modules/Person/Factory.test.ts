import { Factory } from "./Factory";
import { AbstractPerson } from "./AbstractPerson";

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
      expect(() => Factory.create(locale)).toThrowError(`Person with locale '${locale}' is not implemented.`)
    });

    it("should return AbstractPerson when 'locale' is valid", () => {
      const localeOne = "en-US";
      const localeTwo = "de-DE";

      expect(Factory.create(localeOne)).toBeInstanceOf(AbstractPerson);
      expect(Factory.create(localeTwo)).toBeInstanceOf(AbstractPerson);
    });
  });

});
