import request from 'supertest';
import app from '../../app';

describe('App API', () => {
  it('should redirect to "/horoscope"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(302);
    expect(response.header.location).toBe('/horoscope');
  });
});
