import 'mocha';
import { assert } from 'chai';
import { Pet } from '../index';

describe('Pet', () => {

  describe('create with no object parameter', () => {

    let pet: Pet = new Pet();

    it('should have default values', () => {
      assert.equal(pet.getName(), 'null');
      assert.equal(pet.getBirthDate(), 0);
      assert.equal(pet.getBreed(), 0);
      assert.equal(pet.getSpecies(), 0);
      assert.equal(pet.getStatus(), 0);
      assert.equal(pet.getId(), 'null');
      assert.equal(pet.getCreated(), 0);
      assert.equal(pet.getUpdated(), 0);
    });

  });

  describe('create with object parameter', () => {

    const object: any = {
      name: 'nameTest',
      birthDate: 200,
      breed: 1,
      species: 1,
      status: 1,
      id: 'testId',
      created: 200,
      updated: 250
    };

    const pet: Pet = new Pet(object);

    it('should have object values', () => {
      assert.equal(pet.getName(), object.name);
      assert.equal(pet.getBirthDate(), object.birthDate);
      assert.equal(pet.getBreed(), object.breed);
      assert.equal(pet.getSpecies(), object.species);
      assert.equal(pet.getStatus(), object.status);
      assert.equal(pet.getId(), object.id);
      assert.equal(pet.getCreated(), object.created);
      assert.equal(pet.getUpdated(), object.updated);
    });

  });

  describe('create with incomplete object parameter', () => {

    const object: any = {
      name: 'nameTest',
      // missing birthDate
      breed: 1,
      species: 1,
      // missing status
      id: 'testId',
      // missing created
      updated: 250
    };

    const pet: Pet = new Pet(object);

    it('should have object values and default values', () => {
      assert.equal(pet.getName(), object.name);
      assert.equal(pet.getBirthDate(), 0);
      assert.equal(pet.getBreed(), object.breed);
      assert.equal(pet.getSpecies(), object.species);
      assert.equal(pet.getStatus(), 0);
      assert.equal(pet.getId(), object.id);
      assert.equal(pet.getCreated(), 0);
      assert.equal(pet.getUpdated(), object.updated);
    });

  });

  describe('toObject()', () => {

    const object: any = {
      name: 'nameTest',
      birthDate: 300,
      breed: 1,
      species: 1,
      status: 1,
      id: 'testId',
      created: 200,
      updated: 250
    };

    const pet: Pet = new Pet(object);

    const object2: any = pet.toObject();

    it('should have object values', () => {
      assert.equal(object2.name, object.name);
      assert.equal(object2.birthDate, object.birthDate);
      assert.equal(object2.breed, object.breed);
      assert.equal(object2.species, object.species);
      assert.equal(object2.status, object.status);
      assert.equal(object2.id, object.id);
      assert.equal(object2.created, object.created);
      assert.equal(object2.updated, object.updated);
    });

  });

  describe('getBreedString(), getSpeciesString()', () => {

    const pet: Pet = new Pet();
    pet.setSpecies(1);
    pet.setBreed(1);

    it('should return cat as species & abyssinian as breed', () => {
      assert.equal(pet.getSpeciesString(), 'cat');
      assert.equal(pet.getBreedString(), 'abyssinian');
    })
  })

});
