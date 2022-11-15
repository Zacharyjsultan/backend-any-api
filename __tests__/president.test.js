const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const { presidentList } = require('../lib/president-data');

describe('past pet route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/prez route', async () => {
    const res = await request(app).get('/presidents');
    const expected = presidentList.map((president) => {
      return { id: president.id, name: president.name, party: president.party };
    });
    expect(res.body).toEqual(expected);
  });
  it('/president/:id detail route', async () => {
    const res = await request(app).get('/presidents/1');
    const expected = {
      id: '1',
      name: 'George',
      party: 'republican',
      number: 1,
      country: 'US',
    };
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
