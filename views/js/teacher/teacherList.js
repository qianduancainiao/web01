/**
 * Created by Administrator on 2017/11/8/008.
 */
define(['jquery','template','bootstrap'],function($,template){
    $.ajax({
        url:'/api/teacher',
        type:'get',
        success:function(info){
            if(info.code==200){
                var teacherList=template('teacherListInfo',{list:info.result});
                $(".teacher_data").html(teacherList);
            }
        }
    })

    var rhometown=/\|/g;
    template.defaults.imports.formatHometown=function(hometown){
        return hometown.replace(rhometown,' ');
    }
    $(".teacher_data").on("click",".teacherDataWatch",function(){
        var tc_id=$(this).parent("td").attr('data-tc-id');
        $.ajax({
            url:'/api/teacher/view',
            type:'get',
            data:{tc_id:tc_id},
            success:function(info){
                if(info.code==200){
                    console.log(info.result);
                    var watchData=template('teacherWatch',info.result);
                    $(".table-teacherWatch").html(watchData);
                    $( '#teacherModal' ).modal( 'show' );
                }
            }
        })
        return false;
    })
    $(".teacher_data").on("click","#changeBuff",function(){
        var tc_id=$(this).parent("td").attr('data-tc-id');
        var tc_status=$(this).attr('data-tc-status');
        var that=this;
        $.ajax({
            url:'/api/teacher/handle',
            type:'post',
            data:{tc_id:tc_id,tc_status:tc_status},
            success:function(info){
                if(info.code==200){
                    $(that).attr('data-tc-status',info.result.tc_status)
                           .text(info.result.tc_status==0?'启 用':'注 销');
                }
            }
        })
        return false;
    })
})
