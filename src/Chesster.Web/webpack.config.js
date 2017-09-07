const path = require('path');

module.exports = function (env) {
  const environment = env || 'dev';
  const config = {
    clientBundleOutputDir: path.join(__dirname, 'wwwroot'),
    serverBundleOutputDir: path.join(__dirname, 'Client', 'dist'),
    aliases: {
      components: path.resolve(__dirname, 'Client', 'components')
    }
  };

  return require(`./webpack.${environment}.js`)(environment, config);
}