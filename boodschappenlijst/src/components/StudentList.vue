<template>
<div class="container">
  <h2>{{ title }}</h2>
  <ul>
    <li v-for="student in store.sortedStudents" :key="student.id">
      {{ student.name }}   {{ student.grade}}
    </li>
  </ul>
  <span>Junior-collega {{ store.highestGrade.name }} heeft de hoogste score met een
    score van {{ store.highestGrade.grade }}.
  </span>
  <span>Junior-collega {{ store.lowestGrade.name }} moet wat beter zijn best doen,
    hij heeft een score van {{ store.lowestGrade.grade }}.
  </span>
  <span v-for="(startsWithS, index) in store.nameStartsWithS" :key="index">
    De naam begint van S is {{ startsWithS.name }}.
  </span>
  <span v-for="best in store.higherThanNinety">{{ best.name }} heeft gescoord met {{ best.grade }}</span>
  <span v-for="sort in store.rating">{{ sort }}</span>
  <span>{{ store.allStudentNames }}</span>
  <span>De beste die contains de letter A zijn {{ store.sortedNamesContainingA }}.</span>
  <span>Totaal aantal punten: {{ store.sumOfGrades }}</span>
  <form @submit.prevent="store.addNewStudent">
    <label for="student">Naam: </label>
    <input type="text" id="student" v-model="store.newStudent.name">
    <br>
    <label for="grade">Score: </label>
    <input type="number" id="grade" v-model.number="store.newStudent.grade">
    <br>
    <button type="submit" >Voeg een student toe</button>
  </form>
</div>
</template>

<script>
import {useStudentStore} from "@/stores/student";

export default {
  name: "StudentList",
  data() {
    return {
      store: useStudentStore(),
    }
  },
  props: {
    title: String,
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
.container {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
}
@media (min-width: 1024px) {
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
}
button {
  background-color: dodgerblue;
  color: #f8f8f8;
  border-radius: 5px;
  height: 25px;
  margin-bottom: 5px;
}
</style>