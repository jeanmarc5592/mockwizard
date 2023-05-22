export interface DigitOptions {
  notNull?: boolean;
}

export interface IntegerOptions {
  digitsCount?: number;
}

export interface FloatOptions {
  decimalsCount?: number;
  integersCount?: number;
}

export interface NumberBetweenOptions {
  type?: "int" | "float";
}

export interface LetterOptions {
  onlyUppercase?: boolean;
  onlyLowercase?: boolean;
}

export interface ArrayElementsOptions {
  elementsCount?: number;
}

export interface ObjectElementOptions {
  returnKey?: boolean;
}
