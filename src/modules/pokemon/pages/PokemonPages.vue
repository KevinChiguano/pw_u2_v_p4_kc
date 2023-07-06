<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor.....</h1>
  <div v-else>
    <h1>Juego Pokemon</h1>
    <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />
    <PokemonOps
      :opciones="pokemonArr"
      @seleccionado="revisarSeleccion($event)"
    />
    <div>
      <h1 v-if="showPokemon">Ganaste</h1>
      <h1 v-else>Perdiste</h1>
    </div>
  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";

import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";

export default {
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null,
      showPokemon: false,
    };
  },

  components: {
    PokemonImg,
    PokemonOps,
  },

  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const indicePokemon = Math.floor(Math.random() * 4);
      //this.pokemonArr[indicePokemon]
      this.pokemonCorrecto = this.pokemonArr[indicePokemon];
    },

    revisarSeleccion(idSeleccionado) {
      console.log("Evento en el padre");
      console.log(idSeleccionado);
      if (idSeleccionado == this.pokemonCorrecto.id) {
        this.showPokemon = true;
      } else {
        this.showPokemon = false;
      }
    },
  },

  //no necesita await
  mounted() {
    console.log("Se monto el componente");
    const data = this.cargaJuegoInicial();
    //return data
  },
};
</script>

<style>
h1 {
  color: black;
}
</style>