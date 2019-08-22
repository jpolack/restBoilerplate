/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

module.exports = () => {
  const webpack = require('webpack');
  const middleware = require('webpack-dev-middleware');
  const webpackConfig = require('../client/webpack.config');
  const compiler = webpack(webpackConfig);
  return middleware(compiler);
};
