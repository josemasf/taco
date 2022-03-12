<script lang="ts">
  import { Cell } from "@smui/data-table";
  import ProductsTableCellSupplier from "../../components/ProductsTableCellSupplier.svelte";
  import type { Supplier } from "../../typings/types";
  import type { AdimpoDto } from "../../typings/DTOs";

  export let supplier: Supplier;
  export let productCode;
  async function loadDataAdimpo() {
    const res = await fetch(
      `http://localhost:3001/products?alterskun=${productCode}`
    );
    const productSupplier = await res.json();

    if (res.ok) {
      return (productSupplier as AdimpoDto[]).map((product) => {
        const { client_desciption, alter_code, client_price, stock } = product;
        return {
          name: client_desciption,
          code: alter_code,
          price: client_price,
          stock,
        };
      })[0];
    } else {
      throw new Error(productSupplier);
    }
  }

  let promiseAdimpo = loadDataAdimpo();
</script>

<Cell>
  {#await promiseAdimpo}
    <p>...waiting</p>
  {:then product}
    <ProductsTableCellSupplier {supplier} {product} />
  {/await}
</Cell>
