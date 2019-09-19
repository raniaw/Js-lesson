//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [

            //.html
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            //html
            //js
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            //js
            //image
            {
                test: /\.(png|svg|jpg|gif)/,
                use: {
                    loader: "file-loader"
                }
            },
            //image
            //scss, sass, css
            {
                test: /\.s[ac]ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',

                ]
            },
            //css


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"

        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new MomentLocalesPlugin({
            // localesToKeep: ['es-us', 'de', 'ru'],

            localesToKeep: ['de', 'ru'],
        }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // })
    ]

};

// module.exports = (env, argv) => {
//     if (argv.mode === 'development') {
//         config.devtool = 'source-map';
//     }

//     return config;
// };