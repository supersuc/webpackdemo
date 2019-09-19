/**
 *Create by suchao an 2019/9/11
 */
/**
 *Create by suchao an 2019/9/10
 */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//webpack-dev-server配置
module.exports = {
    entry:'./public/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[hash]dist.js'
    },

    //loader模块
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader",{
                    loader: "css-loader",
                    options: {
                        sourceMap:true
                    }
                }]
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        attrs:['img:src',"img:data-src"]
                    }
                }
            },
            {
                test:/\.scss$/,
                //顺序不能颠倒，style在前面
                use:['style-loader','css-loader','sass-loader',{
                    loader: "postcss-loader",
                    options: {
                        plugins:[
                            require("autoprefixer")
                        ]
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader: "file-loader",
                        options: {
                            name:'[hash]suchao.jpg',
                            // context:'../'
                            // publicPath:'http://www.abc.com/img'
                            outputPath:'./pub/img'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath:'./pub/fonts'
                    }
                }]
            },
            {
                //Es6转化Es5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets:["@babel/preset-env"]
                    }
                }
            },
            // {
            //     //css单独提取插件配置
            //     test: /\.css$/,
            //     use: ExtractTextWebpackPlugin.extract({
            //         fallback:"style-loader",
            //         use:"css-loader"
            //     })
            // }

            //miniextract
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader,"css-loader"]
            // },
        ]
    },
    // resolve: {
    //     alias: {
    //         jQuery:path.resolve(__dirname,'public/js/jquery.min.js')
    //     }
    // },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         jQuery:"jQuery"
    //     })
    // ]

    //webpack插件
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "webpack.html",
            minify:{
                minimize:true,
                removeAttributeQuotes:true,
                removeComments:true,
                minifyCss:true,
                minifyJs:true,
                removeEmptyElements:true,
                collapseWhitespace:true
            },
            hash: true
        }),
    ]

};