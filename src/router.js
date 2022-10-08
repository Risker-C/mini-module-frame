import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Index from "./layout/index.vue";
import Home from "./pages/Home.vue"
import Form from "./pages/Form.vue"
export default createRouter({
  history: createWebHashHistory(),
  routes: [{
      path: "/",
      name: "index",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/form",
      name: "form",
      component: Form
    },
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
  ],
});