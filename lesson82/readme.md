Webpack install Step by Step ))

1.
npm install -y
2.
npm install --save-dev  webpack webpack-cli
3.
add to  'package.json' 
"scripts": {
       ...
       "build": "webpack --config webpack.config.js"
    },
4.
add folder folder 'src' and add inside index.js

5.
npm run build  
=> get dist/main.js

es ist nicht notwendig nächte Schritt '5a' zu machen
5.a
var config = {
    entry: './index.js'
        //...
};

module.exports = {
    mode: 'development'
};


6.
add to src index.html
7.
npm install --save-dev  html-webpack-plugin html-loader

8.
create webpack.config.js
add to this file
""""
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        ],
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    }
}
""""

9.
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save-dev babel-loader 

10.
create webpack.config.js
add to this file
""""
const Htmlwebpackplugin = require("html-webpack-plugin");

module.export = {
    module: {
        rules: [
            .
            .
            .
           ,

           //js
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            }
            ///js
        ],
       .
       .

""""


11.
npm install --save-dev  webpack-dev-server

12.
add to  'package.json' 
"scripts": {
       ... ,
        "start:dev": "webpack-dev-server"
    },

13.
npm run start:dev

=> started server localhost:8080..

14.
npm install --save-dev file-loader
15.
add to webpack.config.js- file
""""
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.export = {
    module: {
        rules: [
            .
            .
            .
           ,
           //image
           {
                test: /\.(png|svg|jpg|gif)/,
                use: {
                    loader: "file-loader"
                }
            },
            //image
 ],
       .
       .

""""

16.
npm install --save-dev node-sass style-loader css-loader sass-loader mini-css-extract-plugin    
17
npm install --save-dev postcss-loader postcss-loader

18.
add to webpack.config.js- file
""""
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
.
.
.
module.export = {
    module: {
        rules: [
            ...,
            //scss, sass, css
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                    //Node-sass
                    'node-sass'

                ],
            },
            //css
              ]
   },
   plugins : [
       ... ,
       new MiniCssExtractPlugin({
           filename: "[name].css",
           chunkfilename: "[id].css"
       })
   ]
};...

17
npm install --save-dev jquery

19
npm install --save-dev clean-webpack-plugin

20.
npm install bootstrap

21
npm install popper --save-dev

22.
add to index.js
import 'bootstrap';

23.
npm install moment --save 

24.
const moment =requiry("moment");
25
npm install --save-dev moment-locales-webpack-plugin
26.
add to webpack.config.js

const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    plugins: [
        // To strip all locales except “en”
        new MomentLocalesPlugin(),

        // Or: To strip all locales except “en”, “es-us” and “ru”
        // (“en” is built into Moment and can’t be removed)
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'de', 'ru'],
        }),
    ],
};