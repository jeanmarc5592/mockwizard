import { AbstractLocation } from "../../AbstractLocation";
import { City, State } from "../../types";
import { LocationData } from "./data";

export class Location extends AbstractLocation {
  protected statesList: State[];

  protected citiesList: City[];

  protected streetNamesList: string[];

  constructor() {
    super();
    this.statesList = LocationData.states;
    this.citiesList = LocationData.cities;
    this.streetNamesList = LocationData.streetNames;
  }
}
