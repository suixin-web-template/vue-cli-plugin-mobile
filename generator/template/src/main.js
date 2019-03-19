import Vue from "vue";
import App from "./App";
import "./plugins/index";
import "./permission";
import "@/styles/common.less";
// import Cookie from "js-cookie";
Vue.config.productionTip = false;
// if (process.env.NODE_ENV !== "production") {
//   require("./mock/index");
//   Cookie.set("user", "4b76630ebbc963124826fa7dcdfd514c1");
// }
<%- entryFileStr %>
new Vue({
  render: h => h(App)
}).$mount("#app");
