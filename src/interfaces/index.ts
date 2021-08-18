export interface Product {
  id: string;
  name: string;
  price: number;
  department: string;
  currency?: string;
}

export interface Columns {
  id: boolean;
  name: boolean;
  department: boolean;
  currency: boolean;
  price: boolean;
}
