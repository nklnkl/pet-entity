import * as Moment from 'moment';

class Entity {
  private id: string;
  private created: number;
  private updated: number;

  public getId () : string {
    return this.id;
  }

  /*
    type
    0: returns numeric (default)
    1  returns string
  */
  public getCreated (type?: number) : number | string {
    if (type == 0 || type == undefined)
      return this.created;
    else
      return Moment(this.created).format("dddd, MMMM Do YYYY");
  }

  /*
    type
    0: returns numeric (default)
    1  returns string
  */
  public getUpdated (type?: number) : number | string {
    if (type == 0 || type == undefined)
      return this.updated;
    else
      return Moment(this.updated).format("dddd, MMMM Do YYYY");
  }

  public setId (id: string) : string {
    this.id = id;
    return this.id;
  }
  public setCreated (created: number) : number {
    this.created = created;
    return this.created;
  }
  public setUpdated (updated: number) : number {
    this.updated = updated;
    return this.updated;
  }
}
