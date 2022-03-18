import axios from "axios";
import type { TechdataDTOP } from "../typings/DTOs";

export default async function loadDataSupplier(productCode: string) {
  const res = await axios.get(
    `http://localhost:3003/products?codigo_cliente=${productCode}`
  );
  const productSupplier = await res.data;

  if (res.statusText === "OK") {
    console.log(productSupplier, "productSupplier");
    return (productSupplier as TechdataDTOP[]).map((product) => {
      const { precio_final, exists } = product;
      return {
        price: precio_final,
        stock: exists,
      };
    })[0];
  } else {
    throw new Error(productSupplier);
  }
}
