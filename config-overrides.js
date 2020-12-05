const {
  override,
  overrideDevServer,
  addDecoratorsLegacy,
  disableEsLint,
} = require('customize-cra');

const addProxy = () => (configFunction) => {
  // configFunction.port = 9000,
  //启用代理
  configFunction.proxy = {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      secure: false,
      // pathRewrite: { '^/api': 'api' },
    },
    '/admin': {
      target: 'http://localhost:9999',
      changeOrigin: true,
      secure: false,
      // pathRewrite: { '^/admin': 'admin' },
    },
  };
  return configFunction;
};

module.exports = {
  webpack: override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),

    // disable eslint in webpack
    disableEsLint()
  ),
  devServer: overrideDevServer(addProxy()),
};