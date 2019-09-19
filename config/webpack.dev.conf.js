/**
 *Create by suchao an 2019/9/11
 */
/**
 *Create by suchao an 2019/9/10
 */
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.conf.js");

//webpack-dev-server配置
module.exports = merge(common,{
    devtool: "cheap-module-eval-source-map",
    devServer:{
        contentBase:'./dist', //设置服务器访问的基本目录
        host:'localhost', //服务器的IP地址
        port:8080, //端口
        open:true, //自动打开页面
        hot:true,
        hotOnly:true
    },
    //webpack插件
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()

    ]

});