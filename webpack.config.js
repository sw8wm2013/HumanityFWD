
const path = require('path');
const express = require('express');

module.exports = {
    entry: {
        src: './client/index.js', 
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
          {
            test: /\.jsx?/,
            exclude: path.resolve(__dirname, 'node_modules'),
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react']
            }
          },
          {
            test: /\.s?css/,
            use: [
              'style-loader', 'css-loader', 'sass-loader'
            ]
          }
        ]
      },
    devServer: { 
        publicPath: '/build',
        proxy: {
            '/api/submit-registration': 'http://localhost:3000'
        },
        filename: 'bundle.js'
      },
    
};