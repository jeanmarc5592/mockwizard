export type State = {
  name: string;
  abbreviation: string;
};

export interface StateOptions {
  abbreviated?: true;
}

export type City = {
  name: string;
  state: string;
};

export type Continent = "Africa" | "Asia" | "Europe" | "North America" | "Oceania" | "South America";

export type Country = {
  name: string;
  continent: Continent;
  countryCode: string;
};
