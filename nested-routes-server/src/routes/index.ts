import express from 'express';
import { accountsRouter } from './accountsRouter';
import { holdingsRouter } from './holdingsRouter';

export const rootRouter = express.Router();
rootRouter.use('/accounts', accountsRouter);
rootRouter.use('/holdings', holdingsRouter);
