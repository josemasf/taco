import axios from "axios";
import type { AdimpoDto } from "../typings/DTOs";

export default async function loadDataSupplier(productCode: string) {
  const res = await axios.get(
    `http://localhost:3001/products?alterskun=${productCode}`
  );
  const productSupplier = await res.data;

  if (res.statusText === "OK") {
    return (productSupplier as AdimpoDto[]).map((product) => {
      const { client_price, stock } = product;
      return {
        price: client_price,
        stock,
      };
    })[0];
  } else {
    throw new Error(productSupplier);
  }
}
