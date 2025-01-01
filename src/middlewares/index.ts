import { NextFunction, Request, RequestHandler, Response } from 'express';

export { horoscopeMiddleware } from './horoscope';

const appMiddleware: RequestHandler = (req: Request, res: Response,next: NextFunction) => {
  if (req.path === '/') {
    res.redirect('/horoscope');
  }
  next();
}

export { appMiddleware };
