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
  limitPrice: number | undefined;
  status: string;
  createdAt: string;
  createdBy: string;
}
