<template>
  <div class="not-found">
    <h1>No such a route found...</h1>

    <router-link to="/" class="link">
      Back to home
      <br />
      <br />
      <span id="this">.this</span></router-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  height: calc(100dvh - 7vmax - 5px);
  align-items: center;
  justify-content: flex-start;
  font-size: 200%;
}

.link {
  text-decoration: none;
}

h1 {
  flex-shrink: 1;
  height: 33dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#this {
  font-size: 11dvh;
  line-height: 11dvh;
  font-weight: bolder;
  background: -webkit-linear-gradient(270deg, navy 30%, gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  text-align: center;
  position: relative;
  filter: blur(1px);
  opacity: 0.68;
  left: -6dvh;
}

#this::before{
  position: absolute;
  bottom: 1.5dvh;
  left: -1.5dvh;
  content: '.this';
  font-size: 10dvh;
  line-height: 11.5dvh;
  background: -webkit-linear-gradient(270deg, navy 30%, gold);
  background: -webkit-linear-gradient(270deg, #00008088 30%, #ffd70088);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  text-align: center;
  z-index: -1;
  filter: blur(5px);
  text-shadow: 0 0 1px #000;
}

#this::after {
  position: absolute;
  top: -1dvh;
  left: 1.5dvh;
  content: '.this';
  font-size: 15dvh;
  line-height: 15dvh;
  background: -webkit-linear-gradient(270deg, #000080 30%, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  text-align: center;
  z-index: 1;
  text-shadow: 0 0 1px #fff;
}
</style>