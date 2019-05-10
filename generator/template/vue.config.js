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
    // config.performance.hints(false);
    config.when(isProd, options => {
      // 因4+版本只支持到minimizer 无法更细粒度的修改
      const TerserPlugin = require("terser-webpack-plugin");
      const terserOptions = require("./terserOptions");
      options.optimization.minimizer([
        new TerserPlugin(terserOptions(options))
      ]);
    });
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/styles/layout/mixins/*.less")]
    }
  }
};
