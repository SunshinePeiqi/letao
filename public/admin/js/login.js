

$(function () {

    // alert('1')
    // 表单校验
    $('#form').bootstrapValidator({
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 3,
                        max: 9,
                        message: '用户名长度必须在3到9之间'
                    },
                    //正则校验
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '用户名由数字字母下划线和.组成'
                    },
                    callback: {
                        message: '用户名错误'
                    }
                }
            },
            // 校验密码
            password: {
                validators: {

                    // 不能为空
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    // 长度校验
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '用户名密码逆序在6到12位'
                    },
                    callback: {
                        message: '密码错误'
                    }
                }
            },
            

        },

        // 校验时的图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-thumbs-up',
            invalid: 'glyphicon glyphicon-thumbs-down',
            validating: 'glyphicon glyphicon-refresh'
        },
    })


    // 点击登录按钮 发送ajax请求
    $("#form").on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑
        // alert('1');
        $.ajax({
            type: 'post',
            url: '/employee/employeeLogin',            
            data: $("#form").serialize(),
            success: function (info) {
                console.log(info);
                if (info.error === 1000) {
                    // alert('用户名不存在')
                    // 参数1 : 修改哪个字段
                    // 参数2 : 修改的状态
                    // 参数3 ：指定显示哪个错误的信息
                    $('#form').data('bootstrapValidator').updateStatus('username', 'INVALID', 'callback')
                }
                if (info.error === 1001) {
                    // alert('用户名密码错误')
                    $('#form').data('bootstrapValidator').updateStatus('password', 'INVALID', 'callback')
                }
                if (info.success) {
                    location.href = 'index.html'
                }
            }
        })
    });


    // 表单重置
    $('[type=reset]').on('click', function () {
        $('#form').data('bootstrapValidator').resetForm(true);
    })

    // ajax请求全局事件  显示进度条
    $(document).ajaxStart(function () {
        // 开始发送请求
        NProgress.start();
    });

    $(document).ajaxStop(function () {
        // 结束发送请求
        NProgress.done();
    })



})