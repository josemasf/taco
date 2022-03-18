<script lang="ts">
  import { Cell } from "@smui/data-table";
  import ProductsTableCellSupplier from "../../components/ProductsTableCellSupplier.svelte";
  import type { Product } from "../../typings/types";
  import type { SupplierAvailability } from "../../typings/DTOs";

  export let product: Product;
  async function loadDataSuppliers() {
    const res = await fetch(`api/products/${product.code}`);
    const productRes = await res.json();
    const productSupplier = productRes.data;

    if (res.ok) {
      return (productSupplier as SupplierAvailability[]).map((product) => {
        const { supplier, stock, price } = product;
        return {
          supplier,
          price,
          stock,
        };
      });
    } else {
      throw new Error(productSupplier);
    }
  }

  let promise = loadDataSuppliers();
</script>

<Cell>
  {#await promise}
    <p>...waiting</p>
  {:then products}
    {#each products as product}
      <ProductsTableCellSupplier {product} />
    {/each}
  {/await}
</Cell>
