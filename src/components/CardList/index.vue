<template>
  <div class="cards">
    <Card v-for="(item, key) of items" :key="key" v-bind="item" />
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "CardList",

  components: {
    Card,
  },

  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.cards {
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
  }

  @media (min-width: 740px) and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
  }

  @media (max-width: 740px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
  }
}
</style>