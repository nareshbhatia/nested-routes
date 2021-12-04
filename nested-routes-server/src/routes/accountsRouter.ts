import express from 'express';
import accounts from './data/accounts.json';

export const accountsRouter = express.Router();

/** get accounts */
accountsRouter.get('/', (req, res) => {
  res.send(accounts);
});
