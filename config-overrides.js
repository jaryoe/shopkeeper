const {
  override,
  disableEsLint,
  overrideDevServer,
  addDecoratorsLegacy,
} = require("customize-cra");

const addProxy = () => (configFunction) => {
  //启用代理
  configFunction.proxy = {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
      secure: false,
      // pathRewrite: { '^/api': 'api' },
    },
  };
  return configFunction;
};

module.exports = {
  webpack: override(
    // enable legacy decorators babel plugin

    // disable eslint in webpack
    disableEsLint()
  ),
  devServer: overrideDevServer(addProxy()),
};
