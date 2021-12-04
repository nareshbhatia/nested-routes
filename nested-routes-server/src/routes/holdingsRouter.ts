import express from 'express';
import holdings from './data/holdings.json';
import securities from './data/securities.json';
import { Holding, Security } from './models';

export const holdingsRouter = express.Router();

/** get holdings */
holdingsRouter.get('/', (req, res) => {
  const accountId = req.query.accountId;
  if (typeof accountId !== 'string') {
    res.sendStatus(400);
    return;
  }

  const accountHoldings = getAccountHoldings(accountId);

  const holdings = accountHoldings.map((holding) => {
    const { accountId, symbol, ...holdingFields } = holding;
    const security = getSecurity(symbol);
    return security
      ? {
          ...holdingFields,
          value: security.price * holding.quantity,
          security: {
            id: security.id,
            name: security.name,
            price: security.price,
          },
        }
      : { ...holdingFields };
  });
  res.send(holdings);
});

const getSecurity = (symbol: string): Security | undefined => {
  return securities.find((security) => security.id === symbol);
};

function getAccountHoldings(accountId: string): Array<Holding> {
  return holdings.filter((holding) => holding.accountId === accountId);
}
