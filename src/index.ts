import { AbstractPerson } from "./modules/Person";
import { Factory as PersonFactory } from "./modules/Person/Factory";
import { Locale } from "./modules/Person/types";

import { UUID } from "./modules/UUID";

import { Text } from "./modules/Text";

interface MockWizardInterface {
  person: AbstractPerson;
  uuid: UUID;
  text: Text;
}

export class MockWizard implements MockWizardInterface {
  /**
   * The property that holds the Person module
   *
   * @public
   * @type {AbstractPerson}
   */
  public readonly person: AbstractPerson;

  /**
   * The property that holds the UUID module
   *
   * @public
   * @type {UUID}
   */
  public readonly uuid: UUID;

  /**
   * The property that holds the Text module
   *
   * @public
   * @type {Text}
   */
  public readonly text: Text;

  constructor(locale: Locale = "en-US") {
    this.person = PersonFactory.create(locale);
    this.uuid = new UUID();
    this.text = new Text();
  }
}
