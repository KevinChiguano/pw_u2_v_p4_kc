<template>
  <div class="navigation">
    <router-link to="/" class="nav-link">Bienvenida</router-link>
    <router-link to="/juego" class="nav-link">Juego</router-link>
    <router-link to="/premios" class="nav-link">Premios</router-link>
    <router-link to="/pokemon" class="nav-link">Pokémon</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navigation {
  background-color: #ffcccc; /* Fondo de color rojo suave */
  padding: 10px 30px;
  text-align: center;
}

.nav-link {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}

.nav-link:hover {
  color: #ff0000; /* Cambio de color al pasar el cursor */
}
</style>