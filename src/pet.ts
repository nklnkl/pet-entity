import { Entity } from './entity';
import { Breeds, Species } from './species';
import * as Moment from 'moment';
export { Pet };

class Pet extends Entity {
  private name: string;
  private birthDate: number;
  private breed: number;
  private species: number;

  constructor (json?: string) {
    if (json) {
      super(json);
      let object: any = JSON.parse(json);
      this.setName(object.name);
      this.setBirthDate(object.birthDate);
      this.setBreed(object.breed);
      this.setSpecies(object.species);
    }
    else {
      super();
      this.setName('null');
      this.setBirthDate(0);
      this.setBreed(0);
      this.setSpecies(0);
    }
  }

  public getName() : string {
    return this.name;
  }
  public getBirthDate(type: number = 0) : number|string {
    switch (type){
      case 0: return this.birthDate;
      case 1: return Moment(this.birthDate).format("dddd, MMMM Do YYYY");
      default: return this.birthDate;
    }
  }
  public getBreed(type: number = 0) : number|string {
    switch(type) {
      case 0: return this.breed;
      case 1: return Breeds.getList()[this.species][this.breed];
      default: return this.breed;
    }
  }
  public getSpecies(type: number = 0) : number|string {
    switch(type) {
      case 0: return this.species;
      case 1: return Species.getList()[this.species];
      default: return this.species;
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
}
