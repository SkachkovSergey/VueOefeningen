import { defineStore } from 'pinia'

export const useProductStore = defineStore('product',  {
  state: () => ({
    getallenReeks: [
        0, 1, 1, 2, 3
    ],
    newGetal: null,
}),
  getters: {},
  actions: {
    addGetallenReeks() {
      this.getallenReeks.push(this.newGetal)
    }
  }
});
