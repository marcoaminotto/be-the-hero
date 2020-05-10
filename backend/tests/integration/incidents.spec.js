const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incidents', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should list all incidents', async () => {
    await request(app).get('/incidents');
    expect(200);
  });

  it('should create an incident', async () => {
    const response = await request(app)
      .post('/incidents')
      .set('Authorization', 'e352a772')
      .send({
        title: 'Case Test',
        description: 'Description created for this test',
        value: 140
      });
    expect(response.body).toHaveProperty('id');
    expect(200);
  });
});
