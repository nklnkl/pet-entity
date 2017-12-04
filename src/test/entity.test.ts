import 'mocha';
import { assert } from 'chai';
import { Entity } from '../index';

describe('Entity', () => {

  describe('create with no object parameter', () => {

    let entity: Entity = new Entity();

    it('should have default values', () => {
      assert.equal(entity.getId(), 'null');
      assert.equal(entity.getCreated(), 0);
      assert.equal(entity.getUpdated(), 0);
    });

  });

  describe('create with object parameter', () => {

    const object: any = {
      id: 'testId',
      created: 200,
      updated: 250
    };

    const entity: Entity = new Entity(object);

    it('should have object values', () => {
      assert.equal(entity.getId(), object.id);
      assert.equal(entity.getCreated(), object.created);
      assert.equal(entity.getUpdated(), object.updated);
    });

  });

  describe('create with incomplete object parameter', () => {

    const object: any = {
      id: 'testId',
      // missing created
      updated: 250
    };

    const entity: Entity = new Entity(object);

    it('should have object values and default values', () => {
      assert.equal(entity.getId(), object.id);
      assert.equal(entity.getCreated(), 0);
      assert.equal(entity.getUpdated(), object.updated);
    });

  });

  describe('toObject()', () => {

    const object: any = {
      id: 'testId',
      created: 200,
      updated: 250
    };

    const entity: Entity = new Entity(object);

    const object2: any = entity.toObject();

    it('should have object values', () => {
      assert.equal(object2.id, object.id);
      assert.equal(object2.created, object.created);
      assert.equal(object2.updated, object.updated);
    });

  });

});
