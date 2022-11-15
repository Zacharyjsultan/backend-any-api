const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const { pets } = require('../lib/pets-data');

describe('past pet route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/pets should return list of pastpet', async () => {
    const res = await request(app).get('/pets');
    const expected = pets.map((pet) => {
      return { id: pet.id, name: pet.name };
    });
    expect(res.body).toEqual(expected);
  });
});
afterAll(() => {
  pool.end();
});
