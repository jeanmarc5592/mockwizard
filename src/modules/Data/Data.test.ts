import { Data } from "./Data";

describe("Data", () => {
  let dataMock: Data;

  beforeEach(() => {
    dataMock = new Data();
  });

  describe("digit", () => {
    it("should create a single digit between 0 and 9", () => {
      const digit = dataMock.digit();

      expect(typeof digit).toBe("number");
      expect(digit).toBeGreaterThanOrEqual(0);
      expect(digit).toBeLessThanOrEqual(9);
    });

    it("should create a single digit between 1 and 9 if 'notNull' option is specified", () => {
      const digit = dataMock.digit({ notNull: true });

      expect(typeof digit).toBe("number");
      expect(digit).toBeGreaterThanOrEqual(1);
      expect(digit).toBeLessThanOrEqual(9);
    });
  });

  describe("integer", () => {
    it("should create a random integer with 1-10 digits", () => {
      const integer = dataMock.integer();
      const digits = integer.toString().length;
      const firstDigit = integer.toString().charAt(0);

      expect(typeof integer).toBe("number");
      expect(Number.isInteger(integer)).toBe(true);
      expect(digits).toBeGreaterThanOrEqual(1);
      expect(digits).toBeLessThanOrEqual(10);
      expect(firstDigit).not.toBe("0");
    });

    it("should create a random integer with as many digits as specified in 'digitsCount' option", () => {
      const integer = dataMock.integer({ digitsCount: 5 });
      const digits = integer.toString().length;

      expect(typeof integer).toBe("number");
      expect(Number.isInteger(integer)).toBe(true);
      expect(digits).toBe(5);
    });

    it("should throw an Error if 'digitsCount' option is less than 1 or greater than 10", () => {
      const error = "Option 'digitsCount' has to be greater than 0 and less than or equal to 10.";
      
      expect(() => dataMock.integer({ digitsCount: -4 })).toThrowError(error);
      expect(() => dataMock.integer({ digitsCount: 234 })).toThrowError(error);
    });

    it("should throw an Error if 'digitsCount' option is not a number", () => {
      const error = "Option 'digitsCount' has to be a number.";

      // @ts-ignore
      expect(() => dataMock.integer({ digitsCount: "4" })).toThrowError(error);

      // @ts-ignore
      expect(() => dataMock.integer({ digitsCount: ["4"] })).toThrowError(error);

      // @ts-ignore
      expect(() => dataMock.integer({ digitsCount: true })).toThrowError(error);
    });
  });
});