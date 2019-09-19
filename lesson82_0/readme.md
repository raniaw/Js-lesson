Webpack install Step by Step ))

1.
npm install -y
2.
npm install --save-dev  webpack webpack-cli
3.
add to  'package.json' 
"scripts": {
       ...
        "build": "webpack"
    },
4.
add folder folder 'src' and add inside index.js

5.
npm run build  
=> get dist/main.js

6.
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install babel-loader --save-dev

7.
npm install --save-dev  html-webpack-plugin html-loader

8.
create webpack.config.js
add to this file
""""
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
        ],
        plugins: [
            new Htmlwebpackplugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    }
}
""""

9.
npm install --save-dev  webpack-dev-server

10.
add to  'package.json' 
"scripts": {
       ... ,
        "start:dev": "webpack-dev-server"
    },

11.
npm run start:dev

=> started server localhost:8080..


