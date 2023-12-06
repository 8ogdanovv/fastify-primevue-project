<template>
  <div class="main-wrapper">
    <nav>
      <menu>
        <li>
          <router-link to="/form">
            <img src="https://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Google-Drive-Forms-icon.png" alt="form">
            /form
          </router-link>
        </li>
        <li>
          <router-link to="/stats">
            <img src="./assets/star-fill.svg" alt="form">
            /stats
          </router-link>
        </li>
        <li>
          <router-link to="/prime">
            <img src="https://www.primefaces.org/wp-content/uploads/2019/12/primevue-logo.png" alt="primevue logo">
            /primevue
          </router-link>
        </li>
        <li>
          <router-link to="/vue">
            <img src="https://vuejs.org/images/logo.png" alt="vue logo">
            /vue
          </router-link>
        </li>
        <li>
          <router-link to="/vite">
            <img src="https://vitejs.dev/logo.svg" alt="vite logo">
            /vite
          </router-link>
        </li>
        <li>
          <router-link to="/fastify">
            <img src="https://www.svgrepo.com/show/306030/fastify.svg" alt="fastify logo">
            /fastify
          </router-link>
        </li>
        <li>
          <router-link to="/cyclic">
            <img src="./assets/cyclic.png" alt="cyclic logo">
            /cyclic
          </router-link>
        </li>

      </menu>
    </nav>

    <!-- <theme-switcher /> -->

    <router-view v-slot="{ Component }">
      <Suspense>
        <component
          :is="Component"
          :key="$route.path"
        />
      </Suspense>
    </router-view>
  </div>
</template>

<script setup>
// import ThemeSwitcher from './views/components/ThemeSwitcher.vue';
</script>

<style>

::selection {
  background-color: #4ac58e79;
  color: #fff;
}

:focus,
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #1e2226, 0 0 0 4px #41b88395, 0 1px 2px 0 black;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100dvw;
  text-align: center;
}

menu {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 7vmax;
  padding: 4rem 0;
}

li a {
  width: 7vmax;
  margin: 0;
}

li img {
  width: 4vmax;
}

li a {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0;
  border: 2px solid transparent;
  transition: all 0.2s;

  font-size: 150%;
}

a {
  cursor: pointer;
}

.router-link-exact-active {
  border-radius: 4px;
  border-color: #41b88395;
  color: #fff;
  backdrop-filter: blur(10px);
  background: radial-gradient(
      135.35% 140.89% at 107.72% -60.35%,
      rgba(65, 184, 131, 0.4) 0%,
      rgba(5, 4, 31, 0) 100%
    ),
    #121116;
}

nav > menu > li > a:not(.router-link-exact-active) {
  color: #bcbcbc;
  text-shadow: 0 0 1px #000;
  filter: blur(1px);
  transform: scale(0.8);
  transition: all 0.5s;
}

iframe {
  width: 100dvw;
  height: calc(100dvh - 7vmax - 5px);
}

</style>
