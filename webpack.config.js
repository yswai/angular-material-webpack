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
            }
        ]
    }
};

module.exports = config;