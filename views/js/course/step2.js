/**
 * Created by Administrator on 2017/11/13/013.
 */
define(['jquery','tools','template','form','uploadify','Jcrop'],function($,tools,template){
    var search=location.search;
    cs_id=search.split('=')[1]
    console.log(search);
    $.ajax({
        url:'/api/course/picture',
        data:{cs_id:cs_id},
        type:'get',
        success:function(info){
            console.log(info);
            if(info.code==200){
                var html=template('courseTpl',info.result);
                $("#courseMessage").append(html);
                changePicture(info.result);
                if ( info.result.cs_cover_original ) {
                    jcropImage();
                }
            }
        }
    })
    tools.setMenu('/coure/course_add')
    tools.setList();

    function changePicture(result){
        $("#addStep2").uploadify({
            swf:'/views/assets/uploadify/uploadify.swf',
            fileObjName:'cs_cover_original',
            uploader:'/api/uploader/cover',
            buttonText:'选择图片',
            buttonClass:'btn btn-success btn-sm',
            onUploadSuccess:function(_,filename){
                $(".preview img").attr('src',JSON.parse(filename).result.path)
                $('#btn_selectPic').prop('disabled',false);
                jcropImage();
            },

            width: '70',
            height:'auto',
            itemTemplate:'<span></span>',
            formData:{
                cs_id:result.cs_id
            },
            onInit: function () {
                $( '#addStep2' ).css( {
                    overflow: 'hidden',
                }).find( 'div' ).removeClass( 'uploadify-button' );
            }



        })
    }

    function jcropImage(){
        $(".preview img").Jcrop({
            aspectRatio:2
        },function(){
            var jcrop_api = this;
            var w = jcrop_api.ui.stage.width,
                h = jcrop_api.ui.stage.width / 2,
                x = 0,
                y = (jcrop_api.ui.stage.height - h) / 2;
            jcrop_api.newSelection();
            jcrop_api.setSelect( [ x, y, w, h ] );
            jcrop_api.initComponent('Thumbnailer', {
                width: 240, height: 120,
                target: '.thumb' });

        })


    }
})
