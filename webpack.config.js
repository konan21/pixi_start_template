const path = require("path");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    bail: true,
    entry: ["./src/index.ts"],
    module: {
        rules: [{
            test: /\.ts$/,
            loader: "ts-loader",
            exclude: /node_modules/
        },{
            test: /\.(scss|css)$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "html",
            template: "./src/index.html",
            filename: "./index.html",
            hash: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "./src/assets", to: "./assets"}
            ]
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};
