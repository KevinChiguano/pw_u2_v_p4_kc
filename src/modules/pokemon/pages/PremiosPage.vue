<template>
  <div class="container">
    <h1 class="title">Premios</h1>
    <div class="prizes-container">
      <div class="prize">
        <img src="../store/medallaUno.png" alt="Premio 1" class="prize-image">
        <p class="prize-name">Premio 1</p>
        <p class="prize-points">Puntos necesarios: 10</p>
      </div>
      <div class="prize">
        <img src="../store/medallaDos.png" alt="Premio 2" class="prize-image">
        <p class="prize-name">Premio 2</p>
        <p class="prize-points">Puntos necesarios: 20</p>
      </div>
      <div class="prize">
        <img src="../store/medallaTres.png" alt="Premio 3" class="prize-image">
        <p class="prize-name">Premio 3</p>
        <p class="prize-points">Puntos necesarios: 30</p>
      </div>
    </div>
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
}

.title {
  font-size: 28px;
  color: #ff0000;
}

.prizes-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

.prize {
  background: wheat;
  width: 200px;
  margin: 20px;
}

.prize-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.prize-name {
  font-size: 18px;
  margin-top: 10px;
}

.prize-points {
  font-size: 14px;
  color: #777777;
  margin-top: 5px;
}
</style>