<script lang="ts">
  import Chip, { Text, Set, LeadingIcon } from "@smui/chips";

  import { Cell } from "@smui/data-table";
  import ProductsTableCellSupplier from "../../components/ProductsTableCellSupplier.svelte";
  import type { TechdataDTOP } from "../../typings/DTOs";
  import type { Product, Supplier } from "../../typings/types";

  export let supplier: Supplier;
  export let product: Product;
  async function loadDataSupplier() {
    const res = await fetch(
      `http://localhost:3003/products?codigo_cliente=${product.code}`
    );
    const productSupplier = await res.json();

    if (res.ok) {
      return (productSupplier as TechdataDTOP[]).map((product) => {
        const { nombre, codigo_cliente, precio_final, exists } = product;
        return {
          name: nombre,
          code: codigo_cliente,
          price: precio_final,
          stock: exists,
        };
      })[0];
    } else {
      throw new Error(productSupplier);
    }
  }

  let promise = loadDataSupplier();
</script>

<Cell>
  {#await promise}
    <p>...waiting</p>
  {:then productSupplier}
    {#if productSupplier}
      <ProductsTableCellSupplier {supplier} {product} />
    {:else}
      <Set chips={["discontinued"]} let:chip nonInteractive>
        <Chip {chip}>
          <LeadingIcon class="material-icons">remove_shopping_cart</LeadingIcon>
          <Text>{chip}</Text>
        </Chip>
      </Set>
    {/if}
  {/await}
</Cell>
