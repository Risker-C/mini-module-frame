import * as Vue from "vue";
import {
  name
} from "../package.json";
import {
  useModule
} from "vue-module-loader";
import router from "./router";
import App from "./App.vue";
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as VueRouter from "vue-router"
import * as YhRequest from "yh-request"
import {
  createPinia
} from "pinia";
import * as Pinia from "pinia"
import Store from "./store";
// 导出模块定义对象
export default {
  name,
  install(
    /**
     * @type {import('vue-module-loader/src/interfaces').Context}
     */
    ctx
  ) {
    const {
      Use
    } = ctx;
    ctx.external = {
      "vue": Vue,
      "element-ui": ElementPlus,
      "vue-router": VueRouter,
      "yh-request": YhRequest,
      "pinia": Pinia,
      // process: {
      //   env: {
      //     BUILD_MODULE: "1",
      //     NODE_ENV: "production"
      //   }
      // }
    }
    ctx.Vue = Vue;
    const app = Vue.createApp(App);
    // 主框架实例化后应存储在上下文对象中供其他模块安装时使用
    ctx.app = app;
    app.use(router);
    app.use(ElementPlus)
    const pinia = createPinia()
    app.use(pinia)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    app.store = new Store();
    if (Array.isArray(Use)) {
      Use.forEach(item => {
        app.use(item)
      })
    }
    app.mount("#app");
    // 加载远程模块
    useModule(
      "http://localhost:5000/module/vue3-module.umd.js"
      // "http://static.mengqinghe.com/vml/module/vue-module-module.iife.js"
    );
  },
};