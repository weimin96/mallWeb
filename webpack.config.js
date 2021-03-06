var webpack             = require('webpack');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin   = require('html-webpack-plugin');



// 获取html-webpack-plugin参数的方法 html模板处理 将对应js css引进来 加入hash
var getHtmlConfig = function(name, title){
    return {
        template    : './src/view/' + name + '.html',
        filename    : 'view/' + name + '.html',
        title       : title,
        inject      : true,
        hash        : true,
        chunks      : ['common', name]
    };
};
// webpack config
// 生成对应的js文件 到dist/js/下
var config = {
    entry: {
        'common'            : ['./src/page/common/index.js'],
        'index'             : ['./src/page/index/index.js'],
        'list'              : ['./src/page/list/index.js'],
        'detail'            : ['./src/page/detail/index.js'],
        'cart'              : ['./src/page/cart/index.js'],
        'user-login'        : ['./src/page/user-login/index.js'],
        'user-register'     : ['./src/page/user-register/index.js'],
        'user-pass-reset'   : ['./src/page/user-pass-reset/index.js'],
        'user-center'       : ['./src/page/user-center/index.js'],
        'user-center-update': ['./src/page/user-center-update/index.js'],
        'user-pass-update'  : ['./src/page/user-pass-update/index.js'],
        'result'            : ['./src/page/result/index.js'],
    },
    output: { // dist文件目录
        path: __dirname + '/dist/', 
        publicPath : '//s.wiblog.cn/mallWeb/dist/',
        // publicPath : '/dist/',
        filename: 'js/[name].js'
    },

    // 代理配置
      devServer: {
        proxy: {
            '/user/*': {
            target: 'http://mall.wiblog.cn',
            changeOrigin: true,
            secure: false
            },
            '/cart/*': {
            target: 'http://mall.wiblog.cn',
            changeOrigin: true,
            secure: false
            },
            '/product/*': {
            target: 'http://mall.wiblog.cn',
            changeOrigin: true,
            secure: false
            }
        }
    },


    externals : {
        'jquery' : 'window.jQuery'
    },
    module: {
        loaders: [
        // css文件处理 用于被对应js文件引入  npm install css-loader style-loader --save-dev
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
            // 图片字体存放到resource下 小于100转换为base64
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
            { test: /\.string$/, loader: 'html-loader'}
        ]
    },
    resolve : {
        alias : {
            node_modules    : __dirname + '/node_modules',
            util            : __dirname + '/src/util',
            page            : __dirname + '/src/page',
            service         : __dirname + '/src/service',
            image           : __dirname + '/src/image'
        }
    },
    plugins: [
        // 独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }),
        // 把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        // html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('list', '商品列表页')),
        new HtmlWebpackPlugin(getHtmlConfig('detail', '商品详情页')),
        new HtmlWebpackPlugin(getHtmlConfig('cart', '购物车')),
        new HtmlWebpackPlugin(getHtmlConfig('user-login', '用户登录')),
        new HtmlWebpackPlugin(getHtmlConfig('user-register', '用户注册')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset', '找回密码')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center', '个人中心')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center-update', '修改个人信息')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-update', '修改密码')),
        new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果')),
    ]
};

module.exports = config;