import "reflect-metadata";
import { AbstractPerson } from "./AbstractPerson";

class PersonMock extends AbstractPerson {
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
    this.suffixes = ["PHD", "Jr.", "Sr."];
    this.maleSalutations = ["Mr."];
    this.femaleSalutations = ["Mrs.", "Miss", "Ms."];
    this.commonSalutations = ["Dr.", "Prof.", "Rev."];
  }
}

describe("AbstractPerson", () => {
  let personMock: AbstractPerson;
  
  beforeEach(() => {
    personMock = new PersonMock();
  });

  describe("firstName", () => {
    it("should return a random male first name if gender option 'male' is provided", () => {
      const firstName = personMock.firstName({ gender: "male" });
      const maleFirstNames = Reflect.get(personMock, "maleFirstNames");
      
      expect(typeof firstName).toBe("string");
      expect(maleFirstNames).toContain(firstName);
    });

    it("should return a random female first name if gender option 'female' is provided", () => {
      const firstName = personMock.firstName({ gender: "female" });
      const femaleFirstNames = Reflect.get(personMock, "femaleFirstNames");
      
      expect(typeof firstName).toBe("string");
      expect(femaleFirstNames).toContain(firstName);
    });

    it("should return either a random female or random male first name if no gender option is provided", () => {
      const firstName = personMock.firstName();
      const maleFirstNames = Reflect.get(personMock, "maleFirstNames");
      const femaleFirstNames = Reflect.get(personMock, "femaleFirstNames");
      const allFirstNames = maleFirstNames.concat(femaleFirstNames);
      
      expect(typeof firstName).toBe("string");
      expect(allFirstNames).toContain(firstName);
    });
  });

  describe("lastName", () => {
    it("should return a random last name", () => {
      const lastName = personMock.lastName();
      const lastNames = Reflect.get(personMock, "lastNames");

      expect(typeof lastName).toBe("string");
      expect(lastNames).toContain(lastName);
    });
  });

  describe("fullName", () => {
    it("should just return a random first name and a random last name if no option is provided", () => {
      const fullName = personMock.fullName();
      const maleFirstNames = Reflect.get(personMock, "maleFirstNames");
      const femaleFirstNames = Reflect.get(personMock, "femaleFirstNames");
      const allFirstNames = maleFirstNames.concat(femaleFirstNames);
      const lastNames = Reflect.get(personMock, "lastNames");

      const firstName = fullName.split(" ")[0];
      const lastName = fullName.split(" ")[1];

      expect(fullName.split(" ").length).toBe(2);
      expect(typeof fullName).toBe("string");
      expect(allFirstNames).toContain(firstName);
      expect(lastNames).toContain(lastName);
    });

    it("should include a random salutation if includeSalutation option is provided", () => {
      const fullName = personMock.fullName({ includeSalutation: true });
      const salutations = Reflect.get(personMock, "commonSalutations");

      const salutation = fullName.split(" ")[0];

      expect(fullName.split(" ").length).toBe(3);
      expect(typeof fullName).toBe("string");
      expect(salutations).toContain(salutation);
    });

    it("should include a random suffix if includeSuffix option is provided", () => {
      const fullName = personMock.fullName({ includeSuffix: true });
      const suffixes = Reflect.get(personMock, "suffixes");

      const suffix = fullName.split(" ")[2];

      expect(fullName.split(" ").length).toBe(3);
      expect(typeof fullName).toBe("string");
      expect(suffixes).toContain(suffix);
    });

    it("should include a random salutation and a random suffix if both options are provided", () => {
      const fullName = personMock.fullName({ includeSalutation: true, includeSuffix: true });
      const salutations = Reflect.get(personMock, "commonSalutations");
      const suffixes = Reflect.get(personMock, "suffixes");

      const salutation = fullName.split(" ")[0];
      const suffix = fullName.split(" ")[3];

      expect(fullName.split(" ").length).toBe(4);
      expect(typeof fullName).toBe("string");
      expect(salutations).toContain(salutation);
      expect(suffixes).toContain(suffix);
    });
  });

  describe("suffix", () => {
    it("should a random suffix", () => {
      const suffix = personMock.suffix();
      const suffixes = Reflect.get(personMock, "suffixes");

      expect(typeof suffix).toBe("string");
      expect(suffixes).toContain(suffix);
    });
  });

  describe("salutation", () => {
    it("should return a random male salutation if gender option 'male' is provided", () => {
      const salutation = personMock.salutation({ gender: "male" });
      const maleSalutations = Reflect.get(personMock, "maleSalutations");

      expect(typeof salutation).toBe("string");
      expect(maleSalutations).toContain(salutation);
    });

    it("should return a random female salutation if gender option 'female' is provided", () => {
      const salutation = personMock.salutation({ gender: "female" });
      const femaleSalutations = Reflect.get(personMock, "femaleSalutations");

      expect(typeof salutation).toBe("string");
      expect(femaleSalutations).toContain(salutation);
    });

    it("should return a common salutation if no gender option is provided", () => {
      const salutation = personMock.salutation();
      const commonSalutations = Reflect.get(personMock, "commonSalutations");

      expect(typeof salutation).toBe("string");
      expect(commonSalutations).toContain(salutation);
    });
  });
});
