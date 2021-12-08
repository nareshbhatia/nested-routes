export interface Account {
  id: string;
  name: string;
}
export interface Security {
  id: string;
  name: string;
  price: number;
  industryId: string;
}

export interface Holding {
  id: string;
  security: Security;
  quantity: number;
  value: number;
}

export interface Order {
  id: string;
  side: string;
  security: Security;
  quantity: number;
  type: string;
  limitPrice: number | null;
  status: string;
  createdAt: string;
  createdBy: string;
}

export const OrderStatusLookup: { [key: string]: string } = {
  NEW: 'New',
  PLACED: 'Placed',
  EXECUTED: 'Executed',
  CANCELED: 'Canceled',
};

export const OrderTypeLookup: { [key in string]: string } = {
  MARKET: 'Market',
  LIMIT: 'Limit',
};

export const SideLookup: { [key in string]: string } = {
  BUY: 'Buy',
  SELL: 'Sell',
};
