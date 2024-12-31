import request from 'supertest';
import express, { Request, Response } from 'express';

const app = express(); // Properly define the application

// Define the route in a way that aligns with Express typings
app.get('/test', (req: Request, res: Response) => {
  res.send('Test route');
});

describe('Example Test', () => {
  it('should return status 200 and a response message', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(200); // Assert correct status code
    expect(response.text).toBe('Test route'); // Assert correct response message
  });
});
