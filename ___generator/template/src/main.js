import Vue from "vue";
import { sync } from "vuex-router-sync";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index";
import debounce from "lodash/debounce";
// import "./registerServiceWorker";
import "./plugins/index";
import "./permission";
import "@/styles/common.less";
import Cookie from "js-cookie";
Vue.config.productionTip = false;
if (process.env.NODE_ENV !== "production") {
  require("./mock/index");
  Cookie.set("user", "4b76630ebbc963124826fa7dcdfd514c");
}
window.onresize = debounce(function() {
  store.commit("updateClientHeight", window.innerHeight);
}, 100);
sync(store, router);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
