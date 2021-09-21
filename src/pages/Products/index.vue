<template>
  <div class="products">
    <CardList :items="items"/>
  </div>
</template>

<script>
import CardList from "@/components/CardList";

export default {
  name: "Products",
  components: {
    CardList,
  },

  data() {
    return {
      items: [
        {
          image:
            "https://app.ticto.com.br/assets/images/Alternativa%20Monocromia.png?v=3",
          name: "Title",
          beneficits: ["Muito Bom", "Muito Rápido"],
          price: 10,
        },
        {
          image:
            "https://app.ticto.com.br/assets/images/Alternativa%20Monocromia.png?v=3",
          name: "Title",
          beneficits: ["Muito Bom", "Muito Rápido"],
          price: 10,
        },
        {
          image:
            "https://app.ticto.com.br/assets/images/Alternativa%20Monocromia.png?v=3",
          name: "Title",
          beneficits: ["Muito Bom", "Muito Rápido"],
          price: 10,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.products {
  @media (min-width: 1200px) {
    padding: 5rem 7rem;
  }

  @media (min-width: 650px) and (max-width: 1200px) {
    padding: 5rem;
  }

  @media (max-width: 650px) {
    padding: 5rem 1rem;
  }
}
</style>