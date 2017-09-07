const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const SourceMapDevToolPlugin = webpack.SourceMapDevToolPlugin;
const DefinePlugin = webpack.DefinePlugin;
const NamedModulesPlugin = webpack.NamedModulesPlugin;

module.exports = (env, config) => {

  const sharedConfig = () => ({
    stats: 'normal',
    resolve: {
      extensions: ['.js', '.json'],
      modules: [
        path.resolve(__dirname, 'Client'),
        path.resolve(__dirname, 'node_modules')
      ],
      alias: config.aliases
    },
    output: {
      filename: '[name].js',
      publicPath: '/'
    },
    module: {
      rules: [{
        test: /\.js?$/,
        include: /Client/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    },
    plugins: [
      new NamedModulesPlugin(),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  });

  const clientConfig = merge(sharedConfig(), {
    entry: {
      'main-client': path.join(__dirname, 'Client', 'boot-client.js')
    },
    module: {
      rules: [{
        test: /\.css?$/,
        include: /Client/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIndentName: '[name]__[local]___[hash:base64:5]'
          }
        }]
      }, {
        test: /\.scss?$/,
        include: /Client/,
        exclude: /node_modules/,
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
      }]
    },
    output: {
      path: config.clientBundleOutputDir
    },
    plugins: [
      new SourceMapDevToolPlugin({
        filename: '[file].map',
        moduleFilenameTemplate: path.relative(config.clientBundleOutputDir, '[resourcePath]')
      })
    ]
  });

  const serverConfig = merge(sharedConfig(), {
    target: 'node',
    devtool: 'inline-source-map',
    entry: {
      'main-server': path.join(__dirname, 'Client', 'boot-server.js')
    },
    resolve: {
      mainFields: ['main']
    },
    output: {
      path: config.serverBundleOutputDir,
      libraryTarget: 'commonjs'
    },
    module: {
      rules: [{
        test: /\.css?$/,
        include: /Client/,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
          options: {
            emitFile: false
          }
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIndentName: '[name]__[local]___[hash:base64:5]'
          }
        }]
      }, {
        test: /\.scss?$/,
        include: /Client/,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
          options: {
            emitFile: false
          }
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
      }]
    },
    plugins: []
  });

  return [clientConfig, serverConfig];
};