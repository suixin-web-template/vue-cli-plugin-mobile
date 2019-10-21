module.exports = (api, options) => {
  let entryFileStr = "";
  api.extendPackage({
    dependencies: {
      "animate.css": "^3.7.0",
      lodash: "^4.17.11",
      nprogress: "^0.2.0",
      "vue-meta": "^2.3.1",
      "vuex-router-sync": "^5.0.0"
    },
    devDependencies: {
      "@suixin/cz-conventional-changelog": "^1.0.1",
      "conventional-changelog-cli": "^2.0.12"
    }
  });
  // 添加路由
  require("./router/index")(api, options);
  // 添加vuex
  require("./vuex/index")(api, options);
  api.injectImports(api.entryFile, `import debounce from "lodash/debounce";`);
  entryFileStr += `\nwindow.addEventListener(
  "resize",
  debounce(() => {
    store.commit("updateClientHeight");
    store.commit("updateClientWidth");
}, 100));`;
  if (options.mock) {
    require("./mock/index")(api);
    entryFileStr += `\nif (process.env.NODE_ENV !== "production") {
  require("./mock/index");
}`;
  }
  if (options.vant) {
    require("./vant/index")(api, options);
  }

  // 添加vuex-router-sync
  api.injectImports(api.entryFile, `import { sync } from "vuex-router-sync";`);
  entryFileStr += `\nsync(store, router);`;

  // 添加cookie
  api.extendPackage({
    devDependencies: {
      "js-cookie": "^2.2.0"
    }
  });

  // 添加api
  api.extendPackage({
    dependencies: {
      axios: "0.18.1"
    },
    devDependencies: {
      "@suixin/yapi": "^3.0.2"
    }
  });

  // 添加style-resources-loader
  api.extendPackage({
    devDependencies: {
      "style-resources-loader": "^1.2.1",
      "vue-cli-plugin-style-resources-loader": "^0.1.3"
    }
  });

  // 添加自动路由
  api.extendPackage({
    dependencies: {
      "vue-router-layout": "^0.1.2"
    },
    devDependencies: {
      "vue-auto-routing": "^0.3.0"
    }
  });

  // 添加postcss vw插件
  api.extendPackage({
    devDependencies: {
      "postcss-px-to-viewport": "^1.1.0",
      "postcss-viewport-units": "^0.1.6"
    },
    postcss: {
      plugins: {
        "postcss-px-to-viewport": {
          viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
          // viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
          unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
          viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用 vw
          selectorBlackList: [".ignore", "#nprogress", /font-/], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
          minPixelValue: 3, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
          mediaQuery: false // 允许在媒体查询中转换`px`
        },
        "postcss-viewport-units": {
          silence: true
        },
        cssnano: {
          reduceIdents: false, // 禁止修改动画名称
          // 'preset': 'advanced',
          autoprefixer: false,
          "postcss-zindex": false
        }
      }
    }
  });

  api.render("./template", {
    entryFileStr: entryFileStr.trim()
  });
};
