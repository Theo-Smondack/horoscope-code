import express from 'express';
import { getHoroscope } from './controllers';
import { appMiddleware, horoscopeMiddleware } from './middlewares';

const router = express.Router();

//Middlewares
router.use('/horoscope', horoscopeMiddleware);
router.use('/', appMiddleware);

//Routes
router.get('/horoscope', getHoroscope);

export default router;
