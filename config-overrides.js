const {
  override,
  disableEsLint,
  overrideDevServer,
  watchAll,
} = require("customize-cra");

const proxy = () => (config) =>{
  config.proxy = {
    '/apiii': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' },
    },
};
  return config;
}

module.exports = {
  webpack: override(
    // usual webpack plugin
    disableEsLint()
  ),
  devServer: overrideDevServer(
    // dev server plugin
   // proxy(),
    watchAll(),
    
  ),
};
