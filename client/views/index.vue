<template>
  <!-- <ul>
    <li
      v-for="(listItem, i) in state.todoList"
      :key="`item-${i}`">
      {{ listItem }}
    </li>
  </ul>
  <div>
    <input v-model="item">
    <button @click="addItem">
      Add
    </button>
  </div>
  <p> -->
    <router-link to="/prime">
      Go to PrimeVue page
    </router-link>
    <router-link to="/stats">
      Go to Stats page
    </router-link>
  <!-- </p> -->
</template>

<script>
// export default {
//   inject: ['state'],
//   data: () => ({
//     item: ''
//   }),
//   methods: {
//     async addItem () {
//       this.state.todoList.push(this.item)
//       this.item = ''
//     }
//   }
// }
</script>
