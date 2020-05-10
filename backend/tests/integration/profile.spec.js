const request = require('supertest');
const app = require('../../src/app');

describe('Profile', () => {
  it('should list all cases of the profile', async () => {
    await request(app)
      .get('/profile')
      .set('Authorization', 'e352a772');
    expect(200);
  });
});