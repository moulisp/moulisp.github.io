var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
});


module.exports = {
    entry: [ './src/js/app.js'],
    output: {
        path: __dirname + "/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                loader: "raw-loader" 
              },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin('style.bundle.css')],
    devServer: {
        port: 8080,
        contentBase: './',
        inline: true
    }
}