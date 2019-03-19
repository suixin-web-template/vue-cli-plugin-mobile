import Vue from "vue";
import Router from "vue-router";
import routes from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";

Vue.use(Router);

const RouterLayout = createRouterLayout(layout => {
  return import("@/layouts/" + layout + ".vue");
});
export default new Router({
  <%_ if (historyMode) { _%>
  mode: 'history',
  base: process.env.BASE_URL,
  <%_ } _%>
  routes: [
    {
      path: "/",
      component: RouterLayout,
      children: routes
    }
  ]
});
