const request = require('supertest');
const app = require('../index');

test('GET / should return CI/CD Test Working!', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('CI/CD Test Working!');
});
