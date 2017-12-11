import { Entity, EntityInterface } from './entity';
import * as Moment from 'moment';
export { Account, AccountInterface };

interface AccountInterface extends EntityInterface {
  email: string;
  password: string;
  name: string;
  birthDate: number;
  address: string;
  level: number;
}

class Account extends Entity {
  /**
  * Unique email address of an acoount owner.
  */
  private email: string;
  /**
  * Password of the account that will be used for authentication purposes.
  */
  private password: string;
  /**
  * Biographical name of the account owner.
  */
  private name: string;
  /**
  * Birth datetime stamp. This is measured in milliseconds since Epoch.
  */
  private birthDate: number;
  /**
  * Geographical location of the account owner.
  */
  private address: string;
  /**
  * Level of access the account has. Can be customer or admin.
  */
  private level: number;

  /**
  * If a generic object is passed, valid properties from the object will be
  assigned.
  */
  constructor (object?: any) {
    super(object);

    this.setEmail('null');
    this.setPassword('null');
    this.setName('null');
    this.setBirthDate(0);
    this.setAddress('null');
    this.setLevel(0);

    if (object) {
      if (object.email)
        this.setEmail(object.email);
      if (object.password)
        this.setPassword(object.password);
      if (object.name)
        this.setName(object.name);
      if (object.birthDate)
        this.setBirthDate(object.birthDate);
      if (object.address)
        this.setAddress(object.address);
      if (object.level)
        this.setLevel(object.level);
    }
  }

  /**
  * Returns a generic object of the instance.
  */
  public toObject () : any {
    let superObject = super.toObject();
    let object: any = {
      email: this.email,
      password: this.password,
      name: this.name,
      birthDate: this.birthDate,
      address: this.address,
      level: this.level
    };
    return {...superObject, ...object};
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
      case 1: return 'customer';
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
