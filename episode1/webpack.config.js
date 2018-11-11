const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: ['./sass/main.scss'],
    output: {
        path: __dirname + '/css',
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].css',
                }
            },
            {
                loader: 'extract-loader'
            },
            {
                loader: 'css-loader?-url'
            },
            {
                loader: 'postcss-loader'
            },
            {
                loader: 'sass-loader'
            }
            ]
        }]
    }
}