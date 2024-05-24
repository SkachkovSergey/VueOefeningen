<template>
  <div class="header">
    <h1>You Have {{ number }} Todos</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    number: Number,
  }

}
</script>

<style scoped>
  .header {
    padding: 10px 100px;
    border: 2px solid red;
  }
</style>