<script lang="ts">
  import type { Product } from "../typings/types";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";

  import ProductsContainerCellAdimpo from "../containers/Products/ProductsContainerCellAdimpo.svelte";
  import ProductsContainerCellUps from "../containers/Products/ProductsContainerCellUps.svelte";
  import ProductsContainerCellTechdata from "../containers/Products/ProductsContainerCellTechdata.svelte";

  export let items: Product[] = [];

  const suppliers = {
    ADIMPO: ProductsContainerCellAdimpo,
    UPS: ProductsContainerCellUps,
    TechData: ProductsContainerCellTechdata,
  };
</script>

<DataTable table$aria-label="People list" style="width: 100%;">
  <Head>
    <Row>
      <Cell>Skun</Cell>
      <Cell style="max-width: 100%;">Name</Cell>
      <Cell numeric>Stock</Cell>
      <Cell numeric>Price</Cell>
      <Cell />
      <Cell />
      <Cell />
    </Row>
  </Head>
  <Body>
    {#each items as item (item.code)}
      <Row>
        <Cell>{item.code}</Cell>
        <Cell>{item.name}</Cell>
        <Cell numeric>{item.stock}</Cell>
        <Cell numeric>{item.price}</Cell>
        {#if item.supplier}
          {#each item.supplier as supplier (supplier.name)}
            <svelte:component
              this={suppliers[supplier.name]}
              productCode={item.code}
              {supplier}
            />
          {/each}
        {/if}
      </Row>
    {/each}
  </Body>
</DataTable>
