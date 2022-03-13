<script lang="ts">
  import { Cell } from "@smui/data-table";
  import ProductsTableCellSupplier from "../../components/ProductsTableCellSupplier.svelte";
  import type { Product, Supplier } from "../../typings/types";
  import type { UpsDTOP } from "../../typings/DTOs";

  export let supplier: Supplier;
  export let product: Product;
  async function loadDataSupplier() {
    const res = await fetch(
      `http://localhost:3002/pricestock?code=${product.code}`
    );
    const productSupplier = await res.json();

    if (res.ok) {
      return (productSupplier as UpsDTOP[]).map((productRes) => {
        const { price, stock } = productRes;
        return {
          name: product.name,
          code: product.code,
          price,
          stock,
        };
      })[0];
    } else {
      throw new Error(productSupplier);
    }
  }

  let promiseAdimpo = loadDataSupplier();
</script>

<Cell>
  {#await promiseAdimpo}
    <p>...waiting</p>
  {:then product}
    <ProductsTableCellSupplier {supplier} {product} />
  {/await}
</Cell>
