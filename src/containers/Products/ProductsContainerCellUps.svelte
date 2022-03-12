<script lang="ts">
  import { Cell } from "@smui/data-table";
  import ProductsTableCellSupplier from "../../components/ProductsTableCellSupplier.svelte";
  import type { Supplier } from "../../typings/types";

  export let supplier: Supplier;
  export let productCode;
  async function loadDataAdimpo() {
    const res = await fetch(
      `http://localhost:3002/products?alterskun=${productCode}`
    );
    const product = await res.json();

    if (res.ok) {
      return product[0];
    } else {
      throw new Error(product);
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
