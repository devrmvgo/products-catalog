<template>
  <div class="cards">
    <Card />
    <Card />
    <Card />
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "CardList",
  components: {
    Card,
  },
};
</script>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
}
</style>