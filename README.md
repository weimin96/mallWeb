# 天喵商城前端页面

### 项目说明

项目地址：[天喵商城](http://mall.wiblog.cn)

服务端及接口说明见 [天喵商城服务端](https://github.com/weimin96/mall) 

基于nodejs 及 webpack 打包工具

#### 依赖的webpack plugins:

- css-loader
- style-loader
- file-loader
- html-loader
- url-loader
- html-webpack-plugin
- extract-text-webpack-plugin
- webpack
- webpack-dev-server
- font-awesome
- hogan

---

### 目录结构

├─image	——存放项目图片

├─page 		——存放项目页面相关的样式和脚本文件

├─service	——存放与服务端连接的请求方法的脚本

├─util		——存放 utils 文件 包括pagination分页插件和unslider轮播图插件及接口处理

└─view		——存放项目页面相关的html文件

---

### 项目初始化步骤

1.安装nodejs环境

    下载地址 : https://nodejs.org/zh-cn/download/current/

2.全局安装webpack(最好是3.x版本)

    命令: (sudo) npm install webpack@3.10.0 -g

3.全局安装webpack-dev-server

    命令: (sudo) npm install -g webpack-dev-server

4.全局安装webpack-cli

    命令: (sudo) npm install -g webpack-cli

5.在项目根目录执行npm初始化

    命令: npm install

6.启动项目 `(待改进)`

    开发模式: 
    修改webpack.config.js下的config.output.publicpath 为'/dist/'
    npm run dev
    生产模式(线上): 
    修改webpack.config.js下的config.output.publicpath 为'//(你的域名)/mallWeb/dist/'
    npm run dist

7.开发模式下预览项目

    访问：http://localhost:8088/dist/view/index.html