import { UUID } from "./UUID";


describe("UUID", () => {
  let uuid: UUID;

  beforeEach(() => {
    uuid = new UUID();
  });

  describe("generate", () => {
    it("should generate a random valid uuid", () => {
      const result = uuid.generate();
      const uuidRegEx = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;

      expect(typeof result).toBe('string');
      expect(result).toMatch(uuidRegEx);
    });
  });
});