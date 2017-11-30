import {Entity} from './entity';
import * as moment from 'moment';
export { Pet };
class Pet extends Entity {
private name: string;
private birthDate: number;
private breed: number;
private species: number;

public getName() : string {
return this.name;
}
public getBirthDate(type: number = 0) : number | string {
  switch (type){
    // number
    case 0:
      return this.birthDate;
    // string1
    case 1:
      return moment(this.birthDate).format("dddd, MMMM Do YYYY");
    default:
      return this.birthDate;
  }
}
public getBreed() : number {
  return this.breed;
}
public getSpecies() : number {
  return this.species;
}
public getAge(type:number=0) : number {
  switch (type)
  {
    case 0:
      return moment().diff( moment(this.birthDate), "weeks");
    case 1:
      return moment().diff( moment(this.birthDate), "months");
    case 2:
      return moment().diff( moment(this.birthDate), "years");
    default:
    return -1; //error
  }

}
public setName(name: string) : string
{
  this.name = name;
  return this.name;
}
public setBreed(breed: number) : number {
  this.breed = breed;
  return this.breed;
}
//0 for dog 1 for cat
public setSpecies(species: number) : number {
  this.species = species;
  return this.species;
}
public setBirthDate(birthDate:number) : number
{
  this.birthDate = birthDate
  return this.birthDate;
}
}
