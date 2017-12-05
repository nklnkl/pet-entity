import * as Moment from 'moment';
export { Entity, EntityInterface };

interface EntityInterface {
  id: string;
  created: number;
  updated: number;
}

class Entity {
  private id: string;
  private created: number;
  private updated: number;

  constructor (object?: any) {
    this.setId('null');
    this.setCreated(0);
    this.setUpdated(0);

    if (object) {
      if (object.id)
        this.setId(object.id);
      if (object.created)
        this.setCreated(object.created);
      if (object.updated)
        this.setUpdated(object.updated);
    }
  }

  public toObject () : any {
    let object: any = {
      id: this.id,
      created: this.created,
      updated: this.updated
    };
    return object;
  }

  public getId () : string {
    return this.id;
  }

  public getCreated () : number {
    return this.created;
  }

  public getCreatedString () : string {
    return Moment(this.created).format("dddd, MMMM Do YYYY");
  }

  public getUpdated () : number {
    return this.updated;
  }

  public getUpdatedString () : string {
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
