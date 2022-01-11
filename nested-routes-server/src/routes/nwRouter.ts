import express from 'express';
import accounts from './data/accounts.json';
import cashBalances from './data/cash-balances.json';
import holdings from './data/holdings.json';
import securities from './data/securities.json';
import { CashBalance, Holding, Security } from './models';

export const nwRouter = express.Router();

const getSecurity = (symbol: string): Security | undefined => {
  return securities.find((security) => security.id === symbol);
};

const getCashBalance = (accountId: string): CashBalance | undefined => {
  return cashBalances.find((cashBalance) => cashBalance.id === accountId);
};

const getAccountHoldings = (accountId: string): Array<Holding> => {
  return holdings.filter((holding) => holding.accountId === accountId);
};

/** get net worth for all accounts */
nwRouter.get('/', (req, res) => {
  const netWorths = accounts.map((account) => {
    const accountId = account.id;
    const cashBalance = getCashBalance(accountId)?.balance;
    const accountHoldings = getAccountHoldings(accountId);
    const investmentTotal = accountHoldings.reduce(
      (accumulator: number, holding: Holding) => {
        const security = getSecurity(holding.symbol);
        return security
          ? accumulator + security.price * holding.quantity
          : accumulator;
      },
      0
    );

    return {
      ...account,
      investmentTotal,
      cashBalance,
    };
  });

  res.send(netWorths);
});
