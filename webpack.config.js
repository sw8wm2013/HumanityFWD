const path = require('path');
const express = require ('express');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost:8080/bundle.js',
        filename: 'bundle.js',
     },
    watch: true,
    mode: process.env.NODE_ENV,
    devServer:{
        //contentBase: path.resolve(__dirname,'index.js'),
        publicPath: 'http://localhost:8080/bundle.js',
        proxy: {
            '/api': 'http://localhost:3000'
        }
        //port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test:/\.s?css/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                },{
                    loader: 'sass-loader'
                }]
            }
        ]
    }
};