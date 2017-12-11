import 'mocha';
import { assert } from 'chai';
import { Session } from '../index';

describe('Session', () => {

  describe('create with no object parameter', () => {

    let session: Session = new Session();

    it('should have default values', () => {
      assert.equal(session.getAccountId(), 'null');
      assert.equal(session.getId(), 'null');
      assert.equal(session.getCreated(), 0);
      assert.equal(session.getUpdated(), 0);
    });

  });

  describe('create with object parameter', () => {

    const object: any = {
      accountId: 'testUserId',
      id: 'testId',
      created: 200,
      updated: 250
    };

    const session: Session = new Session(object);

    it('should have object values', () => {
      assert.equal(session.getAccountId(), object.accountId);
      assert.equal(session.getId(), object.id);
      assert.equal(session.getCreated(), object.created);
      assert.equal(session.getUpdated(), object.updated);
    });

  });

  describe('create with incomplete object parameter', () => {

    const object: any = {
      accountId: 'testUserId',
      id: 'testId',
      // missing created
      updated: 250
    };

    const session: Session = new Session(object);

    it('should have object values and default values', () => {
      assert.equal(session.getAccountId(), object.accountId);
      assert.equal(session.getId(), object.id);
      assert.equal(session.getCreated(), 0);
      assert.equal(session.getUpdated(), object.updated);
    });

  });

  describe('toObject()', () => {

    const object: any = {
      accountId: 'testUserId',
      id: 'testId',
      created: 200,
      updated: 250
    };

    const session: Session = new Session(object);

    const object2: any = session.toObject();

    it('should have object values', () => {
      assert.equal(object2.accountId, object.accountId);
      assert.equal(object2.id, object.id);
      assert.equal(object2.created, object.created);
      assert.equal(object2.updated, object.updated);
    });

  });

});
