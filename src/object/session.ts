import { Entity, EntityInterface } from './entity';
export { Session, SessionInterface };

interface SessionInterface extends EntityInterface {
  userId: string;
}

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
