/**
 * Created by Administrator on 2017/11/13/013.
 */
define(['jquery','tools','validate'],function($,tools){
    $(".form-horizontal").validate({
        description:{
            required:{
                required:'请填写完整信息'
            }
        }
    })

    $("#courseAdd").submit(function(){
        var formData=$(this).serialize();
        $.ajax({
            url:'/api/course/create',
            type:'post',
            data:formData,
            success:function(info){
                if(info.code==200){
                    alert("创建完成");
                    location.href='/course/course_add_step1?cs_id='+ info.result.cs_id

                }
            }
        })
        return false
    })

    tools.setList()
})
