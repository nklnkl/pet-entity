import {Entity} from './entity';

export { Session };
class Session extends Entity {
private userId : string
public setUserId(userId: string) : string
{
  this.userId = userId;
  return userId;
}
public getUserId()
{
  return this.userId;
}
}
