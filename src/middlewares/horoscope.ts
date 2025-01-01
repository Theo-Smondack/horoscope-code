import { NextFunction, Request, RequestHandler, Response } from 'express';

export const horoscopeMiddleware: RequestHandler = (req: Request, res: Response,next: NextFunction) => {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
  }
  next();
};
