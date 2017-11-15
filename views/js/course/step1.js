/**
 * Created by Administrator on 2017/11/13/013.
 */
define(['jquery','tools','template','CKEDITOR'],function($,tools,template,CKEDITOR){
    var search=location.search;
    cs_id=search.split('=')[1]
    console.log(search);
    $.ajax({
        url:'/api/course/basic',
        data:{cs_id:cs_id},
        type:'get',
        success:function(info){
            console.log(info);
            var html=template('courseTpl',info.result);
            $("#courseMessage").append(html);
            CKEDITOR.replace('cs_brief');
        }
    })
    $("#courseMessage").on("submit","#courseAddForm",function(){
        for(var k in CKEDITOR.instances){
            CKEDITOR.instances[k].updateElement()
        }
        $("#courseAddForm").append('<input type="hidden" name="cs_id" value='+cs_id+'>')
        var formData=$(this).serialize()
        console.log(formData);
        $.ajax({
            url:'/api/course/update/basic',
            type:'post',
            data:formData,
            success:function(info){
                if(info.code==200){
                    alert("保存完成");
                    location.pathname="/course/course_add_step2"
                }
            }

        })
        return false
    })
    tools.setMenu('/course/course_add')
    tools.setList();
})
