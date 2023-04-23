import { AbstractPerson } from "../../AbstractPerson";
import { PersonData } from "./data";

export class Person extends AbstractPerson {
  protected maleFirstNames: string[];

  protected femaleFirstNames: string[];

  protected lastNames: string[];

  protected suffixes: string[];

  protected maleSalutations: string[];

  protected femaleSalutations: string[];

  protected commonSalutations: string[];

  constructor() {
    super();
    this.maleFirstNames = PersonData.maleFirstNames;
    this.femaleFirstNames = PersonData.femaleFirstNames;
    this.lastNames = PersonData.lastNames;
    this.suffixes = PersonData.suffixes;
    this.maleSalutations = PersonData.maleSalutations;
    this.femaleSalutations = PersonData.femaleSalutations;
    this.commonSalutations = PersonData.commonSalutations;
  }
}
