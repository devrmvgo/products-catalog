<template>
  <div class="card">
    <div class="photo"><img :src="image" /></div>

    <div class="content">
      <h2>{{ name }}</h2>

      <span class="info">
        Esse produto conta com benefícios que te darão um diferencial
      </span>

      <h3>Benefícios:</h3>
      <ul>
        <li v-for="(beneficit, key) of beneficits" :key="key">
          {{ beneficit }}
        </li>
      </ul>

      <div class="price">
        <label>Por apenas:</label> <span><label>R$</label>23.55</span>
      </div>
    </div>

    <hr role="separator" aria-orientation="horizontal" />

    <div class="actions">
      <button class="button-buy">Comprar</button>
      <span class="action-detail">Adicionar ao carrinho >></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    beneficits: {
      type: Array,
    },
    price: {
      type: Number,
    },
  },
};
</script>

<style lang="scss">
.card {
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  transition: box-shadow 0.8s;
  color: rgba(0, 0, 0, 0.6);

  .photo {
    img {
      display: block;
      margin: 2rem auto 0;
    }
  }

  .content {
    padding: 1rem 2rem;
    margin: 0.5rem 0;

    h2 {
      color: #151020;
    }
    h3 {
      color: #df7b02;
    }

    .info {
      font-size: 1rem !important;
    }

    ul {
      list-style: none;

      li {
        padding-left: 1em;
        text-indent: -0.7em;
      }
      li::before {
        content: "• ";
        color: #df7b02;
      }
    }

    .price {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: #df7b02;
        font-size: 2rem;

        label {
          color: rgb(0, 0, 0);
          font-size: 1rem;
        }
      }
    }
  }

  hr {
    border-top: 0;
    border-color: rgba(0, 0, 0, 0.12);
    margin: 0 2rem 1rem;
  }

  .actions {
    padding: 0 2rem 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .button-buy {
      background: #1f192d;
      color: #fff;
      padding: 10px 2rem;
      border: 0;
      font-size: 1rem;
      font-weight: bold;
    }

    .action-detail {
      float: right;
      padding: 0 1rem;
      color: #1f192d;
    }

    .button-buy:hover,
    .action-detail:hover {
      cursor: pointer;
    }
  }
}

.card:hover {
  box-shadow: 0 0 11px #1f192d;
}
</style>