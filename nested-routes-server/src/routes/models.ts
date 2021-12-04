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
  limitPrice: number | undefined;
  status: string;
  accountId: string;
  createdAt: string;
  createdBy: string;
}
