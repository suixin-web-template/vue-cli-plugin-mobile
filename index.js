const VueAutoRoutingPlugin = require("./demo/node_modules/vue-auto-routing/lib/webpack-plugin");
const path = require("path");
module.exports = api => {
  // 添加微信
  api.chainWebpack(webpackConfig => {
    webpackConfig.externals({
      "weixin-js-sdk": "window.wx"
    });
  });
  api.chainWebpack(webpackConfig => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      webpackConfig.module
        .rule("less")
        .oneOf(type)
        .use("style-resource")
        .loader("style-resources-loader")
        .options({
          patterns: [path.resolve(__dirname, "src/styles/layout/mixins/*.less")]
        })
    );
  });
  api.chainWebpack(webpackConfig => {
    webpackConfig.plugin("vue-auto-routing").use(VueAutoRoutingPlugin, [
      {
        pages: "src/pages",
        nested: true
      }
    ]);
  });
};
