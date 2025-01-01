import request from 'supertest';
import app from '../../app';

describe('Horoscope API Test', () => {
  it('should return an 400 error if no birthdate', async () => {
    const response = await request(app).get('/horoscope');
    expect(response.status).toBe(400);
  });
  it('should return 400 an if invalid birthdate', () => {
    const birthdate = '2000-13-01';
    return request(app)
      .get(`/horoscope?birthdate=${birthdate}`)
      .expect(400);
  });
  it('should return 405 if method is not get ', () => {
    return request(app)
      .post('/horoscope')
      .expect(405);
  });
  it('should return an horoscope', async () => {
    const birthdate = '2000-01-01';
    const response = await request(app)
      .get(`/horoscope?birthdate=${birthdate}`)
      .expect(200).type('json');
    expect(response.body).toHaveProperty('sign');
  });
})
