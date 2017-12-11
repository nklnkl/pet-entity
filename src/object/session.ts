import { Entity, EntityInterface } from './entity';
export { Session, SessionInterface };

interface SessionInterface extends EntityInterface {
  accountId: string;
}

class Session extends Entity {

  /**
  * References the account that owns the session.
  */
  private accountId : string;

  /**
  * If a generic object is passed, valid properties from the object will be
  assigned.
  */
  constructor (object?: any) {
    super(object);

    this.setAccountId('null');

    if (object) {
      if (object.accountId)
        this.setAccountId(object.userId);
    }
  }

  /**
  * Returns a generic object of the instance.
  */
  public toObject () : any {
    let superObject = super.toObject();
    let object: any = {
      accountId: this.accountId
    };
    return {...superObject, ...object};
  }

  public setAccountId(accountId: string) : string {
    this.accountId = accountId;
    return accountId;
  }
  public getUserId() {
    return this.accountId;
  }
}
