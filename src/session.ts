import {Entity} from './entity';
export { Session };

class Session extends Entity {
  private userId : string;

  constructor (json?: string) {
    if (json) {
      super(json);
      let object: any = JSON.parse(json);
      this.setUserId(object.userId);
    }
    else {
      super();
      this.setUserId('null');
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
