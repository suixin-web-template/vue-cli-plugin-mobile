import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const whiteList = ["/404"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  if (!(whiteList.indexOf(to.path) > -1)) {
    // do something
  }
  next();
});
router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
