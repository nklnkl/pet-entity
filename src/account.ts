import { Entity } from './entity';
import * as Moment from 'moment';
export { Account };

class Account extends Entity {
  private email: string;
  private password: string;
  private name: string;
  private birthDate: number;
  private address: string;
  private level: number;

  constructor (json?: string) {
    if (json) {
      super(json);
      let object: any = JSON.parse(json);
      this.setEmail(object.email);
      this.setPassword(object.password);
      this.setName(object.name);
      this.setBirthDate(object.birthDate);
      this.setAddress(object.address);
      this.setLevel(object.level);
    }
    else {
      super();
      this.setEmail('null');
      this.setPassword('null');
      this.setName('null');
      this.setBirthDate(0);
      this.setAddress('null');
      this.setLevel(0);
    }
  }

  public getEmail () : string {
    return this.email;
  }
  
  public getPassword () : string {
    return this.password;
  }

  public getName () : string {
    return this.name;
  }

  public getBirthDate () : number {
    return this.birthDate;
  }

  public getBirthDateString () : string {
    return Moment(this.birthDate).format("dddd, MMMM Do YYYY");
  }

  public getAddress () : string {
    return this.address;
  }

  public getLevel () : number {
    return this.level;
  }

  public getLevelString () : string {
    switch(this.level) {
      case 0: return 'null';
      case 1: return 'user';
      case 2: return 'admin';
      default: return 'null';
    }
  }

  public setEmail (email: string) : string {
    this.email = email;
    return this.email;
  }
  public setPassword (password: string) : string {
    this.password = password;
    return this.password;
  }
  public setName (name: string) : string {
    this.name = name;
    return this.name;
  }
  public setBirthDate (birthDate: number) : number {
    this.birthDate = birthDate;
    return this.birthDate;
  }
  public setAddress (address: string) : string {
    this.address = address;
    return this.address;
  }
  public setLevel (level: number) : number {
    this.level = level;
    return this.level;
  }
}
