import { AbstractPerson } from "./modules/Person";
import { Factory as PersonFactory } from "./modules/Person/Factory";
import { Locale } from "./modules/Person/types";

import { UUID } from "./modules/UUID";

import { Text } from "./modules/Text";

import { Internet } from "./modules/Internet";

interface MockWizardInterface {
  person: AbstractPerson;
  uuid: UUID;
  text: Text;
  internet: Internet;
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

  constructor(locale: Locale = "en-US") {
    this.person = PersonFactory.create(locale);
    this.uuid = new UUID();
    this.text = new Text();
    this.internet = new Internet(this.person);
  }
}
