import { RandomGenerator } from "./RandomGenerator";
import { List } from "./types";

const mockList: List = ["Foo", "Bar", "Hello", "World"];

describe("RandomGenerator", () => {
  describe("generateRandomValue", () => {
    it("should throw an Error if 'list' is falsy", () => { 
      const error = "Parameter 'list' is missing.";

      // @ts-ignore
      expect(() => RandomGenerator.generateValue(null)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValue(undefined)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValue("")).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValue(false)).toThrowError(error);
    });

    it("should throw an Error if 'list' is not of type 'List'", () => {
      const error = "Parameter 'list' must be an Array.";

      // @ts-ignore
      expect(() => RandomGenerator.generateValue({})).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValue(123)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValue("not-a-list")).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValue(true)).toThrowError(error);
    });

    it("should return a random value from the given 'list'", () => {
      const randomValue = RandomGenerator.generateValue(mockList); 

      expect(typeof randomValue).toBe("string");
      expect(mockList).toContain(randomValue);
    });
  });

  describe("generateMultipleValues", () => {
    it("should throw an Error if 'list' is falsy", () => { 
      const error = "Parameter 'list' is missing.";

      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValues(null)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValues(undefined)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValues("")).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValues(false)).toThrowError(error);
    });

    it("should throw an Error if 'list' is not of type 'List'", () => {
      const error = "Parameter 'list' must be an Array.";

      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValues({})).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValues(123)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValues("not-a-list")).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValues(true)).toThrowError(error);
    });

    it("should throw an Error if 'amount' option is larger than the list's length", () => {
      const error = "Option 'amount' can't be larger than parameter 'list'.";

      expect(() => RandomGenerator.generateMultipleValues(mockList, { amount: 10 })).toThrowError(error);
    });

    it("should throw an Error if 'amount' option is 0 or below 0", () => {
      const error = "Option 'amount' must be greater than 0.";

      expect(() => RandomGenerator.generateMultipleValues(mockList, { amount: 0 })).toThrowError(error);
      expect(() => RandomGenerator.generateMultipleValues(mockList, { amount: -2 })).toThrowError(error);
    });

    it("should return as many results as the 'amount' option is set to", () => {
      const amountOne = 3;
      const amountTwo = 2;
      const amountThree = 4;

      const resultsOne = RandomGenerator.generateMultipleValues(mockList, { amount: amountOne });
      const resultsTwo = RandomGenerator.generateMultipleValues(mockList, { amount: amountTwo });
      const resultsThree = RandomGenerator.generateMultipleValues(mockList, { amount: amountThree });

      expect(resultsOne).toHaveLength(amountOne);
      expect(resultsTwo).toHaveLength(amountTwo);
      expect(resultsThree).toHaveLength(amountThree);
      
      resultsOne.forEach(result => {
        expect(mockList).toContain(result);
      });
      resultsTwo.forEach(result => {
        expect(mockList).toContain(result);
      });
      resultsThree.forEach(result => {
        expect(mockList).toContain(result);
      });
    });
  });

  describe("generateRandomBinary", () => {
    it("should return either 0 or 1 randomly", () => {
      const randomBinary = RandomGenerator.generateBinary(); 

      expect(Number.isInteger(randomBinary)).toBe(true);
      expect([0, 1]).toContain(randomBinary);
    });
  });

  describe("generateNumberBetween", () => {
    it ("should throw an Error if parameter 'min' or 'max' is missing", () => {
      const error = "Parameter 'min' or 'max' is missing.";

      // @ts-ignore
      expect(() => RandomGenerator.generateNumberBetween()).toThrowError(error);
      
      // @ts-ignore
      expect(() => RandomGenerator.generateNumberBetween(3)).toThrowError(error);
    });

    it("should throw an Error if parameter 'min' or 'max' is not a number", () => {
      const error = "Parameter 'min' and 'max' has to be a number.";

      // @ts-ignore
      expect(() => RandomGenerator.generateNumberBetween("3", "6")).toThrowError(error);
      
      // @ts-ignore
      expect(() => RandomGenerator.generateNumberBetween({}, true)).toThrowError(error);
    });

    it("should throw an Error if parameter 'min' or 'max' are less than 0", () => {
      const error = "Parameter 'min' and 'max' has to be greater than 0.";

      expect(() => RandomGenerator.generateNumberBetween(-4, 3)).toThrowError(error);
      expect(() => RandomGenerator.generateNumberBetween(5, -9)).toThrowError(error);
      expect(() => RandomGenerator.generateNumberBetween(-5, -9)).toThrowError(error);
    });

    it("should throw an Error if parameter 'min' is greater than 'max'", () => {
      const error = "Parameter 'min' has to be smaller than 'max'.";

      expect(() => RandomGenerator.generateNumberBetween(6, 3)).toThrowError(error);
      expect(() => RandomGenerator.generateNumberBetween(6, 6)).toThrowError(error);
    });

    it("should return a random number between the specified parameters", () => {
      const min = 4;
      const max = 20;

      const result = RandomGenerator.generateNumberBetween(min, max);

      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });

  describe("generateHex", () => {
    it("should throw Error if 'length' parameter is missing", () => {
      const error = "Parameter 'length' is missing.";

      // @ts-ignore
      expect(() => RandomGenerator.generateHex()).toThrowError(error);
    });

    it("should throw Error if 'length' parameter is not a number", () => {
      const error = "Parameter 'length' has to be a number.";

      // @ts-ignore
      expect(() => RandomGenerator.generateHex("3")).toThrowError(error);

      // @ts-ignore
      expect(() => RandomGenerator.generateHex(true)).toThrowError(error);

      // @ts-ignore
      expect(() => RandomGenerator.generateHex({ length: 4 })).toThrowError(error);
    });

    it("should throw Error if 'length' parameter is less than 0", () => {
      const error = "Parameter 'length' has to be greater than 0.";

      expect(() => RandomGenerator.generateHex(-4)).toThrowError(error);
    });

    it("should return a random hex string", () => {
      const hex = RandomGenerator.generateHex(2);
      const regex = /^[0-9A-Fa-f]+$/;

      expect(typeof hex).toBe("string");
      expect(regex.test(hex)).toBe(true);
    });

    it("should return a random hex string with the specified length", () => {
      const hexOne = RandomGenerator.generateHex(1);
      const hexTwo = RandomGenerator.generateHex(12);
      const hexThree = RandomGenerator.generateHex(450);

      expect(hexOne.length).toBe(1);
      expect(hexTwo.length).toBe(12);
      expect(hexThree.length).toBe(450);
    });
  });
});