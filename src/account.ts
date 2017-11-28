import { Entity } from './entity';
export { Account };
class Account extends Entity {
  private email: string;
  private password: string;
  private name: string;
  private birthDate: number;
  private address: string;
  private level: number;

  public getEmail () : string {
    return this.email;
  }
  public getPassword () : string {
    return this.password;
  }
  public getName () : string {
    return this.name;
  }
  //type 0: returns numeric (default), 1  returns string
  public getBirthDate (type?: number) : number | string {
    if (type == 0 || type == undefined)
      return this.birthDate;
    else
      switch(this.birthDate) {
        case 0: return 'user';
        case 1: return 'admin';
        default: return 'error';
      }
  }
  public getAddress () : string {
    return this.address;
  }
  //type 0: returns numeric (default), 1  returns string
  public getLevel (type?: number) : number | string {
    if (type == 0 || type == undefined)
      return this.level;
    else
      switch(this.level) {
        case 0: return 'user';
        case 1: return 'admin';
        default: return 'error';
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
