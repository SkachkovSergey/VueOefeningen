<template>
  <div>
    <TodoItem/>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "TodoListView",
  components: {
    TodoItem,
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>