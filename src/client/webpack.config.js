const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: {
    client: path.join(__dirname, 'index.js'),
  },
  devtool: 'source-map',
  output: {
    path: outputPath,
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: require('../../babel.config'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.js'],
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.join(__dirname, '_public'),
        to: path.join(outputPath),
      },
    ]),
  ],
};
