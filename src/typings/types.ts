export type Product = {
  code: string;
  name: string;
  price: number;
  stock: number;
  supplier?: Supplier[];
};

export type Supplier = {
  name: string;
};
