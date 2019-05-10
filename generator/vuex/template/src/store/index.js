import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const modulesFiles = require.context("./modules", false, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  modules[moduleName] = modulesFiles(modulePath).default;
  return modules;
}, {});
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules
});
