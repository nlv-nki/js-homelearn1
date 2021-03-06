const path = require('path');

module.exports = {
    entry: './app.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'scripts.js'
    }
};
