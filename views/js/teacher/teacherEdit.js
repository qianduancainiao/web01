/**
 * Created by Administrator on 2017/11/9/009.
 */
define(['jquery','template','datepicker','zhCN','validate'],function($,template){
    var rtcId = /tc_id=(\d+)/;
    var search=location.search;
    console.log(search);
    var tc_id = rtcId.exec( search )[ 1 ];
    $.ajax({
        url:'/api/teacher/edit',
        type:'get',
        data:{tc_id:tc_id},
        success:function(info){
            if(info.code==200){
                var teacherEditData=template('teacherEdit',info.result);
                $(".teacher-add").html(teacherEditData);
                $(".datepicker").datepicker({
                    language: 'zh-CN'
                });
                $("#teacherEditForm").validate({
                    description:{
                        required:{
                            required:'请填写完整信息'
                        }
                    }
                })
            }
        }
    })


    $(".teacher-add").on("submit","#teacherEditForm",function(){
        var formData=$(this).serialize();
        console.log(formData);
        $.ajax({
            url:'/api/teacher/update',
            type:'post',
            data:formData,
            success:function(info){
                if(info.code==200){
                    alert("修改成功");
                    location.pathname='/teacher/teacher_list';
                }
            }
        })
        return false;

    })






})
