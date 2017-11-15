define(['jquery','template','nprogress','tools','cookie'],function($,template,nprogress,tools){
       $('.navs ul').prev('a').on('click', function () {
              $(this).next().slideToggle();
       });

       var php_session_id=$.cookie('PHPSESSID');
       if(!php_session_id && location.pathname!=="/login"){
              location.pathname='/login';
       }
       var userInfo= $.cookie('userInfo');
       var userInfoObj=JSON.parse(userInfo || '{}');
       var profileData=template('userProfile',userInfoObj)
       /*var profileData='<div class="avatar img-circle">'+
        '<img src="'+(userInfoObj.tc_advatar || '/views/images/default.png')+'">'+
        '</div>'+
        '<h4>'+(userInfoObj.tc_name || '匿名用户')+'</h4>'*/
       $(".aside .profile").html(profileData);


       /*$(function(){
        var php_session_id= $.cookie('PHPSESSID');
        if(!php_session_id && location.pathname!=='/login'){
        location.pathname='/login';
        }
        var userInfo= $.cookie('userInfo');
        var userInfoObj=JSON.parse(userInfo || '{}');
        console.log(userInfoObj);
        var profileData='<div class="avatar img-circle">'+
        '<img src="'+(userInfoObj.tc_advatar || '/views/images/default.png')+'">'+
        '</div>'+
        '<h4>'+(userInfoObj.tc_name || '匿名用户')+'</h4>'
        $(".aside .profile").html(profileData);
        })*/

       $("#btn_logout").on("click", function () {
              $.ajax({
                     url: '/api/logout',
                     type: 'post',
                     success: function (info) {
                            if (info.code == 200) {
                                   console.log(info);
                                   alert("退出登录");
                                   location.pathname='/';
                            }

                     }
              })
       })

       $(".loading").hide();
       $(document).ajaxStart(function(){
              $(".loading").show();
              nprogress.start();
       })
       $(document).ajaxStop(function(){
              $(".loading").fadeOut(1000);
              nprogress.done();
       })
       tools.setMenu()
})





