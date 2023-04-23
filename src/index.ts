import { AbstractPerson } from "./modules/Person/AbstractPerson";
import { Factory as PersonFactory } from "./modules/Person/Factory";
import { Locale } from "./modules/Person/types";

interface MockWizardInterface {
  person: AbstractPerson;
}

export class MockWizard implements MockWizardInterface {
  public person: AbstractPerson;

  constructor(locale: Locale = "en-US") {
    this.person = PersonFactory.create(locale);
  }
}
