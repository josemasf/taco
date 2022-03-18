<script lang="ts">
  import type { Product } from "../typings/types";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";

  import ProductsContainerCellSupplier from "../containers/Products/ProductsContainerCellSupplier.svelte";

  export let items: Product[] = [];
</script>

<DataTable table$aria-label="People list" style="width: 100%;">
  <Head>
    <Row>
      <Cell>Skun</Cell>
      <Cell style="max-width: 100%;">Name</Cell>
      <Cell numeric>Stock</Cell>
      <Cell numeric>Price</Cell>
    </Row>
  </Head>
  <Body>
    {#each items as product (product.code)}
      <Row>
        <Cell>{product.code}</Cell>
        <Cell>{product.name}</Cell>
        <Cell numeric>{product.stock}</Cell>
        <Cell numeric>{product.price}</Cell>
        {#if product.supplier}
          <ProductsContainerCellSupplier {product} />
        {/if}
      </Row>
    {/each}
  </Body>
</DataTable>
