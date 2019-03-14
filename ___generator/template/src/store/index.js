import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const modulesFiles = require.context("./modules", false, /\.js$/);
const modules = {};
modulesFiles.keys().forEach(item => {
  const key = item.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(item);
  modules[key] = value.default;
});
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules
});
