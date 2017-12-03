import { Entity } from './entity';
import { Breeds, Species } from './species';
import * as Moment from 'moment';
export { Pet };

class Pet extends Entity {
  private name: string;
  private birthDate: number;
  private breed: number;
  private species: number;
  private status: number;

  constructor (json?: string) {
    if (json) {
      super(json);
      let object: any = JSON.parse(json);
      this.setName(object.name);
      this.setBirthDate(object.birthDate);
      this.setBreed(object.breed);
      this.setSpecies(object.species);
      this.setStatus(object.status);
    }
    else {
      super();
      this.setName('null');
      this.setBirthDate(0);
      this.setBreed(0);
      this.setSpecies(0);
      this.setStatus(0);
    }
  }

  public getName() : string {
    return this.name;
  }

  public getBirthDate () : number {
    return this.birthDate;
  }

  public getBirthDateString () : string {
    return Moment(this.birthDate).format("dddd, MMMM Do YYYY");
  }

  public getBreed() : number {
    return this.breed;
  }

  public getBreedString () : string {
    return Breeds.getList()[this.species][this.breed];
  }

  public getSpecies() : number {
    return this.species
  }

  public getSpeciesString () : string {
    return Species.getList()[this.species];
  }

  public getStatus () : number {
    return this.status;
  }

  public getStatusString (type: number = 0) : string {
    switch (this.status) {
      case 0: return 'null';
      case 1: return 'available';
      case 2: return 'adopted';
      default: return 'null';
    }
  }

  public getAge(unit: number = 0) : number {
    switch (unit) {
      case 0: return Moment().diff( Moment(this.birthDate), "weeks");
      case 1: return Moment().diff( Moment(this.birthDate), "months");
      case 2: return Moment().diff( Moment(this.birthDate), "years");
      default: return Moment().diff( Moment(this.birthDate), "weeks");
    }
  }

  public setName(name: string) : string {
    this.name = name;
    return this.name;
  }
  public setBreed(breed: number) : number {
    this.breed = breed;
    return this.breed;
  }
  public setSpecies(species: number) : number {
    this.species = species;
    return this.species;
  }
  public setBirthDate(birthDate:number) : number {
    this.birthDate = birthDate
    return this.birthDate;
  }
  public setStatus(status:number) : number {
    this.status = status
    return this.status;
  }
}
