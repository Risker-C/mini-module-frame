import {
  getCurrentInstance
} from "vue"

export default {
  getPiniaInstance() {
    return getCurrentInstance().appContext.app.config.globalProperties.$pinia
  },
  mainState() {
    return this.getPiniaInstance().state.value.main.formData;
  },
  getUseStore(name) {
    return this.getPiniaInstance()._s.get(name)
  }
}