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

      results.forEach((result) => {
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

      resultsOne.forEach((result) => {
        expect(wordsList).toContain(result);
      });
      resultsTwo.forEach((result) => {
        expect(wordsList).toContain(result);
      });
      resultsThree.forEach((result) => {
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
    it("should generate a sentence with 3 to 15 random words if 'words' option is not specified", () => {
      const result = textMock.sentence() as string[];

      expect(result.length).toBeGreaterThanOrEqual(3);
      expect(result.length).toBeLessThanOrEqual(15);
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

      expect(firstChar).toMatch(/[A-Z]/);
    });

    it("should add a dot after the last word", () => {
      const result = textMock.sentence() as string[];

      const lastWord = result[result.length - 1];
      const lastChar = lastWord.charAt(lastWord.length - 1);

      expect(lastChar).toBe(".");
    });
  });

  describe("sentences", () => {
    it("should throw an Error if 'sentences' option is not a number", () => {
      const error = "Option 'sentences' must be a number.";

      // @ts-ignore
      expect(() => textMock.sentences({ sentences: "5" })).toThrowError(error);

      // @ts-ignore
      expect(() => textMock.sentences({ sentences: [] })).toThrowError(error);

      // @ts-ignore
      expect(() => textMock.sentences({ sentences: true })).toThrowError(error);
    });

    it("should throw an Error if 'sentences' option is less than or equal to 0", () => {
      const error = "Option 'sentences' must be greater than 0.";

      expect(() => textMock.sentences({ sentences: 0 })).toThrowError(error);
      expect(() => textMock.sentences({ sentences: -5 })).toThrowError(error);
    });

    it("should return 3 random sentences if 'sentences' option is not specified", () => {
      const result = textMock.sentences() as string[];

      expect(result).toHaveLength(3);
    });

    it("should return as many sentences as in the 'sentences' option is specified", () => {
      const result = textMock.sentences({ sentences: 7 }) as string[];

      expect(result).toHaveLength(7);
    });

    it("should return sentences that contain 3 to 15 random words if 'words' option is not specified", () => {
      const result = textMock.sentences() as string[];

      result.forEach(sentence => {
        expect(sentence.split(" ").length).toBeGreaterThanOrEqual(3);
        expect(sentence.split(" ").length).toBeLessThanOrEqual(15);
      });
    });

    it("should return sentences with as many words as specified in 'words' option", () => {
      const result = textMock.sentences({ words: 6 }) as string[];

      result.forEach(sentence => {
        expect(sentence.split(" ")).toHaveLength(6);
      });
    });

    it("should return 3 random sentences as an array if 'asString' is not specified", () => {
      const result = textMock.sentences() as string[];

      expect(result).toBeInstanceOf(Array);
    });

    it("should generate 3 random sentences as a single string if 'asString' is not specified", () => {
      const result = textMock.sentences({ asString: true }) as string;

      expect(typeof result).toBe("string");
    });
  });

  describe("paragraphs", () => {
    it("should throw an Error if 'paragraphs' option is not a number", () => {
      const error = "Option 'paragraphs' must be a number.";

      // @ts-ignore
      expect(() => textMock.paragraphs({ paragraphs: "6" })).toThrowError(error);

      // @ts-ignore
      expect(() => textMock.paragraphs({ paragraphs: [] })).toThrowError(error);

      // @ts-ignore
      expect(() => textMock.paragraphs({ paragraphs: true })).toThrowError(error);
    });

    it("should throw an Error if 'paragraphs' option is less than or equal to 0", () => {
      const error = "Option 'paragraphs' must be greater than 0.";

      expect(() => textMock.paragraphs({ paragraphs: -3 })).toThrowError(error);
      expect(() => textMock.paragraphs({ paragraphs: 0 })).toThrowError(error);
    });

    it("should return 3 paragraphs if 'paragraphs' option is not specified", () => {
      const result = textMock.paragraphs() as string[];

      expect(result).toHaveLength(3);
    });

    it("should return as many paragraphs as speciefied in the 'paragraphs' option", () => {
      const result = textMock.paragraphs({ paragraphs: 10 }) as string[];

      expect(result).toHaveLength(10);
    });

    it("should return 3 sentences for each paragraph if 'sentences' option is not specified", () => {
      const result = textMock.paragraphs() as string[];

      result.forEach(paragraph => {
        expect(paragraph.split(". ")).toHaveLength(3);
      });
    });

    it("should return for each paragraph as many sentences as specified in 'sentences' option", () => {
      const result = textMock.paragraphs({ sentences: 7 }) as string[];

      result.forEach(paragraph => {
        expect(paragraph.split(". ")).toHaveLength(7);
      });
    });

    it("should return sentences with 3 to 15 words if 'words' option is not specified", () => {
      const result = textMock.paragraphs() as string[];

      result.forEach(paragraph => {
        paragraph.split(". ").forEach(sentence => {
          expect(sentence.split(" ").length).toBeGreaterThanOrEqual(3);
          expect(sentence.split(" ").length).toBeLessThanOrEqual(15);
        });
      });
    });

    it("should return sentences with as many words as specified in 'words' option", () => {
      const result = textMock.paragraphs({ words: 9 }) as string[];

      result.forEach(paragraph => {
        paragraph.split(". ").forEach(sentence => {
          expect(sentence.split(" ")).toHaveLength(9);
        });
      });
    });

    it("should paragraphs as an array of strings if 'asString' option is not specified", () => {
      const result = textMock.paragraphs() as string[];

      expect(result).toBeInstanceOf(Array);
      result.forEach(paragraph => {
        expect(typeof paragraph).toBe("string");
      });
    });

    it("should return paragraphs as a single string if 'asString' option is specified", () => {
      const result = textMock.paragraphs({ asString: true }) as string;

      expect(typeof result).toBe("string");
    });

    it("should include double linebreaks if 'asString' option is specified", () => {
      const result = textMock.paragraphs({ asString: true }) as string;

      const lineBreaks = result.split("\n").filter(item => item === " ");

      expect(result.includes("\n \n")).toBe(true);
      expect(lineBreaks).toHaveLength(2); // 3 paragraphs -> 2 linebreaks in between (Default)
    });
  });
});
