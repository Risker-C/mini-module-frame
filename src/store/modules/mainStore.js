import {
  defineStore
} from "pinia";

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      formData: {}
    }
  },
  getters: {},
  actions: {
    submit(formData) {
      this.formData = formData
    },
    reset() {
      this.formData = {}
    }
  }
})