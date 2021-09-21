<template>
  <div class="card">
    <div class="photo">
      <img
        src="https://app.ticto.com.br/assets/images/Alternativa%20Monocromia.png?v=3"
      />
    </div>
    <div class="content">
      <h2>Title</h2>

      <span class="info"
        >Esse produto conta com benefícios que te darão um diferencial</span
      >

      <h3>Beneficios:</h3>
      <ul>
        <li>muito bom</li>
        <li>muito bom</li>
      </ul>

      Por apenas: <span class="price">23.55</span>
    </div>

    <div class="actions">
      <hr role="separator" aria-orientation="horizontal" />
      <button class="button-buy">comprar</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  transition: transform 0.6s;

  h2 {
    color: #151020;
  }
  h3 {
    color: #df7b02;
  }

  .photo {
    img {
      display: block;
      margin: 2rem auto 1rem;
    }
  }

  .content {
    padding: 1rem 3rem;

    .info {
      color: rgba(0, 0, 0, 0.6);
      font-size: 1rem !important;
    }

    .price {
    color: #df7b02;
      font-size: 2rem !important;
    }
  }

  .actions {
    hr {
      border-top: 0;
      border-color: rgba(0, 0, 0, 0.12);
      margin: 0 0.5rem 1rem;
    }
    padding: 0 3rem 1rem;

    .button-buy {
      background: #734d72;
      color: #fff;
      padding: 10px 2rem;
      border: 0;
    }
  }
}

.card:hover {
  transform: rotateY(20deg);
}
</style>