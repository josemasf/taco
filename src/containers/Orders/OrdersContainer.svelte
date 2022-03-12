<script>
  import OrdersTable from "../../components/OrdersTable.svelte";

  async function loadData() {
    const res = await fetch(`http://localhost:3000/orders`);
    const text = await res.json();

    if (res.ok) {
      console.log(res);
      return text;
    } else {
      throw new Error(text);
    }
  }

  let promise = loadData();

  function handleClick() {
    promise = loadData();
  }
</script>

<main>
  <button on:click={handleClick}> Get adimpo </button>

  <!-- replace this element -->
  {#await promise then value}
    <OrdersTable items={value} />
  {/await}
</main>
