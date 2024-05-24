<template>
  <div class="about">
    <MovieList/>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";

export default {
  name: 'movieView',
  components: {
    MovieList
  },

}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
