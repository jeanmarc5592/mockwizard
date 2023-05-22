import { RandomGenerator } from "./RandomGenerator";
import { List } from "./types";

const mockList: List = ["Foo", "Bar", "Hello", "World"];

describe("RandomGenerator", () => {
  describe("generateValueFromArray", () => {
    it("should throw an Error if 'list' is falsy", () => { 
      const error = "Parameter 'list' is missing.";

      // @ts-ignore
      expect(() => RandomGenerator.generateValueFromArray(null)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValueFromArray(undefined)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValueFromArray("")).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValueFromArray(false)).toThrowError(error);
    });

    it("should throw an Error if 'list' is not of type 'Array'", () => {
      const error = "Parameter 'list' must be an Array.";

      // @ts-ignore
      expect(() => RandomGenerator.generateValueFromArray({})).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValueFromArray(123)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValueFromArray("not-a-list")).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateValueFromArray(true)).toThrowError(error);
    });

    it("should return a random value from the given 'list'", () => {
      const randomValue = RandomGenerator.generateValueFromArray(mockList); 

      expect(typeof randomValue).toBe("string");
      expect(mockList).toContain(randomValue);
    });
  });

  describe("generateMultipleValuesFromArray", () => {
    it("should throw an Error if 'list' is falsy", () => { 
      const error = "Parameter 'list' is missing.";

      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValuesFromArray(null)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValuesFromArray(undefined)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValuesFromArray("")).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValuesFromArray(false)).toThrowError(error);
    });

    it("should throw an Error if 'list' is not of type 'List'", () => {
      const error = "Parameter 'list' must be an Array.";

      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValuesFromArray({})).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValuesFromArray(123)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValuesFromArray("not-a-list")).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateMultipleValuesFromArray(true)).toThrowError(error);
    });

    it("should throw an Error if 'amount' option is larger than the list's length", () => {
      const error = "Option 'amount' can't be larger than parameter 'list'.";

      expect(() => RandomGenerator.generateMultipleValuesFromArray(mockList, { amount: 10 })).toThrowError(error);
    });

    it("should throw an Error if 'amount' option is 0 or below 0", () => {
      const error = "Option 'amount' must be greater than 0.";

      expect(() => RandomGenerator.generateMultipleValuesFromArray(mockList, { amount: 0 })).toThrowError(error);
      expect(() => RandomGenerator.generateMultipleValuesFromArray(mockList, { amount: -2 })).toThrowError(error);
    });

    it("should return as many results as the 'amount' option is set to", () => {
      const amountOne = 3;
      const amountTwo = 2;
      const amountThree = 4;

      const resultsOne = RandomGenerator.generateMultipleValuesFromArray(mockList, { amount: amountOne });
      const resultsTwo = RandomGenerator.generateMultipleValuesFromArray(mockList, { amount: amountTwo });
      const resultsThree = RandomGenerator.generateMultipleValuesFromArray(mockList, { amount: amountThree });

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

  describe("generateElementFromObject", () => {
    it("should throw an Error if 'object' is falsy", () => {
      const error = "Parameter 'object' is missing.";

      // @ts-ignore
      expect(() => RandomGenerator.generateElementFromObject(null)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateElementFromObject(undefined)).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateElementFromObject("")).toThrowError(error);
      // @ts-ignore
      expect(() => RandomGenerator.generateElementFromObject(false)).toThrowError(error);
    });

    it("should return an object with one random key value pair", () => {
      const mockObject = { foo: "bar", hello: "world" };
      const result = RandomGenerator.generateElementFromObject(mockObject);

      expect(mockObject).toBeInstanceOf(Object);
      expect(Object.entries(result)).toHaveLength(1);
      expect(Object.keys(mockObject)).toContain(Object.keys(result)[0]);
      expect(Object.values(mockObject)).toContain(Object.values(result)[0]);
    });

    it("should return an empty object if parameter 'object' is empty", () => {
      const mockObject = {};
      const result = RandomGenerator.generateElementFromObject(mockObject);

      expect(mockObject).toBeInstanceOf(Object);
      expect(Object.entries(result)).toHaveLength(0);
      expect(result).toEqual(mockObject);
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

    it("should return a random number as integer between the specified parameters", () => {
      const min = 4;
      const max = 20;

      const result = RandomGenerator.generateNumberBetween(min, max);

      expect(typeof result).toBe("number");
      expect(Number.isInteger(result)).toBe(true);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });

  describe("generateFloatBetween", () => {
    it ("should throw an Error if parameter 'min' or 'max' is missing", () => {
      const error = "Parameter 'min' or 'max' is missing.";

      // @ts-ignore
      expect(() => RandomGenerator.generateFloatBetween()).toThrowError(error);
      
      // @ts-ignore
      expect(() => RandomGenerator.generateFloatBetween(3)).toThrowError(error);
    });

    it("should throw an Error if parameter 'min' or 'max' is not a number", () => {
      const error = "Parameter 'min' and 'max' has to be a number.";

      // @ts-ignore
      expect(() => RandomGenerator.generateFloatBetween("3", "6")).toThrowError(error);
      
      // @ts-ignore
      expect(() => RandomGenerator.generateFloatBetween({}, true)).toThrowError(error);
    });

    it("should throw an Error if parameter 'min' or 'max' are less than 0", () => {
      const error = "Parameter 'min' and 'max' has to be greater than 0.";

      expect(() => RandomGenerator.generateFloatBetween(-4, 3)).toThrowError(error);
      expect(() => RandomGenerator.generateFloatBetween(5, -9)).toThrowError(error);
      expect(() => RandomGenerator.generateFloatBetween(-5, -9)).toThrowError(error);
    });

    it("should throw an Error if parameter 'min' is greater than 'max'", () => {
      const error = "Parameter 'min' has to be smaller than 'max'.";

      expect(() => RandomGenerator.generateFloatBetween(6, 3)).toThrowError(error);
      expect(() => RandomGenerator.generateFloatBetween(6, 6)).toThrowError(error);
    });

    it("should throw an Error if option 'decimalsCount' is not a number", () => {
      const error = "Option 'decimalsCount' has to be a number.";

      // @ts-ignore
      expect(() => RandomGenerator.generateFloatBetween(1, 10, { decimalsCount: "3" })).toThrowError(error);

      // @ts-ignore
      expect(() => RandomGenerator.generateFloatBetween(1, 10, { decimalsCount: [3] })).toThrowError(error);

      // @ts-ignore
      expect(() => RandomGenerator.generateFloatBetween(1, 10, { decimalsCount: { count: 34 } })).toThrowError(error);
    });

    it("should throw an Error if option 'decimalsCount' is less than 1 or greater than 5", () => {
      const error = "Option 'decimalsCount' has to be greater than or equal to 1 and less than or equal to 5.";

      expect(() => RandomGenerator.generateFloatBetween(3, 6, { decimalsCount: -3 })).toThrowError(error);
      expect(() => RandomGenerator.generateFloatBetween(3, 6, { decimalsCount: 10 })).toThrowError(error);
    });

    it("should return a random float between the specified parameters", () => {
      const min = 4;
      const max = 20;

      const result = RandomGenerator.generateFloatBetween(min, max, { decimalsCount: 2 });

      expect(typeof result).toBe("number");
      expect(Number.isInteger(result)).not.toBe(true);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it("should generate a random float with 2 decimals if the 'decimalsCount' option is not specified", () => {
      const result = RandomGenerator.generateFloatBetween(1, 100);
      const decimals = result.toString().split(".")[1].length;
      
      // If last decimal is 0 it will be omitted (one decimal digit less)
      expect(decimals === 2 || decimals === 1).toBe(true);
    });

    it("should generate a random float with as many decimals as specified in the 'decimalsCount' option", () => {
      const length = 5;

      const result = RandomGenerator.generateFloatBetween(1, 100, { decimalsCount: length });
      const decimals = result.toString().split(".")[1].length;

      // If last decimal is 0 it will be omitted (one decimal digit less)
      expect(decimals === length || decimals === length - 1).toBe(true);
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
      const regex = /^[0-9a-f]+$/;

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