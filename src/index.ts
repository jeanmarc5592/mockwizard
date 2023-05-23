import { Locale } from "./types";

import { AbstractPerson } from "./modules/Person";
import { Factory as PersonFactory } from "./modules/Person/Factory";

import { UUID } from "./modules/UUID";

import { Text } from "./modules/Text";

import { Internet } from "./modules/Internet";

import { Data } from "./modules/Data";

import { AbstractLocation } from "./modules/Location/AbstractLocation";
import { Factory as LocationFactory } from "./modules/Location/Factory";

interface MockWizardInterface {
  person: AbstractPerson;
  uuid: UUID;
  text: Text;
  internet: Internet;
  data: Data;
  location: AbstractLocation;
}

export class MockWizard implements MockWizardInterface {
  /**
   * The property that holds the Person module
   *
   * @public
   * @readonly
   * @type {AbstractPerson}
   */
  public readonly person: AbstractPerson;

  /**
   * The property that holds the UUID module
   *
   * @public
   * @readonly
   * @type {UUID}
   */
  public readonly uuid: UUID;

  /**
   * The property that holds the Text module
   *
   * @public
   * @readonly
   * @type {Text}
   */
  public readonly text: Text;

  /**
   * The property that holds the Internet module
   *
   * @public
   * @readonly
   * @type {Internet}
   */
  public readonly internet: Internet;

  /**
   * The property that holds the Data module
   *
   * @public
   * @readonly
   * @type {Data}
   */
  public readonly data: Data;

  /**
   * The property that holds the Location module
   *
   * @public
   * @readonly
   * @type {Data}
   */
  public readonly location: AbstractLocation;

  constructor(locale: Locale = "en-US") {
    this.person = PersonFactory.create(locale);
    this.uuid = new UUID();
    this.text = new Text();
    this.internet = new Internet(this.person);
    this.data = new Data();
    this.location = LocationFactory.create(locale);
  }
}
