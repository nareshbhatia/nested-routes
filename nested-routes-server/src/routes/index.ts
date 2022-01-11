import express from 'express';
import { accountsRouter } from './accountsRouter';
import { holdingsRouter } from './holdingsRouter';
import { nwRouter } from './nwRouter';
import { ordersRouter } from './ordersRouter';

export const rootRouter = express.Router();
rootRouter.use('/accounts', accountsRouter);
rootRouter.use('/holdings', holdingsRouter);
rootRouter.use('/net-worths', nwRouter);
rootRouter.use('/orders', ordersRouter);
