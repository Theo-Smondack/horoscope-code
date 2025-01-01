import { Request, RequestHandler, Response } from 'express';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { getZodiacSign } from '../services';

dayjs.extend(customParseFormat);

export const getHoroscope: RequestHandler = (req: Request, res: Response) => {
  if (req.query?.birthdate === undefined) {
    res.status(400).json({ error: 'Birthdate is required' });
    return;
  }
  const birthdate = req.query.birthdate as string;
  const date = dayjs(birthdate, 'YYYY-MM-DD', true);
  if (!date.isValid()) {
    res.status(400).json({ error: 'Invalid birthdate' });
    return;
  }

  const horoscope = getZodiacSign({
    month: date.month()+1,
    day: date.date(),
  });

  if ('error' in horoscope) {
    res.status(400).json(horoscope);
    return;
  }

  res.status(200).json(horoscope);
};
