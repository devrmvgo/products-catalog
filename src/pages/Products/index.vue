<template>
  <div class="products">
    <CardList />
  </div>
</template>

<script>
import CardList from "@/components/CardList";
export default {
  name: "Products",
  components: {
    CardList,
  },
};
</script>

<style>
.products {
  padding: 5rem 7rem;
}
</style>