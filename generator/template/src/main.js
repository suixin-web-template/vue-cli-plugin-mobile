import Vue from "vue";
import App from "./App";
import "./plugins/index";
import "./permission";
import "@/styles/common.less";
import globalMixin from "@/mixins/global";
Vue.config.productionTip = false;
Vue.mixin(globalMixin);
<%- entryFileStr %>
new Vue({
  render: h => h(App)
}).$mount("#app");
