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
      const digit = dataMock.digit();

      expect(typeof digit).toBe("number");
      expect(digit).toBeGreaterThanOrEqual(1);
      expect(digit).toBeLessThanOrEqual(9);
    });
  });
});