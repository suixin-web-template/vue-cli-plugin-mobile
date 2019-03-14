module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      "animate.css": "^3.7.0",
      "axios": "^0.18.0",
      "js-cookie": "^2.2.0",
      "lodash": "^4.17.11",
      "nprogress": "^0.2.0",
      "vant": "^1.6.9",
      "vue-meta": "^1.5.8",
      "vue-router-layout": "^0.1.2",
      "vuex-router-sync": "^5.0.0"
    },
    devDependencies: {
      "@suixin/cz-conventional-changelog": "^1.0.1",
      "@suixin/yapi": "^2.1.2",
      "conventional-changelog-cli": "^2.0.12",
      "mockjs": "^1.0.1-beta3",
      "postcss-px-to-viewport": "^1.1.0",
      "postcss-viewport-units": "^0.1.6",
      "style-resources-loader": "^1.2.1",
      "vue-auto-routing": "^0.3.0"
    }
  });
  // api.render("./template");
};
