module.exports = api => {
  api.extendPackage({
    dependencies: {
      vant: "^2.2.9"
    },
    devDependencies: {
      "babel-plugin-import": "^1.11.0"
    },
    babel: {
      plugins: [
        [
          "import",
          {
            libraryName: "vant",
            libraryDirectory: "es",
            style: name => `${name}/style/less`
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
