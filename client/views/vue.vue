<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="root">
    <div class="body">
      <div id="app">
        <header>
          <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />

          <div class="wrapper">
            <HelloWorld msg="You did it!" />
          </div>
        </header>

        <main>
          <TheWelcome />
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/vue-main.css');
@import url('../assets/vue-base.css');

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (orientation: landscape) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

@media (orientation: portrait) {
  header, .wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    place-items: center;
  }
}
</style>
