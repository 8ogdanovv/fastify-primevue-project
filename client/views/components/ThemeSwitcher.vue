<template>
  <div class="themeInvert" @click="toggleTheme" title="invert colors">
    {{ !isInverted ? 'To Light' : 'To Dark' }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

// const selectedTheme = ref('lara-dark-teal'); // Set the default theme here

// const changeTheme = () => {
//   // Dynamically change the theme by updating the href attribute
//   const themeLink = document.querySelector('link[href*="./assets/themes/"]');
//   themeLink.href = `./assets/themes/${selectedTheme.value}/theme.css`;
// };

const isInverted = ref(false);

const toggleTheme = () => {
  isInverted.value = !isInverted.value;
  // Toggle the class on the body
  document.body.classList.toggle('invert', isInverted.value)
  // Toggle main background
  document.querySelector('.main-wrapper').classList.toggle('invert', isInverted.value)
}
</script>

<style>
.themeInvert {
  --button-size: 6vmax;
  position: absolute;
  top: 0;
  right: 0;
  width: calc(var(--button-size) - 1px);
  height: var(--button-size);
  cursor: pointer;
  transition: all 0.5s;
}
.themeInvert:hover {
  animation: rotateAnimation 2s infinite linear; /* Adjust duration and iteration count as needed */
  background-color: black;
}

@keyframes rotateAnimation {
  0% {
    transform: rotate3d(1, 1, 0, 0deg);
  }
  50% {
    transform: rotate3d(1, 1, 0, 180deg);
  }
  100% {
    transform: rotate3d(1, 1, 0, 360deg);
  }
}

.themeInvert::before,
.themeInvert::after {
  content: '';
  position: absolute;
  width: 0;
  border-style: solid;
}

.themeInvert::before {
  top: 0;
  left: 0;
  border-width: var(--button-size) 0 0 var(--button-size); /* Adjust the size of the triangle */
  border-color: #fff transparent transparent transparent; /* Adjust the color of the triangle */
}

.themeInvert::after {
  bottom: 0;
  right: 0;
  border-width: 0 var(--button-size) var(--button-size) 0; /* Adjust the size of the triangle */
  border-color: transparent transparent transparent #fff; /* Adjust the color of the triangle */
}
</style>