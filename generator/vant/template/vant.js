import Vue from "vue";
import { Notify, Loading } from "vant";
const globalIntro = [Notify, Loading];

globalIntro.forEach(C => {
  Vue.use(C);
});
