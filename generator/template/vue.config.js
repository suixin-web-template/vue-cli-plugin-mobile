const path = require("path");
const VueAutoRoutingPlugin = require("vue-auto-routing/lib/webpack-plugin");
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  assetsDir: "pkg",
  transpileDependencies: ["vue-auto-routing"],
  css: {
    sourceMap: !isProd
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.externals({
      "weixin-js-sdk": "window.wx"
    });
    config.plugin("vue-auto-routing").use(VueAutoRoutingPlugin, [
      {
        pages: "src/pages",
        nested: true
      }
    ]);
    // 关闭性能提示
    config.performance.hints(false);
    config.when(isProd, options => {
      options.optimization.minimizer("terser").tap(args => {
        args[0].terserOptions.compress.drop_console = true;
        return args;
      });
    });
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/styles/layout/mixins/*.less")]
    }
  }
};
