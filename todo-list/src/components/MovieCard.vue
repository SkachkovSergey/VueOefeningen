<template>
<div v-for="movie in movies" :key="movie.id">
  <img :src="'../src/assets/' + movie.image" alt="Movie Poster" height="400px">
  <h1>{{ movie.name }}</h1>
  <h3>Rating: <input type="number" :value="movie.rating"></h3>
</div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movies: Array,
  }
}
</script>

<style scoped>
div {
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 25px;
  font-weight: bolder;
  color: darkslateblue;
}
</style>