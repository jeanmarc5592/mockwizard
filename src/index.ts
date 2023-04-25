import { AbstractPerson } from "./modules/Person";
import { Factory as PersonFactory } from "./modules/Person/Factory";
import { Locale } from "./modules/Person/types";

import { UUID } from "./modules/UUID";

interface MockWizardInterface {
  person: AbstractPerson;
  uuid: UUID;
}

export class MockWizard implements MockWizardInterface {
  public person: AbstractPerson;

  public uuid: UUID;

  constructor(locale: Locale = "en-US") {
    this.person = PersonFactory.create(locale);
    this.uuid = new UUID();
  }
}
