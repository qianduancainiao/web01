/**
 * Created by Administrator on 2017/11/12/012.
 */
define(['jquery'],function($){
    var setMenu=function(urlpart){
        var pathname = urlpart || location.pathname;
        $(".navs li a").toArray().filter(function(value){
            return value.pathname==pathname
        }).forEach(function(value){
            $(value).addClass("active")
        })
    }

    var setList=function(){
        $(".navs li a + ul").show()
    }
    return {
        setMenu:setMenu,
        setList:setList
    }
})
