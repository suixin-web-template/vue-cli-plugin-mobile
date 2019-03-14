import Meta from "vue-meta";
import Cookie from "js-cookie";
import Vue from "vue";
import Vant from "./vant";
import { mapState } from "vuex";
import { isWeixin } from "@/utils";

Vue.use(Meta, {
  keyName: "head"
});
Vant.forEach(C => {
  Vue.use(C);
});
Vue.mixin({
  filters: {
    formatStr(text, frontLen = 3, endLen = 4) {
      const end = text.length - endLen;
      const len = end - frontLen;
      let asterisk = "";
      for (let i = 0; i < len; i++) {
        asterisk += "*";
      }
      return text.substring(0, frontLen) + asterisk + text.substring(end);
    }
  },
  computed: {
    ...mapState({
      $isLoading: state => state.app.isLoading,
      $showMask: state => state.app.showMask,
      height: state => state.app.height,
      $userInfo: state => state.app.userInfo
    }),
    isWeixin() {
      return isWeixin();
    }
  }
});
Vue.prototype.$cookie = Cookie;
