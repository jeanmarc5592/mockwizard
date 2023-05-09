import "reflect-metadata";
import { Internet } from "./Internet";

describe("Internet", () => {
  let internetMock: Internet;

  beforeEach(() => {
    internetMock = new Internet();
  });

  describe("password", () => {
    let lowercaseLetters: string[];
    let uppercaseLetters: string[];
    let symbols: string[];
    let numbers: string[];

    beforeEach(() => {
      lowercaseLetters = Reflect.get(internetMock, "lowercaseLetters");
      uppercaseLetters = Reflect.get(internetMock, "uppercaseLetters");
      symbols = Reflect.get(internetMock, "symbols");
      numbers = Reflect.get(internetMock, "numbers");
    });

    it("should return a random string with 10 characters if 'length' option is not specified", () => {
      const result = internetMock.password();

      expect(typeof result).toBe("string");
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

      expect(typeof result).toBe("string");
      expect(result.length).toBe(length);
    });

    it("should return a random string with uppercase letters, lowercase letters, symbols and numbers by default", () => {
      const result = internetMock.password();
      const allCharacters = [...lowercaseLetters, ...uppercaseLetters, ...symbols, ...numbers];

      result.split("").forEach(char => {
        expect(allCharacters).toContain(char);
      });
    });


    it("should return a random string with uppercase letters, lowercase letters, symbols and numbers if all options are specified", () => {
      const result = internetMock.password({ includeUppercase: true, includeLowercase: true, includeNumbers: true, includeSymbols: true });
      const allCharacters = [...lowercaseLetters, ...uppercaseLetters, ...symbols, ...numbers];

      result.split("").forEach(char => {
        expect(allCharacters).toContain(char);
      });
    });

    it("should return a random string with only uppercase letters if 'includeUppercase' is specified", () => {
      const result = internetMock.password({ includeUppercase: true });

      result.split("").forEach(char => {
        expect(uppercaseLetters).toContain(char);
      });
    });

    it("should return a random string with only lowercase letters if 'includeLowercase' is specified", () => {
      const result = internetMock.password({ includeLowercase: true });

      result.split("").forEach(char => {
        expect(lowercaseLetters).toContain(char);
      });
    });

    it("should return a random string with only numbers if 'includeNumbers' is specified", () => {
      const result = internetMock.password({ includeNumbers: true });

      result.split("").forEach(char => {
        expect(numbers).toContain(char);
      });
    });

    it("should return a random string with only symbols if 'includeSymbols' is specified", () => {
      const result = internetMock.password({ includeSymbols: true });

      result.split("").forEach(char => {
        expect(symbols).toContain(char);
      });
    });
  });

  describe("macAddress", () => {
    it("should return a random string with 6 bytes that are separated by a colon", () => {
      const macAddress = internetMock.macAddress();

      expect(typeof macAddress).toBe("string");
      expect(macAddress.split(":")).toHaveLength(6);
    });

    it("should return a random string where each byte contains 2 hexadecimal numbers", () => {
      const macAddress = internetMock.macAddress();
      const regex = /^[0-9A-Fa-f]+$/;

      macAddress.split(":").forEach(byte => {
        expect(byte.length).toBe(2);
        expect(regex.test(byte.charAt(0))).toBe(true);
        expect(regex.test(byte.charAt(1))).toBe(true);
      });
    });
  });
});