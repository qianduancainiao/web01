/**
 * Created by Administrator on 2017/11/5/005.
 */

$(function(){
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });

    var php_session_id=$.cookie('PHPSESSID');
    if(!php_session_id && location.pathname!=="/login"){
        location.pathname='/login';
    }
    var userInfo= $.cookie('userInfo');
    var userInfoObj=JSON.parse(userInfo || '{}');
    var profileData='<div class="avatar img-circle">'+
        '<img src="'+(userInfoObj.tc_advatar || '/views/images/default.png')+'">'+
        '</div>'+
        '<h4>'+(userInfoObj.tc_name || '匿名用户')+'</h4>'
    $(".aside .profile").html(profileData);
})

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




