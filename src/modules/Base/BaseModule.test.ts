import { BaseModule } from "./BaseModule";

class Module extends BaseModule {}

const mockList = ["Foo", "Bar", "Hello", "World"];

describe("BaseModule", () => {
  let mockModule: Module;

  beforeEach(() => {
    mockModule = new Module();
  });

  describe("generateRandomValue", () => {
    it("should throw an Error if 'list' is falsy", () => {
      const generateRandomValue = Reflect.get(mockModule, "generateRandomValue");

      expect(() => generateRandomValue(null)).toThrowError("Parameter 'list' is missing.");
    });

    it("should return a random value from the given 'list'", () => {
      const generateRandomValue = Reflect.get(mockModule, "generateRandomValue");
      const randomValue = generateRandomValue(mockList);

      expect(typeof randomValue).toBe("string");
      expect(mockList).toContain(randomValue);
    });
  });

  describe("generateRandomBinary", () => {
    it("should return either 0 or 1 randomly", () => {
      const generateRandomBinary = Reflect.get(mockModule, "generateRandomBinary");

      expect([0, 1]).toContain(generateRandomBinary());
    });
  });
});