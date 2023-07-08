<template>
  <div class="container">
    <h1 class="title">Bienvenido al juego que te hará millonario</h1>
    <p class="description">¡Atrapa a todos los Pokémon y conviértete en el mejor entrenador!</p>
    <img src="../store/fondopokemon.png" alt="Pokémon" class="pokemon-image-fondo">
    <img src="../store/pokebola.png" alt="Pokémon" class="pokemon-image">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  text-align: center;
  margin-top: 50px;
  background-color: #FFCB05; /* Color de fondo amarillo */
  padding: 20px;
}

.title {
  font-size: 28px;
  color: #ff0000;
  margin-top: 0;
  margin-bottom: 10px;
}

.description {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 20px;
  color: white;
}

.pokemon-image {
  max-width: 300px;
  height: 250px;
  margin: 0 auto;
  display: block;
  margin-top: 10px;
}

.pokemon-image-fondo{
  width: auto;
  height: 300px;
}
</style>