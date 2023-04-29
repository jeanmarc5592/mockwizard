import "reflect-metadata";
import { Text } from "./Text";


describe("Text", () => {
  let textMock: Text;

  beforeEach(() => {
    textMock = new Text();
  });

  describe("word", () => {
    it("should return one random word from the given list", () => {
      const result = textMock.word();
      const wordsList = Reflect.get(textMock, "data");

      expect(typeof result).toBe("string");
      expect(wordsList).toContain(result);
    });
  });

  describe("words", () => {
    it("should generate 3 random words from the given list if 'amount' option is not specified", () => {
      const results = textMock.words() as string[];
      const wordsList = Reflect.get(textMock, "data");

      results.forEach(result => {
        expect(wordsList).toContain(result);
      });

      expect(results).toBeInstanceOf(Array);
      expect(results).toHaveLength(3);
    });

    it("should generate as many results as the 'amount' option is set to", () => {
      const wordsList = Reflect.get(textMock, "data");

      const amountOne = 5;
      const amountTwo = 20;
      const amountThree = 100;

      const resultsOne = textMock.words({ amount: amountOne }) as string[];
      const resultsTwo = textMock.words({ amount: amountTwo }) as string[];
      const resultsThree = textMock.words({ amount: amountThree }) as string[];

      expect(resultsOne).toBeInstanceOf(Array);
      expect(resultsTwo).toBeInstanceOf(Array);
      expect(resultsThree).toBeInstanceOf(Array);

      expect(resultsOne).toHaveLength(amountOne);
      expect(resultsTwo).toHaveLength(amountTwo);
      expect(resultsThree).toHaveLength(amountThree);

      resultsOne.forEach(result => {
        expect(wordsList).toContain(result);
      });
      resultsTwo.forEach(result => {
        expect(wordsList).toContain(result);
      });
      resultsThree.forEach(result => {
        expect(wordsList).toContain(result);
      });
    });

    it("should return the results as a single string if 'asString' option is specified", () => {
      const result = textMock.words({ asString: true }) as string;

      expect(typeof result).toBe("string");
    });
  });
});