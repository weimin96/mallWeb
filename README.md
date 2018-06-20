# 天喵商城前端页面

### 项目说明

项目地址：[天喵商城](http://mall.wiblog.cn)

服务端及接口说明见 [天喵商城服务端](https://github.com/weimin96/mall) 

基于nodejs 及 webpack 打包工具

#### 依赖webpack插件:

- css-loader
- style-loader
- file-loader
- html-loader
- url-loader
- html-webpack-plugin
- extract-text-webpack-plugin

### 目录结构

├─image	——存放项目图片
├─page 		——存放项目页面相关的样式和脚本文件
├─service	——存放与服务端连接的请求方法的脚本
├─util		——存放 utils 文件 包括pagination分页插件和unslider轮播图插件及接口处理
└─view		——存放项目页面相关的html文件

### 项目初始化步骤

1.安装nodejs环境
    下载地址 : https://nodejs.org/download/release/v4.4.7/

2.全局安装webpack v^1.15.0
    命令: (sudo) npm install -g webpack@^1.15.0

3.全局安装webpack-dev-server v^1.16.5
    命令: (sudo) npm install -g webpack-dev-server@^1.16.5
4.在项目根目录执行npm初始化
    命令: npm install

5.启动项目
    开发模式: npm run dev (windows系统上为npm run dev_win)
    生产模式: npm run dist (windows系统上为npm run dist_win)

6.开发模式下预览项目
    访问：http://localhost:8088/dist/view/index.html