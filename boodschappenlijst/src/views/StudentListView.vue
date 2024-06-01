<template>
  <div class="container">
    <StudentList :title/>
  </div>
</template>

<script>
import StudentList from "@/components/StudentList.vue";
export default {
  components: {
    StudentList,
  },
  data() {
    return {
      title: 'Studentenlijst'
    }
  }
}
</script>

<style>
.container {

}
@media (min-width: 1024px) {
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>