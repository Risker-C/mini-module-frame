import {
  useMainStore
} from "./modules/mainStore"
import {
  useMenuStore
} from "./modules/menuStore"
import {
  useUserStore
} from "./modules/userStore"

class Store {
  constructor() {
    this.mainStore = useMainStore()
    this.menuStore = useMenuStore()
    this.userStore = useUserStore()
  }
}
export {
  useMainStore,
  useMenuStore,
  useUserStore,
};
export default Store;