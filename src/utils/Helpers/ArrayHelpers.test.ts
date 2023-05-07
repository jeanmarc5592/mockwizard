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
});
