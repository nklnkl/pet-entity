import * as Moment from 'moment';
export { Entity };
class Entity {
  private id: string;
  private created: number;
  private updated: number;

  constructor (json?: string) {
    if (json) {
      let object: any = JSON.parse(json);
      this.setId(object.id);
      this.setCreated(object.created);
      this.setUpdated(object.updated);
    }
    else {
      this.setId('null');
      this.setCreated(0);
      this.setUpdated(0);
    }
  }

  public getId () : string {
    return this.id;
  }

  //type 0: returns numeric (default), 1  returns string
  public getCreated (type?: number) : number | string {
    switch(type) {
      case 0: return this.created;
      case 1: return Moment(this.created).format("dddd, MMMM Do YYYY");
      default: return this.created;
    }
  }

  //type 0: returns numeric (default), 1  returns string
  public getUpdated (type?: number) : number | string {
    switch(type) {
      case 0: return this.updated;
      case 1: return Moment(this.updated).format("dddd, MMMM Do YYYY");
      default: return this.updated;
    }
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
