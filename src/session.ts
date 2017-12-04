import {Entity} from './entity';
export { Session };

class Session extends Entity {
  private userId : string;

  constructor (object?: any) {
    super();
    this.setUserId('null');
    
    if (object) {
      super(object);
      this.setUserId(object.userId);
    }
  }

  public setUserId(userId: string) : string {
    this.userId = userId;
    return userId;
  }
  public getUserId() {
    return this.userId;
  }
}
