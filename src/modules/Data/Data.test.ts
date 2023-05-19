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

  describe("float", () => {
    it("should create random floating number with 1-5 decimals and 1-10 integers", () => {
      const float = dataMock.float();
      
      const integers = float.toString().split(".")[0].length;
      const firstInteger = float.toString().charAt(0);
      
      const decimals = float.toString().split(".")[1].length;

      expect(typeof float).toBe("number");
      expect(Number.isInteger(float)).not.toBe(true);

      expect(integers).toBeGreaterThanOrEqual(1);
      expect(integers).toBeLessThanOrEqual(10);

      expect(decimals).toBeGreaterThanOrEqual(1);
      expect(decimals).toBeLessThanOrEqual(5);

      expect(firstInteger).not.toBe("0");
    });

    it("should create a random floating number with as many decimals as specified in 'decimalsCount' option", () => {
      const float = dataMock.float({ decimalsCount: 4 });
      const decimals = float.toString().split(".")[1].length;

      expect(typeof float).toBe("number");
      expect(Number.isInteger(float)).not.toBe(true);
      expect(decimals).toBe(4);
    });

    it("should create a random floating number with as many integers as specified in 'integersCount' option", () => {
      const float = dataMock.float({ integersCount: 3 });
      const integers = float.toString().split(".")[0].length;

      expect(typeof float).toBe("number");
      expect(Number.isInteger(float)).not.toBe(true);
      expect(integers).toBe(3);
    });

    it("should throw an Error if 'decimalsCount' option is less than 1 or greater than ", () => {
      const error = "Option 'decimalsCount' has to be greater than 0 and less than or equal to 5.";

      expect(() => dataMock.float({ decimalsCount: -4 })).toThrowError(error);
      expect(() => dataMock.float({ decimalsCount: 234 })).toThrowError(error);
    });

    it("should throw an Error if 'decimalsCount' option is not a number", () => {
      const error = "Option 'decimalsCount' has to be a number.";

      // @ts-ignore
      expect(() => dataMock.float({ decimalsCount: "4" })).toThrowError(error);

      // @ts-ignore
      expect(() => dataMock.float({ decimalsCount: ["4"] })).toThrowError(error);

      // @ts-ignore
      expect(() => dataMock.float({ decimalsCount: true })).toThrowError(error);
    });
  });

  describe("numberBetween", () => {
    it("should generate a random integer between the given min and max values", () => {
      const number = dataMock.numberBetween(4, 100);

      expect(typeof number).toBe("number");
      expect(Number.isInteger(number)).toBe(true);
      expect(number).toBeGreaterThanOrEqual(4);
      expect(number).toBeLessThanOrEqual(100);
    });

    it("should generate a random integer if 'type' option is set to 'int'", () => {
      const number = dataMock.numberBetween(1, 50, { type: "int" });

      expect(typeof number).toBe("number");
      expect(Number.isInteger(number)).toBe(true);
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(50);
    });

    it("should generate a random float if 'type' option is set to 'float'", () => {
      const number = dataMock.numberBetween(1, 50, { type: "float" });

      expect(typeof number).toBe("number");
      expect(Number.isInteger(number)).not.toBe(true);
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(50);
    });
  });

  describe("letter", () => {
    it("should return an uppercase or lowercase letter as a string", () => {
      const letter = dataMock.letter();

      expect(typeof letter).toBe("string");
      expect(letter).toMatch(/[A-Za-z]/);
    });

    it("should return an uppercase letter if 'onlyUppercase' option is specified", () => {
      const letter = dataMock.letter({ onlyUppercase: true });

      expect(typeof letter).toBe("string");
      expect(letter).toMatch(/[A-Z]/);
    });

    it("should return a lowercase letter if 'onlyLowercase' option is specified", () => {
      const letter = dataMock.letter({ onlyLowercase: true });

      expect(typeof letter).toBe("string");
      expect(letter).toMatch(/[a-z]/);
    });
  });
});