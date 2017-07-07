const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './demo/index.jsx',
  output: {
    path: path.join(__dirname, './demo/dist'),
    filename: 'index.js',
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, './src'), path.resolve(__dirname, './demo')]
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer({ browsers: ['last 2 versions'] })]
            }
          }]
        }),
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel-loader?cacheDirectory&presets[]=react,presets[]=es2015,presets[]=stage-0',
          'eslint-loader',
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'main.css', allChunks: true }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['src', 'node_modules']
  },
};
