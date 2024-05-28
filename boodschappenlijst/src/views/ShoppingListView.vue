<template>
  <div class="about">
    <ShoppingList :title/>
  </div>
</template>

<script>
import ShoppingList from "@/components/ShoppingList.vue";
export default {
  components: {
    ShoppingList,
  },
  data() {
    return {
      title: 'Boodschappenlijstje',
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
