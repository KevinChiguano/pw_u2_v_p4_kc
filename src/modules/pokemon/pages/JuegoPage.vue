<template>
  <div class="container">
    <h2 class="title">Estas listo para jugar</h2>
    <h2 class="title">Instrucciones para jugar</h2>
    <div class="game-instructions">
      <div class="pokemon-image"></div>
      <div class="text-container">
        <p class="description">¡Bienvenido al juego "¿Quién es este Pokémon?"!</p>
        <p class="description">El objetivo del juego es adivinar qué Pokémon se muestra en la imagen.</p>
        <p class="description">Se te darán cuatro opciones y debes seleccionar la opción correcta.</p>
        <p class="description">1. Si adivinas en el primer intento, obtendrás 5 puntos.</p>
        <p class="description">2. Si adivinas en el segundo intento, obtendrás 2 puntos.</p>
        <p class="description">3. Si adivinas en el tercer intento, obtendrás 1 punto.</p>
        <p class="description">4. Si no adivinas en los tres intentos, perderás el juego.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  display: inline-block;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.title {
  font-size: 32px;
  color: #ff0000;
  margin-bottom: 20px;
}

.game-instructions {
  display: flex;
  align-items: center;
  background-color: #000000;
  border: 2px solid #ff0000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.pokemon-image {
  width: 200px;
  height: 200px;
  background-image: url(../store/pokebola.png);
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-right: 20px;
}

.text-container {
  color: #ffffff;
}

.description {
  font-size: 18px;
  margin-bottom: 10px;
  text-align: justify;
}
</style>