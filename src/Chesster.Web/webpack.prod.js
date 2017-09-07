const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const DefinePlugin = webpack.DefinePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ShakePlugin = require('webpack-common-shake').Plugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const CompressionPlugin = require('compression-webpack-plugin');
const SizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  });

  const clientConfig = merge(sharedConfig(), {
    entry: {
      'main-client': path.join(__dirname, 'Client', 'boot-client.js')
    },
    output: {
      path: config.clientBundleOutputDir
    },
    module: {
      rules: [{
        test: /\.css?$/,
        include: /Client/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIndentName: '[name]__[local]___[hash:base64:5]'
            }
          }]
        })
      }, {
        test: /\.scss?$/,
        include: /Client/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIndentName: '[name]__[local]__[hash:base64:5]'
            }
          }, {
            loader: 'sass-loader'
          }]
        })
      }]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new UglifyJsPlugin(),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 0,
        minRatio: 0
      }),
      new SizeAnalyzerPlugin('size_report.txt'),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'size_report_visual.html',
        defaultSizes: 'gzip'
      })
    ]
  });

  const serverConfig = merge(sharedConfig(), {
    target: 'node',
    entry: {
      'main-server': path.join(__dirname, 'Client', 'boot-server.js')
    },
    resolve: {
      mainFields: ['main']
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
    output: {
      libraryTarget: 'commonjs',
      path: config.serverBundleOutputDir
    },
    plugins: []
  });

  return [clientConfig, serverConfig];
};