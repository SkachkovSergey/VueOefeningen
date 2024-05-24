<template>
  <div class="form">
    <input v-model="inputValue" type="text" placeholder="Enter ToDo">
    <input @click="addTask(this.inputValue)" type="submit" content="Submit">
  </div>
</template>

<script>
export default {
  name: "SubmitForm",
  data() {
    return {
      inputValue: "",
    }
  },
  methods: {
    addTask() {
      if(this.inputValue.length === 0) {
        alert("Enter your task in the input field!");
      }else {
        this.$emit('add-to-list', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
}
.form input {
  height: 35px;
  font-size: 20px;
  margin: 15px;
  border-radius: 5px;
  background-color: lightblue;
}
</style>