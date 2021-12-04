import express from 'express';
import { accountsRouter } from './accountsRouter';
import { holdingsRouter } from './holdingsRouter';
import { ordersRouter } from './ordersRouter';

export const rootRouter = express.Router();
rootRouter.use('/accounts', accountsRouter);
rootRouter.use('/holdings', holdingsRouter);
rootRouter.use('/orders', ordersRouter);
