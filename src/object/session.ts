import {Entity} from './entity';
export { Session };

class Session extends Entity {
  private userId : string;

  constructor (object?: any) {
    super(object);

    this.setUserId('null');

    if (object) {
      if (object.userId)
        this.setUserId(object.userId);
    }
  }

  public toObject () : any {
    let superObject = super.toObject();
    let object: any = {
      userId: this.userId
    };
    return {...superObject, ...object};
  }

  public setUserId(userId: string) : string {
    this.userId = userId;
    return userId;
  }
  public getUserId() {
    return this.userId;
  }
}
