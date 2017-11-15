/**
 * Created by Administrator on 2017/11/7/007.
 */
define(['jquery','cookie'],function($){
    $("#formId").on("submit", function () {
        var formData=$(this).serialize();

        console.log(formData);
        $.ajax({
            url:'/api/login',
            data:formData,
            type:'post',
            success:function(info){
                console.log(JSON.stringify(info.result));
                console.log(info);
                if(info.code==200){
                    alert("登陆成功");
                    $.cookie('userInfo',JSON.stringify(info.result),{path:'/'});
                    location.pathname='/';
                }
            }
        })
        return false;
    })

    /*$("#formId").on("submit",function(){
     var tc_name=$("#userName").val();
     var tc_pass=$("#pass").val();
     console.log(tc_name);
     console.log(tc_pass);
     var formData={tc_name:tc_name,tc_pass:tc_pass};
     $.ajax({
     url:'/api/login',
     data:formData,
     type:'post',
     success:function(info){
     console.log(info);
     if(info.code==200){
     alert("登陆成功");
     $.cookie('userInfo',JSON.stringify(info.result),{path:'/'});
     location.pathname='/';
     }
     }
     })
     return false;
     })*/



})
