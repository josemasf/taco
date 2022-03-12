<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";

  type OrderClient = {
    codigo: string;
    nombre: string;
  };

  type OrderLine = {
    codigo: string;
    cantidad: number;
  };

  type Order = {
    client: OrderClient;
    items: OrderLine[];
  };
  export let items: Order[] = [];
</script>

<DataTable table$aria-label="People list" style="width: 100%;">
  <Head>
    <Row>
      <Cell>User code</Cell>
      <Cell>Name</Cell>
      <Cell numeric>Lines` Numbers</Cell>
    </Row>
  </Head>
  <Body>
    {#each items as order, i}
      <Row>
        <Cell>{order.client.codigo}</Cell>
        <Cell>{order.client.nombre}</Cell>
        <Cell numeric>{order.items.length}</Cell>
      </Row>
    {/each}
  </Body>
</DataTable>
