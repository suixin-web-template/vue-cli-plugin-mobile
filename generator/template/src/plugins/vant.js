import { Notify, Loading } from "vant";
Notify.setDefaultOptions({
  duration: 2000
});
const components = { Notify, Loading };
function install(Vue) {
  Object.values(components).forEach(C => {
    Vue.use(C);
  });
}
export default {
  install
};
