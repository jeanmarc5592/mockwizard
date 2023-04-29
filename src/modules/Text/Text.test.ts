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
    it("should generate 3 random words from the given list if 'words' option is not specified", () => {
      const results = textMock.words() as string[];
      const wordsList = Reflect.get(textMock, "data");

      results.forEach(result => {
        expect(wordsList).toContain(result);
      });

      expect(results).toBeInstanceOf(Array);
      expect(results).toHaveLength(3);
    });

    it("should generate as many results as the 'words' option is set to", () => {
      const wordsList = Reflect.get(textMock, "data");

      const wordsCountOne = 5;
      const wordsCountTwo = 20;
      const wordsCountFour = 100;

      const resultsOne = textMock.words({ words: wordsCountOne }) as string[];
      const resultsTwo = textMock.words({ words: wordsCountTwo }) as string[];
      const resultsThree = textMock.words({ words: wordsCountFour }) as string[];

      expect(resultsOne).toHaveLength(wordsCountOne);
      expect(resultsTwo).toHaveLength(wordsCountTwo);
      expect(resultsThree).toHaveLength(wordsCountFour);

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

    it("should return the results as an array of strings if 'asString' option is not specified", () => {
      const result = textMock.words() as string[];

      expect(result).toBeInstanceOf(Array);
    });

    it("should return the results as a single string if 'asString' option is specified", () => {
      const result = textMock.words({ asString: true }) as string;

      expect(typeof result).toBe("string");
    });
  });

  describe("sentence", () => {
    it("should generate a sentence with 5 random words from a given list if 'words' option is not specified", () => {
      const result = textMock.sentence() as string[];

      expect(result).toHaveLength(5);
    });

    it("should generate a sentence with as many words as in the 'words' option is specified from a given list", () => {
      const result = textMock.sentence({ words: 10 }) as string[];

      expect(result).toHaveLength(10);
    });

    it("should return the sentence as an array if 'asString' option is not specified", () => {
      const result = textMock.sentence() as string[];

      expect(result).toBeInstanceOf(Array);
    });

    it("should return the sentence as a string if 'asString' option is specified", () => {
      const result = textMock.sentence({ asString: true }) as string;

      expect(typeof result).toBe("string");
    });

    it("should make the first character of the first word uppercase", () => {
      const result = textMock.sentence() as string[];
      
      const firstChar = result[0].charAt(0);

      expect(firstChar).toMatch((/[A-Z]/));
    });

    it("should add a dot after the last word", () => {
      const result = textMock.sentence() as string[];

      const lastWord = result[result.length - 1];
      const lastChar = lastWord.charAt(lastWord.length - 1);

      expect(lastChar).toBe(".");
    });
  });
});