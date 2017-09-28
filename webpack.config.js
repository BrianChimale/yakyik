var webpack = require('webpack'),
    path = require('path');

module.exports = {
    //Here is where you define the location of the react code
    entry: {
        app: './src/app.js'
    },
    //The output is saved here
    //sourceMapFilename makes debugging much easier
    output: {
        filename: 'public/build/bundle.js',
        sourceMapFilename: 'public/build/bundle.map'
    },
    devtool: '#source-map',
    //the module object tells webpack how to transpile
    //the loaders object should be an array of JSON objects
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}





