import { Notify, Loading, Field } from "vant";
Notify.setDefaultOptions({
  duration: 2000
});
const components = { Notify, Loading, Field };
function install(Vue) {
  Object.values(components).forEach(C => {
    Vue.use(C);
  });
}
export default {
  install
};