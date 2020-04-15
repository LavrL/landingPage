const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


function _path(p) {
    return path.join(__dirname, p);
}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-env'
            ],
            plugins: ['@babel/plugin-transform-modules-commonjs']
        }
    }]
    loaders.push('eslint-loader');
    return loaders
}

module.exports = {
    entry: {
        main: './src/js/index.js',
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            'jquery.validate': 'jquery-validation/dist/jquery.validate',
            'inputmask.dependencyLib': _path('node_modules/jquery.inputmask/dist/inputmask/inputmask.dependencyLib'),
            'inputmask': _path('node_modules/jquery.inputmask/dist/inputmask/inputmask'),
            'jquery.inputmask': _path('node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask'),
            'inputmask.numeric.extensions': _path('node_modules/jquery.inputmask/dist/inputmask/inputmask.numeric.extensions')
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/img'),
                to: path.resolve(__dirname, 'dist/img')
            }
        ]),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {},
                },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader?name=/fonts/[name].[ext]']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            }
        ]
    }
}
