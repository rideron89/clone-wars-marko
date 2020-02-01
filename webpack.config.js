const CSSExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.marko']
    },
    module: {
        rules: [
            {
                test: /\.marko/,
                loader: '@marko/webpack/loader'
            },
            {
                test: /\.css/,
                use: [CSSExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new CSSExtractPlugin({
            filename: '[name].css'
        })
    ]
}
