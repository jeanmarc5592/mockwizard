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
      const locale = "en-US";

      expect(Factory.create(locale)).toBeInstanceOf(AbstractPerson);
    });
  });

});
