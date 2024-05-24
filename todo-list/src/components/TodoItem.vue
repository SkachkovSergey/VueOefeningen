<template>
  <Header :number/>
  <TodoList :to-do-list @decrement="removeItem"/>
  <SubmitForm @add-to-list="addToDoList"/>
</template>

<script>
import Header from "@/components/Header.vue";
import TodoList from "@/components/TodoList.vue";
import SubmitForm from "@/components/SubmitForm.vue";
export default {
  name: "TodoItem",
  components: {
    Header,
    TodoList,
    SubmitForm
  },
  data() {
    return {
      number: 0,
      toDoList: [],
    }
  },
  methods: {
    addToDoList(inputValue) {
      this.toDoList.push(inputValue)
      this.number++
    },
    removeItem() {
      this.number--
    }
  }
}
</script>

<style scoped>

</style>