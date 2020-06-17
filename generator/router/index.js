module.exports = (api, options = {}) => {
  api.injectImports(api.entryFile, `import router from "./router";`);
  api.injectRootOptions(api.entryFile, "router");
  api.extendPackage({
    dependencies: {
      "vue-router": "^3.3.4"
    }
  });
  api.render("./template", {
    historyMode: options.routerHistoryMode
  });
};
