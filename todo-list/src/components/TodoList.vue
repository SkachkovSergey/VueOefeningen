<template>
  <div class="list">
    <div class="item" v-for="(item, index) in toDoList">
      <h2>{{ item }}</h2><button @click="removeItem(index)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    toDoList: Array,
  },
  methods: {
    removeItem(index) {
      this.toDoList.splice(index, 1)
      this.$emit('decrement')
    }
  }
}
</script>

<style scoped>
.list {
  display: block;
  padding: 10px;
  width: 67%;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid gray;
}
button {
  background-color: wheat;
  border: none;
}
</style>