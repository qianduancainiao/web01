/**
 * Created by Administrator on 2017/11/6/006.
 */
require.config({
    baseUrl:'/views/assets',
    paths:{
        jquery:'jquery/jquery.min',
        form:'jquery-form/jquery.form',
        cookie:'jquery-cookie/jquery.cookie',
        template:'art-template/template-web',
        less:'less.js/less',
        bootstrap:'bootstrap/js/bootstrap.min',
        echarts:'echarts/echarts.min',
        common:'../js/common',
        echart:'../js/echart',
        login:'../js/login',
        teacherList:'../js/teacher/teacherList',
        teacherAdd:'../js/teacher/teacherAdd',
        teacherEdit:'../js/teacher/teacherEdit',
        nprogress:'nprogress/nprogress',
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
        zhCN:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate:'validate/jquery-validate',
        settings:'../js/settings',
        uploadify:'uploadify/jquery.uploadify',
        region:'jquery-region/jquery.region',
        CKEDITOR:'ckeditor/ckeditor',
        tools:'../js/tools',
        add:'../js/course/add',
        step1:'../js/course/step1',
        step2:'../js/course/step2',
        step3:'../js/course/step3',
        category:'../js/course/category',
        categoryAdd:'../js/course/categoryAdd',
        list:'../js/course/list',
        topic:'../js/course/topic',
        Jcrop:'Jcrop-WIP-2.x/js/Jcrop'
    },
    shim: {
        bootstrap:{
            deps:['jquery']
        },
        zhCN:{
            deps:['datepicker']
        },
        validate:{
            deps:['jquery']
        },
        uploadify:{
            deps:['jquery']
        },
        CKEDITOR:{
            exports:'CKEDITOR'
        },
        Jcrop:{
            deps:['jquery']
        }
    }

})
require(['less','common']);



