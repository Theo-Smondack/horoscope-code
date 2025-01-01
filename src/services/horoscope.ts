import { getZodiacSignArgs, getZodiacSignError, getZodiacSignResponse } from '../types';

const getSign = require('horoscope').getSign;

function getZodiacSign({ month, day }: getZodiacSignArgs): getZodiacSignResponse | getZodiacSignError {
  const sign = getSign({ month, day }, true);
  if (!sign) {
    return { error: 'Invalid birthdate' };
  }
  return { sign };
}

export { getZodiacSign };
