<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <form action="#" @submit.prevent="store.addItem">
      <div class="input">
        <label for="name">Name: </label>
        <input id="name" v-model="store.newItem.name" placeholder="Voeg productnaam toe" type="text">
      </div>
      <div class="input">
        <label for="price">Price: </label>
        <input id="price" type="number" v-model.number="store.newItem.price" placeholder="Voeg price toe">
      </div>
      <div>
        <label for="quantity">Quantity: </label>
        <input type="number" id="quantity" v-model.number="store.newItem.quantity">
      </div>
    </form>
    <button v-on:click="store.addItem">Add Item</button>
    <ul>
      <li class="item" v-for="(item, index) in store.items" :key="item.id">
        <div class="spacing" v-if="!item.isEditing">
          <span>{{ item.name }}   {{ item.price }} X {{ item.quantity }} = {{ item.price * item.quantity }}</span>
          <button class="editButton" @click="store.callEditing(item)">Edit</button>
          <button class="removeButton" @click="store.removeItem(index)">Remove</button>
        </div>
        <div class="spacing" v-else>
          <label for="edit-name">Name: </label>
          <input type="text" id="edit-name" v-model="item.name">
          <label for="edit-price">Price: </label>
          <input type="number" id="edit-price" v-model.number="item.price">
          <label for="edit-quantity">Quantity: </label>
          <input type="number" id="edit-quantity" v-model.number="item.quantity">
          <button @click="store.saveItem(item)">Save</button>
          <button @click="item.isEditing = false">Cancel</button>
        </div>
      </li>
    </ul>
    <span>Total price: {{ store.totalSum }} EURO</span>
  </div>
</template>

<script>
import {useProductStore} from '@/stores/counter'
export default {
  name: "ShoppingList",
  data() {
    return {
      store: useProductStore(),
    }
  },
  methods: {},
  props: {
    title: String,
  },
  computed: {}
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
input {
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
button {
  background-color: dodgerblue;
  color: #f8f8f8;
  border-radius: 5px;
  height: 25px;
  margin-bottom: 5px;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: end;
  border-bottom: 1px solid gold;
}
.spacing {
  gap: 5%;
}
.removeButton {
  background-color: brown;
  border: none;
  border-radius: 0;
  margin-left: 5px;
}
.editButton {
  background-color: lightseagreen;
  border: none;
  border-radius: 0;
  margin-left: 5px;
}
</style>