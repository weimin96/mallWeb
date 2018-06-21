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
                    url: "/list.do?keyword=" + searchText,
                    // dataType: "jsonp",
                    // jsonp: 'cb',
                    success: function(data) {
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