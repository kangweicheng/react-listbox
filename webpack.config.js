const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/MyComponent.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'MyComponent.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                      test: /\.css$/,
                      use: ['style-loader', 'css-loader'],
                      exclude: /node_modules/
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            }
        ]
    }
}