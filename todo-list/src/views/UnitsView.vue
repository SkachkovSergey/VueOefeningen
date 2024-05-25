
<template>
  <main>
    <TrainBuilding :buildings :units/>
  </main>
</template>

<script>
import TrainBuilding from "@/components/TrainBuilding.vue";

export default {
  name: 'units',
  components: {
    TrainBuilding,
  },
  data() {
    return {
      buildings: [
        {id: 1, image: 'Barracks.png'}
      ],
      units: [
        {id: 1, name: 'Defender', price: 12, image: 'defender.jpg'},
        {id: 2, name: 'Spearman', price: 23, image: 'pieker.jpg'},
        {id: 3, name: 'Roman', price: 54, image: 'roman.jpg'},
      ]
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>