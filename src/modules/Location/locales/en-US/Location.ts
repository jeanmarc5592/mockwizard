import { AbstractLocation } from "../../AbstractLocation";
import { City, State } from "../../types";
import { LocationData } from "./data";

export class Location extends AbstractLocation {
  protected statesList: State[];

  protected citiesList: City[];

  constructor() {
    super();
    this.statesList = LocationData.states;
    this.citiesList = LocationData.cities;
  }
}
