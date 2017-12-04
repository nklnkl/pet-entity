import 'mocha';
import { assert } from 'chai';
import { Account } from '../index';

describe('Account', () => {

  describe('create with no object parameter', () => {

    let account: Account = new Account();

    it('should have default values', () => {
      assert.equal(account.getEmail(), 'null');
      assert.equal(account.getPassword(), 'null');
      assert.equal(account.getName(), 'null');
      assert.equal(account.getBirthDate(), 0);
      assert.equal(account.getAddress(), 'null');
      assert.equal(account.getLevel(), 0);
      assert.equal(account.getId(), 'null');
      assert.equal(account.getCreated(), 0);
      assert.equal(account.getUpdated(), 0);
    });

  });

  describe('create with object parameter', () => {

    const object: any = {
      email: 'user@test.com',
      password: 'passwordTest',
      name: 'nameTest',
      birthDate: 100,
      address: '100 Test Ave',
      level: 1,
      id: 'testId',
      created: 200,
      updated: 250
    };

    const account: Account = new Account(object);

    it('should have object values', () => {
      assert.equal(account.getEmail(), object.email);
      assert.equal(account.getPassword(), object.password);
      assert.equal(account.getName(), object.name);
      assert.equal(account.getBirthDate(), object.birthDate);
      assert.equal(account.getAddress(), object.address);
      assert.equal(account.getLevel(), object.level);
      assert.equal(account.getId(), object.id);
      assert.equal(account.getCreated(), object.created);
      assert.equal(account.getUpdated(), object.updated);
    });

  });

  describe('create with incomplete object parameter', () => {

    const object: any = {
      email: 'user@test.com',
      // missing password
      name: 'nameTest',
      birthDate: 100,
      // missing address
      // missing level
      id: 'testId',
      // missing created
      updated: 250
    };

    const account: Account = new Account(object);

    it('should have object values and default values', () => {
      assert.equal(account.getEmail(), object.email);
      assert.equal(account.getPassword(), 'null');
      assert.equal(account.getName(), object.name);
      assert.equal(account.getBirthDate(), object.birthDate);
      assert.equal(account.getAddress(), 'null');
      assert.equal(account.getLevel(), 0);
      assert.equal(account.getId(), object.id);
      assert.equal(account.getCreated(), 0);
      assert.equal(account.getUpdated(), object.updated);
    });

  });

  describe('toObject()', () => {

    const object: any = {
      email: 'user@test.com',
      password: 'passwordTest',
      name: 'nameTest',
      birthDate: 100,
      address: '100 Test Ave',
      level: 1,
      id: 'testId',
      created: 200,
      updated: 250
    };

    const account: Account = new Account(object);

    const object2: any = account.toObject();

    it('should have object values', () => {
      assert.equal(object2.email, object.email);
      assert.equal(object2.password, object.password);
      assert.equal(object2.name, object.name);
      assert.equal(object2.birthDate, object.birthDate);
      assert.equal(object2.address, object.address);
      assert.equal(object2.level, object.level);
      assert.equal(object2.id, object.id);
      assert.equal(object2.created, object.created);
      assert.equal(object2.updated, object.updated);
    });

  });

});
