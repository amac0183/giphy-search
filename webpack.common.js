const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'src/js/index.jsx'),
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'src/html/index.html'),
      filename: './index.html'
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};