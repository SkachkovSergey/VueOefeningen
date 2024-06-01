<template>
<div class="container">
  <h2>{{ title }}</h2>
  <ul>
    <li v-for="student in sortedStudents" :key="student.id">
      {{ student.name }}   {{ student.grade}}
    </li>
  </ul>
  <span>Junior-collega {{ highestGrade.name }} heeft de hoogste score met een
    score van {{ highestGrade.grade }}.
  </span>
  <span>Junior-collega {{ lowestGrade.name }} moet wat beter zijn best doen,
    hij heeft een score van {{ lowestGrade.grade }}.
  </span>
  <span v-for="(startsWithS, index) in nameStartsWithS" :key="index">
    De naam begint van S is {{ startsWithS.name }}.
  </span>
  <span v-for="best in higherThanNinety">{{ best.name }} heeft gescoord met {{ best.grade }}</span>
  <span v-for="sort in rating">{{ sort }}</span>
  <span>{{ allStudentNames }}</span>
  <span>De beste die contains de letter A zijn {{ sortedNamesContainingA }}.</span>
  <span>Totaal aantal punten: {{ sumOfGrades }}</span>
  <form @submit.prevent="addNewStudent">
    <label for="student">Naam: </label>
    <input type="text" id="student" v-model="newStudent.name">
    <br>
    <label for="grade">Score: </label>
    <input type="number" id="grade" v-model.number="newStudent.grade">
    <br>
    <button type="submit" >Voeg een student toe</button>
  </form>
</div>
</template>

<script>
export default {
  name: "StudentList",
  data() {
    return {
      students: [
        { id: 1, name: 'Alec', grade: 100 },
        { id: 2, name: 'Zico', grade: 92 },
        { id: 3, name: 'Mahir', grade: 0 },
        { id: 4, name: 'Reno', grade: 49 },
        { id: 5, name: 'Kamiel', grade: 69 },
      ],
      newStudent: {
        name: '',
        grade: null,
      }
    }
  },
  props: {
    title: String,
  },
  computed: {
    sortedStudents() {
      return [...this.students].sort((a, b) => b.grade - a.grade)
    },
    highestGrade() {
      return [...this.students].sort((a, b) => b.grade - a.grade)[0]
    },
    lowestGrade() {
      return [...this.students].sort((a, b) => a.grade - b.grade)[0]
    },
    higherThanNinety() {
      return [...this.students].filter((student) => student.grade >= 90)
    },
    nameStartsWithS() {
      return [...this.students].filter(student => student.name.toUpperCase().startsWith('S'))
    },
    rating() {
      return this.students.filter(student => student.grade % 3 === 0 ||
          student.name.toLowerCase().includes("hi"))
          .map(student => `${student.name.toUpperCase()} is een goede student. ${student.grade}/100`)
    },
    allStudentNames() {
      return this.students.map(student => student.name.toLowerCase()).join(', ')
    },
    sortedNamesContainingA() {
      return this.students.filter(student => student.name.toLowerCase().includes('a'))
          .sort((a, b) => b.grade - a.grade)
          .slice(0, 2).map(student => student.name).join(' en ')
    },
    sumOfGrades() {
      return this.students.reduce((total, student) => total + student.grade, 0)
    }
  },
  methods: {
    addNewStudent() {
      const newStudent = {
        id: this.students.length + 1,
        name: this.newStudent.name,
        grade: this.newStudent.grade
      };
      if(!this.newStudent.name.length > 0 || this.newStudent.grade === null) {
        alert("Enter the input fields!")
        return
      }
        this.students.push(newStudent)
        this.newStudent.name = '';
        this.newStudent.grade = null;
    }
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