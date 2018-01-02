module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // this is place where to custom Http port
    // webpack is successor of gulp or grunt
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 8079
    }
};
