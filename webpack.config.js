const path = require('path');

module.exports = {
    entry: './app.js',
    mode: 'none',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'scripts.js'
    },
  devtool: 'source-map',
  watch: true,
};
