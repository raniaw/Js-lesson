const Htmlwebpackplugin = require("html-webpack-plugin");

module.export = {
    module: {
        rules: [
            //index.html
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: { minimize: true }
                }]
            },
            //js
            {
                //     test: /\.js$/,
                //     exclude: /node-modules/,
                //     use: {
                //         loader: "babel-loader"
                //     }
            },
            //image
            {
                test: /\.(png|svg|jpg|gif)/,
                use: {
                    loader: "file-loader"
                }
            },

        ],
        plugins: [
            new Htmlwebpackplugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    }
}