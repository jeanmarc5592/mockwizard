import { ArrayHelpers } from "./ArrayHelpers";

describe("ArrayHelpers", () => {
  describe("shuffle", () => {
    it("should throw an Error if parameter 'array' is not an Array", () => {
      const error = "Parameter 'array' has to be an Array.";

      // @ts-ignore
      expect(() => ArrayHelpers.shuffle(null)).toThrowError(error);

      // @ts-ignore
      expect(() => ArrayHelpers.shuffle(72342)).toThrowError(error);

      // @ts-ignore
      expect(() => ArrayHelpers.shuffle("not-an-array")).toThrowError(error);
    });

    it("should shuffle an array in a random order", () => {
      const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      const shuffledArray = ArrayHelpers.shuffle(originalArray);

      // Verify that the shuffled array contains the same elements as the original array
      expect(shuffledArray.sort()).toEqual(originalArray.sort());

      // Verify that the shuffled array is not in the same order as the original array
      expect(shuffledArray).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

      expect(shuffledArray).toBeInstanceOf(Array);
      expect(shuffledArray).toHaveLength(originalArray.length);
    });
  });

  describe("removeNonUniqueValues", () => {
    it("should remove all non unique values from a given array", () => {
      const result = ArrayHelpers.removeNonUniqueValues([1, 1, 2, 3, 3, 3, 4]);
      const uniqueValuesArray = [1, 2, 3, 4];

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(4);
      expect(result).toEqual(uniqueValuesArray);
    });

    it("should throw an Error if the given array is not an Array", () => {
      const error = "Parameter 'array' has to be an Array.";

      // @ts-ignore
      expect(() => ArrayHelpers.removeNonUniqueValues(null)).toThrowError(error);

      // @ts-ignore
      expect(() => ArrayHelpers.removeNonUniqueValues(72342)).toThrowError(error);

      // @ts-ignore
      expect(() => ArrayHelpers.removeNonUniqueValues("not-an-array")).toThrowError(error);
    });

    it("should return an empty array if the given array is empty", () => {
      const result = ArrayHelpers.removeNonUniqueValues([]);

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(0);
    });
  }); 

  describe("removeValueByIndex", () => {
    it("should remove an element from an array by it's index and return the updated array", () => {
      const array = ["Foo", "Bar"];
      const result = ArrayHelpers.removeValueByIndex(array, 1);

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(1);
      expect(result).toEqual(["Foo"]);
    });

    it("should do nothing if the given index is not in the array's range", () => {
      const array = ["Foo", "Bar"];
      const result = ArrayHelpers.removeValueByIndex(array, 5);

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(2);
      expect(result).toEqual(["Foo", "Bar"]);
    });

    it("should throw an Error if the given array is not an Array", () => {
      const error = "Parameter 'array' has to be an Array.";

      // @ts-ignore
      expect(() => ArrayHelpers.removeValueByIndex(null, 2)).toThrowError(error);

      // @ts-ignore
      expect(() => ArrayHelpers.removeValueByIndex(72342, 3)).toThrowError(error);

      // @ts-ignore
      expect(() => ArrayHelpers.removeValueByIndex("not-an-array", 3)).toThrowError(error);
    });

    it("should throw an Error if the given index is not a number", () => {
      const error = "Parameter 'index' has to be a number.";

      // @ts-ignore
      expect(() => ArrayHelpers.removeValueByIndex(["Foo", "Bar"], "0")).toThrowError(error);

      // @ts-ignore
      expect(() => ArrayHelpers.removeValueByIndex(["Foo", "Bar"], [2])).toThrowError(error);

      // @ts-ignore
      expect(() => ArrayHelpers.removeValueByIndex(["Foo", "Bar"], { index: 1})).toThrowError(error);
    });

    it("should throw an Error if the given index is less than 0", () => {
      const error = "Parameter 'index' has to be greater than 0.";

      expect(() => ArrayHelpers.removeValueByIndex(["Foo", "Bar"], -1)).toThrowError(error);
    });
  });
});
