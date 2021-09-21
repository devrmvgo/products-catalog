<template>
  <div class="products">
    <div v-if="loading" class="loader"></div>
    <CardList v-else :items="items" />
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
      items: [],
      loading: true,
    };
  },

  async created() {
    const res = await fetch(
      "https://yd3szwgkse.execute-api.us-east-1.amazonaws.com/v1/products"
    ).then((response) => response.json());

    if (res) {
      this.items = res.Items;
      this.loading = false;
    }
  },
};
</script>

<style lang="scss">
.loader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #1f192d; /* Blue */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

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