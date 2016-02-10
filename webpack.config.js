'use strict';

var path = require('path');

var config = {
    entry: [
        "./client/js/boot.js"
    ],
    output: {
        path: __dirname,
        filename: "./client/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css",
                exclude: /node_modules/
            },
            {
                test: /\.(js|js)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    "presets": ["es2015"]
                }
            },
            {
                test: /\.html$/,
                loader: 'file?name=templates/[name]-[hash:6].html'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'file?name=img/[name].[ext]'
            }, {
                test: /\.css$/,
                loader: "style!css"
            }, {
                test: /\.scss$/,
                loader: "style!css!autoprefixer!sass"
            },{
                test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
                loader: 'file?name=fonts/[name].[ext]'
            },
            // {
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/
            // }
        ]
    }
};

module.exports = config;