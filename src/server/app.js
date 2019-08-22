const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('../client/webpack.config');


module.exports = () => {
  const compiler = webpack(webpackConfig);
  return middleware(compiler);
};
