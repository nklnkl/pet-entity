class Entity {
  private id: string;
  private created: number;
  private updated: number;

  public getId () : string {
    return this.id;
  }
  public getCreated () : number {
    return this.created;
  }
  public getUpdated () : number {
    return this.updated;
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
