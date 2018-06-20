/*
* @Author: areo
* @Date:   2017-05-18 19:30:12
* @Last Modified by:   areo
* @Last Modified time: 2017-05-27 19:46:42
*/

'use strict';
require('./index.css');
var _mm     = require('util/mm.js');
// 通用页面头部
var header = {
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){


        $(function() {
            //键盘事件
             $("#search-input").bind("keyup", function() {
                $("#search-result").show();
                // .css({
                    // position : "absolute",
                    // top : $(".search-con").offset().top + $(".search-con").height()+15,
                    // left : $(".search-con").offset().left+400
                // });

                var searchText = $("#search-input").val();         
                $.ajax({
                    type: "GET",
                    url: "https://api.bing.com/qsonhs.aspx?type=cb&q=" + searchText,
                    dataType: "jsonp",
                    jsonp: 'cb',
                    success: function(data) {
                        data={
                            "status":0,
                            "data":{
                                "pageNum":1,"pageSize":10,"size":4,"orderBy":null,"startRow":1,"endRow":4,"total":4,"pages":1,
                                "list":[
                                {
                                    "id":26,"categoryId":100002,"name":"Apple iPhone 7 Plus (A1661) 128G 玫瑰金色 移动联通电信4G手机","subtitle":"iPhone 7，现更以红色呈现。","mainImage":"241997c4-9e62-4824-b7f0-7425c3c28917.jpeg","imageHost":"http://img.wiblog.cn/","price":6999.00,"status":1
                                },
                                    {
                                        "id":27,"categoryId":100006,"name":"Midea/美的 BCD-535WKZM(E)冰箱双开门对开门风冷无霜智能电家用","subtitle":"送品牌烤箱，五一大促","mainImage":"ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg","imageHost":"http://img.wiblog.cn/","price":3299.00,"status":1
                                },
                                    {"id":28,"categoryId":100012,
                                    "name":"4+64G送手环/Huawei/华为 nova 手机P9/P10plus青春","subtitle":"NOVA青春版1999元","mainImage":"0093f5d3-bdb4-4fb0-bec5-5465dfd26363.jpeg","imageHost":"http://img.wiblog.cn/","price":1999.00,"status":1},{"id":29,"categoryId":100008,"name":"Haier/海尔HJ100-1HU1 10公斤滚筒洗衣机全自动带烘干家用大容量 洗烘一体","subtitle":"门店机型 德邦送货","mainImage":"173335a4-5dce-4afd-9f18-a10623724c4e.jpeg","imageHost":"http://img.wiblog.cn/","price":4299.00,"status":1}],"firstPage":1,"prePage":0,"nextPage":0,"lastPage":1,"isFirstPage":true,"isLastPage":true,"hasPreviousPage":false,"hasNextPage":false,"navigatePages":8,"navigatepageNums":[1]
                                }
                            }
                        var d = data.data.list;
                        // console.log(d);
                        var html = "";
                        for(var i = 0; i < d.length; i++) {
                            html += "<li>" + d[i].name + "</li>";
                        }
                        $("#search-result ul").html(html);

                        $("#search-result").show().css({
                            top: $(".search-input").offset().top + $(".search-input").height()-27,
                            left: $(".search-input").offset().left-54,
                            position: "absolute",
                        });
                    },
                    error: function() {  
                    console.log("error");  
                    },  
                })

                $(document).bind('click', function() {  
                    $("#search-result").hide();  
                });  



            });
             $(document).delegate("li", "click", function() {
                var keyword = $(this).text();
                location.href = "./list.html?keyword=" + keyword;
            });
             // $("#search-text").blur(function(){
             //    $("#search-result").empty();
             // });
        });












        var keyword = _mm.getUrlParam('keyword');
        // keyword存在，则回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        };
    },
    bindEvent : function(){
        var _this = this;
        // 点击搜索按钮以后，做搜索提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        // 输入会车后，做搜索提交
        $('#search-input').keyup(function(e){
            // 13是回车键的keyCode
            if(e.keyCode === 13){
                _this.searchSubmit();
            }
        });
    },
    // 搜索的提交
    searchSubmit : function(){
        var keyword = $.trim($('#search-input').val());
        // 如果提交的时候有keyword,正常跳转到list页
        if(keyword){
            window.location.href = './list.html?keyword=' + keyword;
        }
        // 如果keyword为空，直接返回首页
        else{
            _mm.goHome();
        }
    }
};

header.init();