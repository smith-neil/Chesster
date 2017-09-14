// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

var path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [{
      test: /\.js?$/,
      include: /Client/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss?$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIndentName: '[name]__[local]___[hash:base64:5]'
        }
      }, {
        loader: 'sass-loader'
      }]
    }],
  },
};
