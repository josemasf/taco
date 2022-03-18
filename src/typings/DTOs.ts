export type AdimpoDto = {
  skun_code: string;
  alter_code: string;
  client_price: number;
  stock: number;
  client_desciption: string;
  description: string;
  ean_code: string;
};
export type TechdataDTOP = {
  codigo: string;
  codigo_cliente: string;
  precio_final: number;
  exists: number;
  nombre: string;
};
export type UpsDTOP = {
  price: number;
  stock: number;
};

export type SupplierAvailability = {
  supplier: string;
  price: number;
  stock: number;
};
