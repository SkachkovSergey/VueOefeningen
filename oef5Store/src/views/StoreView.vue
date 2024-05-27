<template>
  <div class="input">
    <input v-model="store.newGetal" type="number">
    <button @click="store.addGetallenReeks">Voeg getal aan reeks toe</button>
  </div>
  <ul>
    <li v-for="(item, index) in store.getallenReeks" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
import {useProductStore} from "@/stores/counter"
export default {
  name: "StoreView",
  data() {
    return {
      store: useProductStore(),
    }
  },
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}
input {
  width: 30%;
  margin: 10px;
}
button {
  width: 30%;
  margin: 10px;
}
</style>