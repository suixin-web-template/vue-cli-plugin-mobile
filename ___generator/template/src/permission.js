import router from "./router";
import store from "./store/index";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import wx from "@/utils/weixin";
const whiteList = ["/information/qr", "/404"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  console.log(to.path);
  if (!(whiteList.indexOf(to.path) > -1)) {
    await wx();
    const status = store.state.app.userInfo.status;
    if (status === -1) {
      await store.dispatch("getUserInfo");
    }
  }
  next();
});
router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
