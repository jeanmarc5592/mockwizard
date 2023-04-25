import { RandomGenerator } from "./RandomGenerator";

const mockList = ["Foo", "Bar", "Hello", "World"];

describe("RandomGenerator", () => {
  describe("generateRandomValue", () => {
    it("should throw an Error if 'list' is falsy", () => { 
      // @ts-ignore
      expect(() => RandomGenerator.generateValue(null)).toThrowError("Parameter 'list' is missing.");
      // @ts-ignore
      expect(() => RandomGenerator.generateValue(undefined)).toThrowError("Parameter 'list' is missing.");
      // @ts-ignore
      expect(() => RandomGenerator.generateValue("")).toThrowError("Parameter 'list' is missing.");
      // @ts-ignore
      expect(() => RandomGenerator.generateValue(false)).toThrowError("Parameter 'list' is missing.");
    });

    it("should throw an Error if 'list' is not of type 'List'", () => {
      // @ts-ignore
      expect(() => RandomGenerator.generateValue({})).toThrowError("Parameter 'list' must be an Array.");
      // @ts-ignore
      expect(() => RandomGenerator.generateValue(123)).toThrowError("Parameter 'list' must be an Array.");
      // @ts-ignore
      expect(() => RandomGenerator.generateValue("not-a-list")).toThrowError("Parameter 'list' must be an Array.");
      // @ts-ignore
      expect(() => RandomGenerator.generateValue(true)).toThrowError("Parameter 'list' must be an Array.");
    });

    it("should return a random value from the given 'list'", () => {
      const randomValue = RandomGenerator.generateValue(mockList); 

      expect(typeof randomValue).toBe("string");
      expect(mockList).toContain(randomValue);
    });
  });

  describe("generateRandomBinary", () => {
    it("should return either 0 or 1 randomly", () => {
      const randomBinary = RandomGenerator.generateBinary(); 

      expect([0, 1]).toContain(randomBinary);
    });
  });
});