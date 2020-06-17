module.exports = api => {
  api.extendPackage({
    dependencies: {
      vant: "^2.8.6"
    },
    devDependencies: {
      "babel-plugin-import": "^1.13.0"
    },
    babel: {
      plugins: [
        [
          "import",
          {
            libraryName: "vant",
            libraryDirectory: "es",
            style: true
          },
          "vant"
        ]
      ]
    }
  });
  api.injectImports("src/plugins/index.js", `import vant from "./vant";`);
  api.render({
    "./src/plugins/vant.js": "./template/vant.js"
  });
};
