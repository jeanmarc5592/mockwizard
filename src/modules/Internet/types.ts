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

export interface UrlOptions {
  tld?: string;
  includeSSL?: boolean;
  includeSlug?: boolean;
}
