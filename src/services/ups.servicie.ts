import axios from "axios";
import type { UpsDTOP } from "../typings/DTOs";

export default async function loadDataSupplier(productCode: string) {
  const res = await axios.get(
    `http://localhost:3002/pricestock?code=${productCode}`
  );
  const productSupplier = await res.data;

  if (res.statusText === "OK") {
    return (productSupplier as UpsDTOP[]).map((product) => {
      const { price, stock } = product;
      return {
        price,
        stock,
      };
    })[0];
  } else {
    throw new Error(productSupplier);
  }
}
