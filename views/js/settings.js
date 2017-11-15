/**
 * Created by Administrator on 2017/11/11/011.
 */
define(['jquery','template','uploadify','CKEDITOR','region','datepicker','zhCN','validate'],function($,template,uploadify,CKEDITOR){
    $.ajax({
        url:'/api/teacher/profile',
        type:'get',
        success:function(info){
            if(info.code==200){
                console.log(info);
                var html=template('settingsTpl',info.result);
                $(".body .settings").html(html);
                $(".form-horizontal").validate({
                    description:{
                        required:{
                            required:'请填写完整信息'
                        }
                    }
                })
                $(".datepicker").datepicker({
                    language:'zh-CN'
                })
                $("#upfile").uploadify({
                    swf:'/views/assets/uploadify/uploadify.swf',
                    uploader:'/api/uploader/avatar',
                    fileObjName:'tc_avatar',
                    onUploadSuccess:function(_,filename){
                        console.log(filename);
                        $("#upfileView").attr('src',JSON.parse(filename).result.path);
                    },
                    itemTemplate:'<span></span>',
                    buttonText:'',
                    width:'120px',
                    height:'120px',
                    buttonCursor:'hand'
                })
                $("#hometown").region({
                    url:'/views/assets/jquery-region/region.json'
                })
                CKEDITOR.replace( 'tc_introduce' );

            }

        }

    })

    $(".body .settings").on("submit",".form-horizontal",function(){
        for(var k in CKEDITOR.instances){
            CKEDITOR.instances[k].updateElement()
        }
        /*var tc_hometown=$('select:nth-of-type(1)').find(':selected').text()
            +'|'+$('select:nth-of-type(1)').find(':selected').text()
        +'|'+$('select:nth-of-type(3)').find(':selected').text();
        console.log(tc_hometown);*/
        var tc_hometown = $( 'select', this ).find( ':selected' ).map( function () {
            // this 在回调函数中, 表示的是 DOM 对象
            return $( this ).text();
        }).toArray().join( '|' );
        $(this).append('<input type="hidden" value='+tc_hometown+' name="tc_hometown">')
        var formData=$(this).serialize();
        console.log(formData);
        $.ajax({
            url:'/api/teacher/modify',
            type:'post',
            data:formData,
            success:function(info){
                if(info.code==200){
                    alert("修改成功")
                    location.pathname='/'
                }
            }
        })


        return false
    })

})
