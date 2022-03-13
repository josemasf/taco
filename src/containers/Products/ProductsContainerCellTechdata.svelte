<script lang="ts">
  import Chip, { Text, Set, LeadingIcon } from "@smui/chips";

  import { Cell } from "@smui/data-table";
  import ProductsTableCellSupplier from "../../components/ProductsTableCellSupplier.svelte";
  import type { Supplier } from "../../typings/types";

  export let supplier: Supplier;
  export let productCode;
  async function loadDataAdimpo() {
    const res = await fetch(
      `http://localhost:3003/products?alterskun=${productCode}`
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
    {#if product}
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
