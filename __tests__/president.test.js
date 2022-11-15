const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const { presidentList } = require('../lib/president-data');

describe('past pet route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/pokemon route returns list', async () => {
    const res = await request(app).get('/presidents');
    const expected = presidentList.map((president) => {
      return { id: president.id, name: president.name, party: president.party };
    });
    expect(res.body).toEqual(expected);
  });
});
afterAll(() => {
  pool.end();
});
