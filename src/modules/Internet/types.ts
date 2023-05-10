export interface PasswordOptions {
  length?: number;
  includeLowercase?: boolean;
  includeUppercase?: boolean;
  includeSymbols?: boolean;
  includeNumbers?: boolean;
}

export interface IpOptions {
  isLocal?: boolean;
}

export interface SlugOptions {
  length?: number;
}

export interface DomainOptions {
  tld?: string;
}
