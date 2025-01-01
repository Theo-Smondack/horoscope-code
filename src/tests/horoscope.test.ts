import { getZodiacSign } from '../services';

describe('Horoscope function test', () => {
  it('should return an error', () => {
    const result = getZodiacSign({ month: 13, day: 1 });
    expect(result).toHaveProperty('error');
  });
  it('should return a sign', () => {
    const result = getZodiacSign({ month: 1, day: 1 });
    expect(result).toHaveProperty('sign');
  });
});
