import { defineStore } from 'pinia';


/**
 * 菜单数据
 */
export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      // 激活的菜单列表
      menuData: [] ,
      // 所有的菜单信息
      allMenu: {},
      // 激活的菜单
      actionMenu: {} ,
      // 激活的菜单序号
      menuIndex: "",

      // 菜单是否折叠
      isCollapse: false,

    }
  },
  getters: {
    getItem: (state) => {
      return (path) => getMenuItem(state.menuData, path)
    }
  },
  actions: {
    // 初始化菜单
    createMenu() {
      const menuData = {

      };
      this.menuData = menuData
    },
    // 切换菜单
    changeMenu(menuItem) {
      this.actionMenu = menuItem;
      this.menuIndex = menuItem.id;
    },


  }
})