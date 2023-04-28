import { AbstractPerson } from "./modules/Person";
import { Factory as PersonFactory } from "./modules/Person/Factory";
import { Locale } from "./modules/Person/types";

import { UUID } from "./modules/UUID";

interface MockWizardInterface {
  person: AbstractPerson;
  uuid: UUID;
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
   * @type {AbstractPerson}
   */
  public readonly uuid: UUID;

  constructor(locale: Locale = "en-US") {
    this.person = PersonFactory.create(locale);
    this.uuid = new UUID();
  }
}
