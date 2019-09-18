const Htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [

            // index.html
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: { minimize: true }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)/,
                use: {
                    loader: "file-loader"
                }
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new Htmlwebpackplugin({
            template: "./src/index.html",
            filename: "./index.html"

        }),
    ]

};