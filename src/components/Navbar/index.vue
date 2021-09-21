<template>
  <div class="navbar">
    <div class="logo">    
      <img src="https://www.ticto.com.br/dist/assets/logo-branca.svg" alt="Logotipo Boosthub" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  width: 100%;
  height: 60px;
  background: #1F192D;
  padding: 0 5rem;
  position: fixed; 
}

.logo {
  width: 150px;
  padding: 10px 2rem;
}
</style>