import "reflect-metadata";
import { Internet } from "./Internet";
import { AbstractPerson } from "../Person";

class MockPerson extends AbstractPerson {
  protected maleFirstNames: string[];
  protected femaleFirstNames: string[];
  protected lastNames: string[];
  protected suffixes: string[];
  protected maleSalutations: string[];
  protected femaleSalutations: string[];
  protected commonSalutations: string[];

  constructor() {
    super();
    this.maleFirstNames = ["John", "Andrew", "Mike"];
    this.femaleFirstNames = ["Sarah", "Angela", "Susan"];
    this.lastNames = ["Barkley", "Hill", "Jackson"];
    this.suffixes = [];
    this.maleSalutations = [];
    this.femaleSalutations = [];
    this.commonSalutations = [];
  }
  
}

describe("Internet", () => {
  let internetMock: Internet;

  beforeEach(() => {
    internetMock = new Internet(new MockPerson());
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

  describe("ipv4", () => {
    it("should return a valid random ipv4 address", () => {
      const ipv4 = internetMock.ipv4();

      expect(typeof ipv4).toBe("string");
      expect(ipv4.split(".")).toHaveLength(4);

      ipv4.split(".").forEach(octet => {
        expect(parseInt(octet)).toBeGreaterThanOrEqual(0);
        expect(parseInt(octet)).toBeLessThanOrEqual(255);
      });
    });

    it("should return a random local ipv4 address if 'isLocal' option is specified", () => {
      const ipv4 = internetMock.ipv4({ isLocal: true });

      expect(typeof ipv4).toBe("string");
      expect(ipv4.split(".")).toHaveLength(4);
      expect(ipv4.startsWith("192.168.") || ipv4.startsWith("10.")).toBe(true);
    });
  });

  describe("ipv6", () => {
    it("should return a valid random ipv6 address", () => {
      const ipv6 = internetMock.ipv6();
      const regex = /^[0-9a-f]+$/;

      expect(typeof ipv6).toBe("string");
      expect(ipv6.split(":")).toHaveLength(8);

      ipv6.split(":").forEach(number => {
        expect(number.length).toBe(4);
        expect(regex.test(number.charAt(0))).toBe(true);
        expect(regex.test(number.charAt(1))).toBe(true);
        expect(regex.test(number.charAt(2))).toBe(true);
        expect(regex.test(number.charAt(3))).toBe(true);
      });
    });

    it("should return a random local ipv6 address if 'isLocal' option is specified", () => {
      const ipv6 = internetMock.ipv6({ isLocal: true });

      expect(typeof ipv6).toBe("string");
      expect(ipv6.split(":")).toHaveLength(8);
      expect(ipv6.startsWith("fe80:")).toBe(true);
    });
  });

  describe("slug", () => {
    it("should return a random string with three slug-parts when 'length' option is not specified", () => {
      const slug = internetMock.slug();

      expect(typeof slug).toBe("string");
      expect(slug.split("-")).toHaveLength(3);
    });

    it("should return a random string with words from a given list", () => {
      const slug = internetMock.slug();
      const wordsList = Reflect.get(internetMock, "words");

      expect(typeof slug).toBe("string");
      slug.split("-").forEach(word => {
        expect(wordsList).toContain(word);
      })
    });

    it("should return a random string with as many slugs as in the 'length' option is specified", () => {
      const slug = internetMock.slug({ length: 5 });

      expect(typeof slug).toBe("string");
      expect(slug.split("-")).toHaveLength(5);
    });

    it("should throw an Error if 'length' option is not a number", () => {
      const error = "Option 'length' has to be a number.";

      // @ts-ignore
      expect(() => internetMock.slug({ length: "3" })).toThrowError(error);

      // @ts-ignore
      expect(() => internetMock.slug({ length: [ "3" ] })).toThrowError(error);

      // @ts-ignore
      expect(() => internetMock.slug({ length: { length: 4 } })).toThrowError(error);
    });

    it("should throw an Error if 'length' option is less than 1 or greater than 10", () => {
      const error = "Option 'length' has to be greater than or equal to 1 and less than or equal to 10.";
      
      expect(() => internetMock.slug({ length: -4 })).toThrowError(error);
      expect(() => internetMock.slug({ length: 16 })).toThrowError(error);

      expect(() => internetMock.slug({ length: 1 })).not.toThrowError(error);
      expect(() => internetMock.slug({ length: 10 })).not.toThrowError(error);
    });
  });

  describe("domain", () => {
    it("should return a random string representing a '.com' domain when 'tld' option is not specified", () => {
      const domain = internetMock.domain();
      const tld = domain.split(".")[1];

      expect(typeof domain).toBe("string");
      expect(tld).toBe("com");
    });

    it("should return a random string that includes one name from a given list", () => {
      const domain = internetMock.domain();
      const domainName = domain.split(".")[0];
      const words = Reflect.get(internetMock, "words");

      expect(typeof domain).toBe("string");
      expect(domain.split(".")).toHaveLength(2);
      expect(words).toContain(domainName);
    });

    it("should return a random string with whatever in 'tld' option is specified", () => {
      const domain = internetMock.domain({ tld: "io" });
      const tld = domain.split(".")[1];
      
      expect(typeof domain).toBe("string");
      expect(tld).toBe("io");
    });

    it("should throw an Error if 'tld' option is not a string", () => {
      const error = "Option 'tld' has to be a string.";

      // @ts-ignore
      expect(() => internetMock.domain({ tld: true })).toThrowError(error);

      // @ts-ignore
      expect(() => internetMock.domain({ tld: { tld: "net" } })).toThrowError(error);

      // @ts-ignore
      expect(() => internetMock.domain({ tld: 44 })).toThrowError(error);
    });
  });

  describe("url", () => {
    it("should return a random url that contains 'www' and a '.com' if no options are specified", () => {
      const url = internetMock.url();
      const subDomain = url.split(".")[0];
      const tld = url.split(".")[2];

      expect(typeof url).toBe("string");
      expect(url.split(".")).toHaveLength(3);
      expect(subDomain).toBe("www");
      expect(tld).toBe("com");
    });

    it("should return a random url that contains a word as the domain name from a given list", () => {
      const url = internetMock.url();
      const domainName = url.split(".")[1];
      const wordsList = Reflect.get(internetMock, "words");

      expect(wordsList).toContain(domainName);
    });

    it("should return a random url that contains 'https' if 'includeSSL' option is specified", () => {
      const url = internetMock.url({ includeSSL: true });

      expect(typeof url).toBe("string");
      expect(url.startsWith("https://")).toBe(true);
    });

    it("should return a random url that contains a three part slug if 'includeSlug' option is specified", () => {
      const url = internetMock.url({ includeSlug: true });
      const slug = url.split("/")[1];

      expect(typeof url).toBe("string");
      expect(slug.split("-")).toHaveLength(3);
    });

    it("should return a random url that contains a custom tld whatever in 'tld' option is specified", () => {
      const url = internetMock.url({ tld: "net" });
      const tld = url.split(".")[2];

      expect(typeof url).toBe("string");
      expect(url.split(".")).toHaveLength(3);
      expect(tld).toBe("net");
    });
  }); 

  describe("userName", () => {
    let personMock: AbstractPerson;

    beforeEach(() => {
      personMock = new MockPerson();
    });

    it("should return a random string that contains a default person's first name, last name and a number", () => {
      const userName = internetMock.userName();
      const firstName = userName.split("_")[0];
      const lastName = userName.split("_")[1];

      const maleFirstNames: string[] = Reflect.get(personMock, "maleFirstNames");
      const femaleFirstNames: string[] = Reflect.get(personMock, "femaleFirstNames");
      const allFirstNames: string[] = maleFirstNames.concat(femaleFirstNames);
      const lastNames: string[] = Reflect.get(personMock, "lastNames");

      expect(typeof userName).toBe("string");
      expect(allFirstNames).toContain(firstName);
      expect(lastNames).toContain(lastName);
      
      const numericRegex = /\d/;
      expect(numericRegex.test(userName)).toBe(true);
    });

    it("should return a random string that contains the first name that's specified in 'firstName' option", () => {
      const userName = internetMock.userName({ firstName: "Jonny" });
      const firstName = userName.split("_")[0];
      
      expect(typeof userName).toBe("string");
      expect(firstName).toBe("Jonny");
    });

    it("should return a random string that contains the last name that's specified in 'lastName' option", () => {
      const userName = internetMock.userName({ lastName: "Miller" });
      const lastName = userName.split("_")[1];

      expect(typeof userName).toBe("string");
      expect(lastName).toBe("Miller");
    });

    it("should return a random string that contains the first name & last name that's specified in 'firstName' & 'lastName' option", () => {
      const userName = internetMock.userName({ firstName: "Foo", lastName: "Bar" });
      const firstName = userName.split("_")[0];
      const lastName = userName.split("_")[1];

      expect(typeof userName).toBe("string");
      expect(firstName).toBe("Foo");
      expect(lastName).toBe("Bar");
    });

    it("should return a random string that contains an anonymous username if 'isAnonymous' option is specified", () => {
      const userName = internetMock.userName({ isAnonymous: true });
      const anonymousNames = Reflect.get(internetMock, "anonymousNames");

      expect(typeof userName).toBe("string");
      expect(anonymousNames).toContain(userName);
    });

    it("should throw an Error if option 'firstName' or 'lastName' is not a string", () => {
      const error = "Parameter 'firstName' and 'lastName' has to be a string.";

      // @ts-ignore
      expect(() => internetMock.userName({ firstName: true })).toThrowError(error);

      // @ts-ignore
      expect(() => internetMock.userName({ lastName: 33423 })).toThrowError(error);
    });
  });
});