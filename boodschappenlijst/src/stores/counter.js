
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product',  {
  state: () => ({
    items: [
      {id: 1, name: 'Apples', price: 1.3, quantity: 4, isEditing: false},
      {id: 2, name: 'Oranges', price: 1.6, quantity: 4, isEditing: false},
      {id: 3, name: 'Bananas', price: 0.6, quantity: 2, isEditing: false},
    ],
    newItem: {
      name: '',
      price: null,
      quantity: 1,
    },
  }),
  getters: {
    totalSum() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
  },
  actions: {
    addItem() {
      if(this.newItem.name.length > 0 && this.newItem.price !== null) {
        this.items.push({
          id: this.items.length + 1,
          name: this.newItem.name,
          price: this.newItem.price,
          quantity: this.newItem.quantity,
          isEditing: false
        });
        this.newItem.name = '';
        this.newItem.price = null;
        this.newItem.quantity = 1;
      }
      else {
        alert("Please enter a valid name and price!")
      }
    },
    removeItem(index) {
      this.items.splice(index, 1)
    },
    saveItem(item) {
      item.isEditing = false
    },
    callEditing(item) {
      item.isEditing = true
    }
  }
});
