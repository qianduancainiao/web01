/**
 * Created by Administrator on 2017/11/9/009.
 */
define(['jquery','template','datepicker','zhCN','validate'],function($,template){
    $("#addTeacherForm").validate({
        description:{
            required:{
                required:'请填写完整信息'
            }

        }
    })

    $("#addTeacherForm").on("submit",function(){

        var formData= $(this).serialize();
        console.log(formData);

        $.ajax({
            url:'/api/teacher/add',
            type:'post',
            data:formData,
            success:function(info){
                if(info.code==200){
                    console.log(info);
                    location.pathname="/teacher/teacher_list";
                    alert("添加成功")
                }
            }
        })
        return false;
    })

    $('.datepicker').datepicker({
        language: 'zh-CN'
    });

})
