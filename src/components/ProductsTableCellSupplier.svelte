<script lang="ts">
  import DataTable, { Head, Row, Cell } from "@smui/data-table";
  import type { Product, Supplier } from "../typings/types";

  export let supplier: Supplier;
  export let product: Product;
</script>

<Cell>
  <DataTable>
    <Head>
      <Row>
        <Cell>
          {supplier.name}
        </Cell>
      </Row>
    </Head>
    <Row>
      <Cell numeric>Stock</Cell><Cell numeric>Price</Cell>
    </Row>
    <Row>
      <Cell>{product.price}</Cell>
      <Cell>{product.stock}</Cell>
    </Row>
  </DataTable>
</Cell>
