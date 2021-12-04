import express from 'express';
import orders from './data/orders.json';
import securities from './data/securities.json';
import { Order, Security } from './models';

export const ordersRouter = express.Router();

/** get orders */
ordersRouter.get('/', (req, res) => {
  const { accountId } = req.query;
  if (typeof accountId !== 'string') {
    res.sendStatus(400);
    return;
  }

  const accountOrders = getAccountOrders(accountId);
  const orders = accountOrders.map((order) => serialize(order));
  res.send(orders);
});

/** get order */
ordersRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  if (typeof id !== 'string') {
    res.sendStatus(400);
    return;
  }

  const order = (orders as Array<Order>).find((order) => order.id === id);
  if (order === undefined) {
    res.sendStatus(404);
    return;
  }

  res.send(serialize(order));
});

// ----- Helper functions -----
const getSecurity = (symbol: string): Security | undefined => {
  return securities.find((security) => security.id === symbol);
};

function getAccountOrders(accountId: string): Array<Order> {
  return (orders as Array<Order>).filter(
    (order) => order.accountId === accountId
  );
}

function serialize(order: Order) {
  const { accountId, symbol, ...orderFields } = order;
  const security = getSecurity(symbol);
  return security
    ? {
        ...orderFields,
        security: {
          id: security.id,
          name: security.name,
          price: security.price,
        },
      }
    : { ...orderFields };
}
