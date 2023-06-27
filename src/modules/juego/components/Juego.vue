<template>
  <div :style="{ backgroundImage: `url(${respuestaImagen})` }">
    <h1>¿La respuesta es sí o no?</h1>
    <input v-model="respuestaJugador" type="text" placeholder="Ingresa s o n" />
    <button @click="verificarRespuesta">Verificar</button>
    <p>{{ mensaje }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      respuestaJugador: "",
      mensaje: "",
      respuestaImagen: "",
    };
  },

  methods: {
    async verificarRespuesta() {
      if (this.respuestaJugador === "s" || this.respuestaJugador === "n") {
        try {
          const respuesta = await fetch("https://yesno.wtf/api").then((r) =>
            r.json()
          );
          const respuestaReal = respuesta.answer.toLowerCase();
          this.respuestaImagen = respuesta.image;
          console.log(respuesta);

          if (this.respuestaJugador === respuestaReal[0]) {
            this.mensaje = "¡Respuesta correcta!";
          } else {
            this.mensaje = `Respuesta incorrecta. La respuesta era ${respuestaReal}`;
          }
        } catch (error) {
          console.log(error);
          this.mensaje = "Ocurrió un error al obtener la respuesta.";
        }
      } else {
        this.mensaje =
          "Respuesta inválida. Por favor, ingresa s para sí o n para no.";
      }
    },
  },
};
</script>

<style>
div {
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
</style>