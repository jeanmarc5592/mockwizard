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
  zipCode: string;
};

export type Country = {
  name: string;
  countryCode: string;
};

export interface CoordinatesOptions {
  min?: number;
  max?: number;
}

export type Coordinates = {
  lat: number;
  lng: number;
};
