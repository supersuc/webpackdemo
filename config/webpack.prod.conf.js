/**
 *Create by suchao an 2019/9/11
 */
/**
 *Create by suchao an 2019/9/10
 */
const path = require("path");
const webpack = require("webpack");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.conf.js");

//webpack-dev-server配置
module.exports = merge(common,{
    devtool: "source-map",
    //webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:"./css/demo.css",
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp:/\.css$/g,
            cssProcessor:require("cssnano"),
            cssProcessorPluginOptions:{
                preset:["default",{discardComments:{removeAll:true}}]
            },
            canPrint: true
        }),
        new CopyWebpackPlugin([
            {
                from:__dirname+"/public/assets",
                to:__dirname+"/dist/assets"
            }
        ]),
    ]

});