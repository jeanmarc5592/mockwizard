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
