import { Locale } from "../../../../types";
import { AbstractLocation } from "../../AbstractLocation";
import { City, State } from "../../types";
import { LocationData } from "./data";

export class Location extends AbstractLocation {
  protected statesList: State[];

  protected citiesList: City[];

  protected streetNamesList: string[];

  protected LOCALE: Locale;

  constructor() {
    super();
    this.statesList = LocationData.states;
    this.citiesList = LocationData.cities;
    this.streetNamesList = LocationData.streetNames;
    this.LOCALE = "de-DE";
  }
}
