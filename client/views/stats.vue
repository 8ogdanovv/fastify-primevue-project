<template>
  <ul>
    <li
      v-for="(feedback, i) in state.feedbacks"
      :key="`feedback-${i}`">
      {{ feedback }}
    </li>
  </ul>
</template>

<script setup>
import { inject } from 'vue'
const state = inject('state');
</script>