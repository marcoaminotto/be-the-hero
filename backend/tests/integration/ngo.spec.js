const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('NGO', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to list all NGOs', async () => {
    await request(app)
      .get('/ngos');
    expect(200);
  });

  it('should be able to create a new NGO', async () => {
    const response = await request(app)
      .post('/ngos')
      .send({
        name: "Teste 2",
        email: "apad@apad.com.br",
        whatsapp: "47486486486",
        city: "Santa Maria",
        uf: "RS",
        country: "Brazil"
      });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});