<template>
  <div class="container">
    <div class="building">
      <img :src="'../src/assets/' + buildings[0].image" alt="Barrack" height="550">
    </div>
    <div class="warriors">
      <h1>Hover over a unit</h1>
      <h2>Gold: {{ trainingPrice }}</h2>
      <h2>Naam: {{ legionairName }}</h2>
      <div class="item">
        <div v-for="unit in units" :key="unit.id" @mouseenter="toonUnit(unit)">
          <img class="image" :src="'../src/assets/' + unit.image" alt="unit image" height="100">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "TrainBuilding",
  props: {
    buildings: Array,
    units: Array,
  },
  data() {
    return {
      legionairName: '',
      trainingPrice: 0,
    }
  },
  methods: {
    toonUnit(unit) {
      this.legionairName = unit.name
      this.trainingPrice = unit.price
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
}
.warriors {
  margin-top: 100px;
}
.warriors h1 {
  font-weight: bolder;
  margin-bottom: 50px;
}
.item {
  display: flex;
  flex-direction: row;
}
.image {
  margin: 10px;
}


</style>