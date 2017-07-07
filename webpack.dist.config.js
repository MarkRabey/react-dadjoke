const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config');

config.entry = './src/DadJoke.jsx';
config.output = {
  path: path.join(__dirname, './dist'),
  filename: 'DadJoke.js',
  library: 'DadJoke',
  libraryTarget: 'commonjs2',
};
config.externals = {
  react: 'react',
};
config.target = 'node';
config.plugins = [
  new ExtractTextPlugin('DadJoke.css', { allChunks: true }),
];

module.exports = config;
