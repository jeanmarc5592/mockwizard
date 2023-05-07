import { Internet } from "./Internet";

describe("Internet", () => {
  let internetMock: Internet;

  beforeEach(() => {
    internetMock = new Internet();
  });

  describe("password", () => {
    it("should return a random string with 10 characters if 'length' option is not specified", () => {
      const result = internetMock.password();

      expect(result.length).toBe(10);
    });

    it("should throw an Error if 'length' option is not a number", () => {
      const error = "Option 'length' must be a number.";

      // @ts-ignore
      expect(() => internetMock.password({ length: "12" })).toThrowError(error);

      // @ts-ignore
      expect(() => internetMock.password({ length: [] })).toThrowError(error);

      // @ts-ignore
      expect(() => internetMock.password({ length: { length: 33 } })).toThrowError(error);
    });

    it("should throw an Error if 'length' option is less than 6", () => {
      const error = "Option 'length' must be greater than or equal to 6.";

      expect(() => internetMock.password({ length: 5 })).toThrowError(error);
      expect(() => internetMock.password({ length: 0 })).toThrowError(error);
      expect(() => internetMock.password({ length: -3 })).toThrowError(error);
      
      expect(() => internetMock.password({ length: 6 })).not.toThrowError(error);
    });

    it("should throw an Error if 'length' option is more than 120", () => {
      const error = "Option 'length' must be less than or equal to 120.";

      expect(() => internetMock.password({ length: 200 })).toThrowError(error);
      expect(() => internetMock.password({ length: 121 })).toThrowError(error);
      expect(() => internetMock.password({ length: 10000 })).toThrowError(error);
      
      expect(() => internetMock.password({ length: 120 })).not.toThrowError(error);
    });

    it("should return a random string with as many characters as the 'length' options is set to", () => {
      const length = 16;
      const result = internetMock.password({ length });

      expect(result.length).toBe(length);
    });
  });
});