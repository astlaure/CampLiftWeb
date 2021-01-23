const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/web/index.tsx',
  output: {
    filename: 'js/main.js',
    path: path.resolve('public'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', { targets: { browsers: '>1%, not ie 11, not op_mini all' } }],
            ],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/web/assets/index.html',
      favicon: './src/web/assets/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
