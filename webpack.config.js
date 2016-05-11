var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        './assignment-player/PlayerWrapper.js'
    ],
    output: {
        path: require("path").resolve("./assignment-player"),
        filename: 'PlayerWrapper-client.js',
        publicPath: '/'
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.js?$/,
            loaders: ["expose?PlayerWrapper", "babel-loader?presets[]=react,presets[]=es2015"]
        }]
    }
};