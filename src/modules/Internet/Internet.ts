import { GenericData, RandomGenerator, ArrayHelpers } from "../../utils";
import { PasswordOptions } from "./types";

export class Internet {
  constructor() {
    this.lowerrcaseLetters = GenericData.lowerCaseLetters;
    this.uppercaseLetters = GenericData.upperCaseLetters;
    this.symbols = GenericData.symbols;
    this.numbers = GenericData.numbers;
  }

  password(options: PasswordOptions = {}): string {
    const length = options.length ?? 10;

    if (typeof length !== "number") {
      throw new Error("Option 'length' must be a number.");
    }

    if (length < 6) {
      throw new Error("Option 'length' must be greater than or equal to 6.");
    }

    if (length > 120) {
      throw new Error("Option 'length' must be less than or equal to 120.");
    }

    const passwordData = [...this.lowerrcaseLetters, ...this.uppercaseLetters, ...this.symbols, ...this.numbers];
    const shuffledData = ArrayHelpers.shuffle(passwordData);

    const password = RandomGenerator.generateMultipleValues(shuffledData, { amount: length }) as string[];

    return password.join("");
  }

  private readonly lowerrcaseLetters: string[];

  private readonly uppercaseLetters: string[];

  private readonly symbols: string[];

  private readonly numbers: string[];
}
