<template>
<MovieCard :movies/>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: [
        {id: 1, name: 'Scary Movie', image: "ScaryMovie.jpg", rating: 6},
        {id: 2, name: 'Hitch', image: "Hitch.jpg", rating: 4},
        {id: 3, name: 'The Interview', image: "TheInterview.jpg", rating: 4.5}
      ],

    }
  }
}
</script>

<style scoped>

</style>