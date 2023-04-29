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
});