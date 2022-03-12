<script lang="ts">
  import ProductsTable from "../../components/ProductsTable.svelte";
  import SearchInput from "../../components/SearchInput.svelte";
  import type { Product } from "../../typings/types";

  async function loadData() {
    const res = await fetch(`http://localhost:3000/products`);
    const products = await res.json();

    if (res.ok) {
      allProducts = products;
      productsFiltered = products;
      return products;
    } else {
      throw new Error(products);
    }
  }

  loadData();
  let allProducts: Product[];
  let productsFiltered: Product[];

  function handleMessage(event) {
    const { text } = event.detail;

    productsFiltered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
  }
</script>

<main>
  <SearchInput on:message={handleMessage} />

  <ProductsTable items={productsFiltered} />
</main>
