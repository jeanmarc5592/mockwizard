import { AbstractLocation } from "../../AbstractLocation";
import { State } from "../../types";
import { LocationData } from "./data";

export class Location extends AbstractLocation {
  protected statesList: State[];

  constructor() {
    super();
    this.statesList = LocationData.states;
  }
}
