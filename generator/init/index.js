module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      "animate.css": "^4.1.0",
      lodash: "^4.17.15",
      nprogress: "^0.2.0"
    },
    vue: {
      assetsDir: "pkg",
      productionSourceMap: false
    }
  });
  api.injectImports(api.entryFile, `import "./init"`);
  api.render("./template");
};
