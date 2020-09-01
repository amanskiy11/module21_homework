const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const StyleLintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: './src/module21.js',
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "aboutus.html",
            template: "./src/aboutus.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "faq.html",
            template: "./src/faq.pug"
        }),
        //new StyleLintWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                }
            }, 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ]
    }
};