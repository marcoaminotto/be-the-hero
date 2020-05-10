const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Session', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('it should login into an NGO account', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({ 
        id: "e352a772" 
      });
      expect(response.body).toHaveProperty('name');
      expect(200);

    console.log(response);
  });
});
