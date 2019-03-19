module.exports = api => {
  api.extendPackage({
    devDependencies: {
      mockjs: "^1.0.1-beta3"
    }
  });
  api.render("./template");
};
