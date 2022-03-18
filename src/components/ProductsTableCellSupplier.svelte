<script lang="ts">
  import DataTable, { Head, Row, Cell } from "@smui/data-table";
  import type { SupplierAvailability } from "../typings/DTOs";

  export let product: SupplierAvailability;
</script>

<Cell>
  <DataTable>
    <Head>
      <Row>
        <Cell>
          {product.supplier}
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
