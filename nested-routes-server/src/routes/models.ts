export interface Account {
  id: string;
  name: string;
}

/** Net Worth for an account */
export interface NetWorth {
  id: string;
  name: string;
  investmentTotal: number;
  cashBalance: number;
}

export interface Security {
  id: string;
  name: string;
  price: number;
  industryId: string;
}

export interface CashBalance {
  id: string;
  balance: number;
}

export interface Holding {
  id: string;
  symbol: string;
  quantity: number;
  accountId: string;
}

export interface Order {
  id: string;
  side: string;
  symbol: string;
  quantity: number;
  type: string;
  limitPrice: number | null;
  status: string;
  accountId: string;
  createdAt: string;
  createdBy: string;
}
