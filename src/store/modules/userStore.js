import { defineStore } from 'pinia';

/**
 * 用户信息数据
 */
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // 用户ID
      id: '',
      // 用户名
      userName: '',
      // 用户详细信息
      userInfo: {}
    }
  },
  getters: {},
  actions: {
    recoverData() {
      if (!this.userInfo?.account) {
        const userInfo = sessionStorage.getItem("userInfo");
        this.userInfo = JSON.parse(userInfo);
      }
    },
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    clearUserInfo() {
      this.userInfo = {};
      sessionStorage.removeItem("userInfo")
    }
  }
})