import express from 'express';
import { accountsRouter } from './accountsRouter';

export const rootRouter = express.Router();
rootRouter.use('/accounts', accountsRouter);
