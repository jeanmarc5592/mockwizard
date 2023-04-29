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

      expect([0, 1]).toContain(randomBinary);
    });
  });
});