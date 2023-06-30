<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="1" :muestraPokemon="false"/>
  <PokemonOps :opciones="arreglo"/>
  
</template>

<script>

import PokemonImg from '../components/PokemonImg.vue';
import PokemonOps from '../components/PokemonOps.vue';

import obtenerFachadaPokemons from '../helpers/clientePokemonAPI'

export default {

  data() {
    return {
      arreglo: [],
    };
  },

    components:{
        PokemonImg,
        PokemonOps
    },

    methods:{
      async cargaJuegoInicial(){
        const arregloPokemons =  await obtenerFachadaPokemons()
        console.log(arregloPokemons)
        this.arreglo = arregloPokemons
      }
    },

    //no necesita await
    mounted(){
      console.log('Se monto el componente')
      const data = this.cargaJuegoInicial()
      return data
    }
}
</script>

<style>
h1{
  color: black;
}
</style>