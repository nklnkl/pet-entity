import { Entity, EntityInterface } from './entity';
import { Breeds, Species } from './species';
import * as Moment from 'moment';
export { Pet, PetInterface };

interface PetInterface extends EntityInterface {
  name: string;
  birthDate: number;
  breed: number;
  species: number;
  status: number;
}

class Pet extends Entity {
  /**
  * Name of the pet.
  */
  private name: string;
  /**
  * Birth datetime stamp. This is measured in milliseconds since Epoch.
  */
  private birthDate: number;
  /**
  * Breed of the pet. See Species class.
  */
  private breed: number;
  /**
  * Species of the pet. See Species class.
  */
  private species: number;
  /**
  * Status of the pet.
  */
  private status: number;

  /**
  * If a generic object is passed, valid properties from the object will be
  assigned.
  */
  constructor (object?: any) {
    super(object);

    this.setName('null');
    this.setBirthDate(0);
    this.setBreed(0);
    this.setSpecies(0);
    this.setStatus(0);

    if (object) {
      if(object.name)
        this.setName(object.name);
      if(object.birthDate)
        this.setBirthDate(object.birthDate);
      if(object.breed)
        this.setBreed(object.breed);
      if(object.species)
        this.setSpecies(object.species);
      if(object.status)
        this.setStatus(object.status);
    }
  }

  /**
  * Returns a generic object of the instance.
  */
  public toObject () : any {
    let superObject = super.toObject();
    let object: any = {
      name: this.name,
      birthDate: this.birthDate,
      breed: this.breed,
      species: this.species,
      status: this.status
    };
    return {...superObject, ...object};
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
