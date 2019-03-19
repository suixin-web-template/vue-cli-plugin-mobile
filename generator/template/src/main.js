import Vue from "vue";
import App from "./App";
import "./plugins/index";
import "./permission";
import "@/styles/common.less";
Vue.config.productionTip = false;
<%- entryFileStr %>
new Vue({
  render: h => h(App)
}).$mount("#app");
